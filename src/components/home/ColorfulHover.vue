<template>
    <div class="hover-container colorful-hover-component">
        <div class="hover-list" 
            :style="`
                grid-template-columns: repeat(auto-fit, minmax(${initialWidth}px, 1fr));
                --current-item-left-percent: ${getLeftPercentage(prevActive?.index || 0)}%;
                --background-size: ${pageData.pageWidth}px ${pageData.pageHeight * 10}px
            `"
        >
            <div 
                class="hover-item" 
                v-for="num in itemNum" :key="num"
                :style="getHoverItemStyle(num)"
                :class="getHoverItemClass(num)"
            ></div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, nextTick } from "vue";

const props = defineProps({
    hoverContainerId: {
        type: String,
        default: "hover-container"
    }
});

const timer = ref(null);
const mousemoveTimeout = ref(null);
const interval = ref(null);
const isStandstill = ref(false);
const initialWidth = ref(358);
const prevActive = ref(null);
const backgroundPositionActive = ref(true);

const pageData = reactive({
    pageWidth: 1,
    pageHeight: 1,
    itemWidth: 358,
    itemHeight: 480,
    xNum: 1,
    yNum: 1,
    itemPosList: []
});

const itemNum = computed(() => pageData.xNum * pageData.yNum);

onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    setTimeout(() => {
        handleResize();
    }, 500);
});

onUnmounted(() => {
    window.removeEventListener("resize", () => {});
    window.removeEventListener("mousemove", () => {});
});

const initData = () => {
    handleResize();
}

const getTop = (index) => {
    return Math.floor(index / pageData.xNum) * pageData.itemHeight;
}

const getLeft = (index) => {
    return (index % pageData.xNum) * pageData.itemWidth;
}

const getLeftPercentage = (index) => {
    let left = getLeft(index);
    return left / (pageData.itemWidth * (pageData.xNum - 1)) * 100;
}

const getTopPercentage = (index) => {
    let top = getTop(index);
    return top / (pageData.itemHeight * (pageData.yNum - 1)) * 100;
}

const getHoverItemStyle = (num) => {
    let index = num - 1;
    let result = {
        // borderRadius: pageData.itemWidth / 1.5 + "px",
        height: pageData.itemHeight + "px",
        backgroundSize: `${pageData.pageWidth + "px"} ${pageData.pageHeight + "px"}`,
    };
    if(backgroundPositionActive.value) {
        result.backgroundPosition = `${getLeftPercentage(index)}% ${getTopPercentage(index)}%`
    }
    return result;
}

const getHoverItemClass = (num) => {
    let index = num - 1;
    return {
        'active': pageData.itemPosList?.[index]?.active,
        'standstill': pageData.itemPosList?.[index]?.standstill
    };
}

const handleResize = () => {
    let currentPage = document.getElementById(props.hoverContainerId);

    pageData.pageWidth = 1;
    pageData.pageHeight = 1;
    pageData.xNum = 1;
    pageData.yNum = 1;

    if(currentPage) {
        pageData.pageWidth = currentPage.clientWidth;
        pageData.pageHeight = currentPage.clientHeight;
    }

    // pageData.xNum = Math.floor(pageData.pageWidth / initialWidth.value);
    // pageData.yNum = Math.ceil(pageData.pageHeight / pageData.itemHeight);
    
    // pageData.itemWidth = Math.floor(pageData.pageWidth / pageData.xNum);
    // pageData.itemHeight = Math.floor(pageData.pageHeight / pageData.yNum);

    pageData.xNum = Math.floor(pageData.pageWidth / initialWidth.value);
    pageData.yNum = Math.ceil(pageData.pageHeight / pageData.itemHeight);
    
    pageData.itemWidth = Math.floor(pageData.pageWidth / pageData.xNum);
    // if(window.innerWidth > 715) {
    //     pageData.itemHeight = Math.floor(pageData.pageHeight / pageData.yNum);
    // }
    pageData.pageHeight = pageData.itemHeight * pageData.yNum;

    // let viewPortHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    // if(viewPortHeight > pageData.itemHeight * 2) {
    //     viewPortHeight = pageData.itemHeight;
    // }

    // pageData.xNum = Math.floor(pageData.pageWidth / initialWidth.value);
    // pageData.yNum = Math.floor(pageData.pageHeight / viewPortHeight);
    
    // pageData.itemWidth = Math.floor(pageData.pageWidth / pageData.xNum);
    // pageData.itemHeight = Math.floor(pageData.pageHeight / pageData.yNum);

    pageData.itemPosList = [...Array(itemNum.value)].map((_, index) => ({
        index,
        top: getTop(index),
        left: getLeft(index),
        right: getLeft(index) + pageData.itemWidth,
        bottom: getTop(index) + pageData.itemHeight,
        active: false,
        standstill: false
    }));

    // console.log(pageData.itemPosList);
}

const handleMouseMove = (evt) => {
    resetCheckStandstill();
    if(!evt) return;
    let x = evt.clientX || 0;
    let y = (evt.clientY || 0) + document.documentElement.scrollTop;
    backgroundPositionActive.value = true;
    // if(interval.value) {
    //     clearInterval(interval.value);
    // }
    if(mousemoveTimeout.value) {
        clearTimeout(mousemoveTimeout.value);
    }
    mousemoveTimeout.value = setTimeout(() => {
        if(prevActive.value) {
            prevActive.value.active = false;
            prevActive.value.standstill = false;
        }
        for(let item of pageData.itemPosList) {
            if(x >= item.left && x <= item.right && y >= item.top && y <= item.bottom) {
                item.active = true;
                prevActive.value = item;
                break;
            }
        }
    }, 0);
}

const resetCheckStandstill = () => {
    isStandstill.value = false;
    if(timer.value) {
        clearTimeout(timer.value);
    }

    timer.value = setTimeout(() => {
        isStandstill.value = true;
        handleStandstill();
    }, 5000);
}

const handleStandstill = () => {
    if(prevActive.value) {
        // prevActive.value.active = false;
        // setTimeout(() => {
            prevActive.value.standstill = true;

            // let currentPage = document.getElementById(props.hoverContainerId);
            // if(!currentPage) return;
            // let items = currentPage.querySelectorAll(".hover-item");
            // let index = prevActive.value.index;
            // if(items?.[index]) {
            //     interval.value = setInterval(async () => {
            //         // items[index].style.backgroundPosition = "";
            //         backgroundPositionActive.value = false;
            //         await nextTick();
            //         await new Promise((resolve) => setTimeout(resolve(1)), 1000);
            //         backgroundPositionActive.value = true;
            //         // items[index].style.backgroundPosition = `${getLeftPercentage(index)}% ${getTopPercentage(index)}%`;
            //     }, 2000);
            // }
            backgroundPositionActive.value = false;
        // }, 3500);
    }
}

defineExpose({ initData });
</script>
  
<style lang="scss">
.colorful-hover-component {
    &.hover-container {
        --current-item-left-percent:  0%;
        --background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: -1;
    }
    .hover {
        &-list {
            width: 100%;
            height: 100%;
            display: grid;
            overflow: hidden;
        }
        &-item {
            width: 100%;
            background: url("@/assets/images/bg-1.png") no-repeat;
            // background: url("https://static01.nyt.com/images/2022/11/29/science/00tb-cats1/merlin_194921559_c9e53b04-169a-4144-bd76-9ec2d987c35c-superJumbo.jpg") no-repeat;
            opacity: 0;
            filter: blur(130px);
            // transition: 1.5s ease-in-out;
            transition: 0.7s ease-in-out;
            // border: 1px solid #f00;
            &.active {
                transition: 0.2s ease-in-out;
                opacity: 1;
                transform: scale(1.23);
            }
            &.standstill {
                opacity: 1;
                transform: scale(1.23);
                animation: standstill-animate 5s linear forwards infinite;
                // animation-delay: 1s;
                animation-direction: alternate;
            }
        }

        @keyframes standstill-animate {
            0% {
                background-position: var(--current-item-left-percent) 0%;
                transform: scale(1);
            }
            50% {
                transform: scale(0.8);
            }
            100% {
                background-position: var(--current-item-left-percent) var(--background-size);
                transform: scale(1.23);
            }
        }
    }
}
</style>