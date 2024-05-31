<template>
    <div class="hover-container colorful-hover-component-1">
        <div class="hover-list" 
            :style="`
                grid-template-columns: repeat(auto-fit, minmax(${initialWidth}px, 1fr));
            `"
        >
            <div class="hover-item" 
                v-for="num in itemNum" :key="num"
                :style="getHoverItemStyle(num)"
                :class="getHoverItemClass(num)"
            ></div>

            <div class="hover-item hover-sub-item" 
                v-for="num in pageData.xNum * 2 - 1" :key="num"
                :style="getHoverSubItemStyle(num)"
                :class="getHoverSubItemClass(num)"
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

const mousemoveTimeout = ref(null);
const initialWidth = ref(180);
const prevActive = ref(null);
const prevSubActive = ref(null);
const spaceBetweenRow = ref(50);
const largeRadius = ref(999);
const smallRadius = ref(0);
const currentPage = ref(null);

const pageData = reactive({
    pageWidth: 1,
    pageHeight: 1,
    itemWidth: 180,
    itemHeight: 360,
    subItemWidth: 90,
    subItemHeight: 180,
    xNum: 1,
    yNum: 2,
    itemPosList: [],
    subItemPosList: [],
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
    if(index / pageData.xNum >= 1) {
        return Math.floor(index / pageData.xNum) * pageData.itemHeight + spaceBetweenRow.value;
    }
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

const getSubItemLeftPercentage = (index) => {
    let left = pageData.subItemPosList?.[index]?.left;
    return left / (pageData.subItemWidth * ((pageData.xNum * 2 - 1))) * 100;
}

const getSubItemTopPercentage = (index) => {
    let top = pageData.subItemPosList?.[index]?.top;
    return (top / (pageData.itemHeight * (pageData.yNum - 1)) - pageData.subItemHeight / (2 * pageData.itemHeight)) * 100;
}

const getHoverItemStyle = (num) => {
    let index = num - 1;
    return {
        height: pageData.itemHeight + "px",
        borderTopLeftRadius: (index / pageData.xNum >= 1 ? largeRadius.value : smallRadius.value) + "px",
        borderTopRightRadius: (index / pageData.xNum >= 1 ? largeRadius.value : smallRadius.value) + "px",
        borderBottomLeftRadius: (index / pageData.xNum >= 1 ? smallRadius.value : largeRadius.value) + "px",
        borderBottomRightRadius: (index / pageData.xNum >= 1 ? smallRadius.value : largeRadius.value) + "px",
        marginTop: (index / pageData.xNum >= 1 ? spaceBetweenRow.value : 0) + "px",
        backgroundSize: `${pageData.pageWidth + "px"} ${pageData.pageHeight + "px"}`,
        backgroundPosition: `${getLeftPercentage(index)}% ${getTopPercentage(index)}%`
    };
}

const getHoverItemClass = (num) => {
    let index = num - 1;
    return {
        active: pageData.itemPosList?.[index]?.active
    };
}

const getHoverSubItemStyle = (num) => {
    let index = num - 1;
    return {
        position: "absolute",
        top: pageData.subItemPosList?.[index]?.top + "px",
        left: pageData.subItemPosList?.[index]?.left + "px",
        width: pageData.subItemWidth + "px",
        height: pageData.subItemHeight + "px",
        borderRadius: "50px",
        backgroundSize: `${pageData.pageWidth + "px"} ${pageData.pageHeight + "px"}`,
        backgroundPosition: `${getSubItemLeftPercentage(index)}% ${getSubItemTopPercentage(index)}%`
    }
}

const getHoverSubItemClass = (num) => {
    let index = num - 1;
    return {
        'active': pageData.subItemPosList?.[index]?.active
    };
}

const handleResize = () => {
    currentPage.value = document.getElementById(props.hoverContainerId);

    pageData.pageWidth = 1;
    pageData.pageHeight = 1;
    pageData.xNum = 1;

    if(currentPage.value) {
        pageData.pageWidth = currentPage.value.clientWidth;
        pageData.pageHeight = currentPage.value.clientHeight;
    }

    pageData.xNum = Math.floor(pageData.pageWidth / initialWidth.value);
    pageData.itemWidth = Math.floor(pageData.pageWidth / pageData.xNum);
    // pageData.itemHeight = pageData.pageHeight / pageData.yNum;
    pageData.itemHeight = (pageData.pageHeight - spaceBetweenRow.value) / pageData.yNum;

    pageData.subItemWidth = pageData.itemWidth / 2;
    pageData.subItemHeight = pageData.itemHeight / 2;

    pageData.itemPosList = [...Array(itemNum.value)].map((_, index) => ({
        index,
        top: getTop(index),
        left: getLeft(index),
        right: getLeft(index) + pageData.itemWidth,
        bottom: getTop(index) + pageData.itemHeight,
        active: false
    }));

    pageData.subItemPosList = [...Array((pageData.xNum * 2 - 1) || 0)].map((_, index) => ({
        index,
        top: pageData.itemPosList[0].bottom - pageData.subItemHeight / 2,
        left: index * pageData.subItemWidth + pageData.subItemWidth / 2,
        bottom: pageData.itemPosList[0].bottom + pageData.subItemHeight / 2,
        right: index * pageData.subItemWidth + 3 * pageData.subItemWidth / 2,
        active: false
    }));
}

const handleMouseMove = (evt) => {
    let x = evt.clientX || 0;
    let y = (evt.clientY || 0) + document.documentElement.scrollTop;
    let start = 0;

    if(currentPage.value) {
        start = currentPage.value.getBoundingClientRect().top + window.pageYOffset;
    }

    if(mousemoveTimeout.value) {
        clearTimeout(mousemoveTimeout.value);
    }
    mousemoveTimeout.value = setTimeout(() => {
        if(prevActive.value) {
            prevActive.value.active = false;
        }
        for(let item of pageData.itemPosList) {
            if(x >= item.left && x <= item.right && y >= item.top + start && y <= item.bottom + start) {
                item.active = true;
                prevActive.value = item;
                break;
            }
        }
        if(prevSubActive.value) {
            prevSubActive.value.active = false;
        }
        for(let item of pageData.subItemPosList) {
            if(x >= item.left && x <= item.right && y >= item.top + start && y <= item.bottom + start) {
                item.active = true;
                prevSubActive.value = item;
                break;
            }
        }
    }, 0);
}

defineExpose({ initData });
</script>

<style lang="scss">
.colorful-hover-component-1 {
    &.hover-container {
        --current-item-left-percent:  0%;
        --background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // overflow: hidden;
        pointer-events: none;
        z-index: 1;
    }
    .hover {
        &-list {
            width: 100%;
            height: 100%;
            display: grid;
            // overflow: hidden;
        }
        &-item {
            width: 100%;
            background: url("@/assets/images/bg-2.png") no-repeat;
            // background: url("https://static01.nyt.com/images/2022/11/29/science/00tb-cats1/merlin_194921559_c9e53b04-169a-4144-bd76-9ec2d987c35c-superJumbo.jpg") no-repeat;
            opacity: 0;
            filter: blur(50px);
            transition: 2s ease-in-out;
            &.active {
                transition: 0.1s ease-in-out;
                opacity: 1;
                // transform: scale(1.05);
            }
        }
        &-sub-item {
            transform: scale(1.05);
        }
    }
}
</style>