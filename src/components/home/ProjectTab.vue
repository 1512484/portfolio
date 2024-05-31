<template>
    <div class="project-tab-component">
        <div class="relative">
            <!-- <div class="w-full h-full pointer-events-none border-tab-header">
                <ProjectTabHeader :tab-list="tabList" :active-tab="activeTab" />
            </div> -->
            <div class="title-tab-header">
                <ProjectTabHeaderNew :tab-list="tabList" :active-tab="activeTab" @change="setActiveTab" />
            </div>
        </div>

        <div class="tab-content" v-show="activeTab?.id == 1">
            <div class="logo-list">
                <template v-for="(item, index) in uiList" :key="index">
                    <div class="logo-item" :class="`logo-ui-${index}`" v-if="item.icon" :to="`/ui/${item.title}`"
                        @click="setCurrentPosition('ui', index, `/ui/${item.title}`)">
                        <div class="bg">
                            <img src="@/assets/images/project/logo-masked-bg-1.png" class="bg-img" />
                        </div>
                        <img :src="item.icon" class="logo-img" />
                    </div>
                </template>
                <div class="logo-item" :class="`logo-ui-rinh-qua`" to="/ui/rinh-qua"
                    @click="setCurrentPosition('ui', 'rinh-qua', '/ui/rinh-qua')">
                    <div class="bg">
                        <img src="@/assets/images/project/logo-masked-bg-1.png" class="bg-img" />
                    </div>
                    <div class="flex-center w-full logo-img">
                        <p class="text-3xl text-center campton-bold">RINH QUÀ</p>
                    </div>
                </div>
                <div class="logo-item" :class="`logo-ui-tong-hop`" to="/ui/tong-hop"
                    @click="setCurrentPosition('ui', 'tong-hop', '/ui/tong-hop')">
                    <div class="bg">
                        <img src="@/assets/images/project/logo-masked-bg-1.png" class="bg-img" />
                    </div>
                    <div class="flex-center w-full logo-img">
                        <p class="text-lg text-center campton-medium">Và rất nhiều <br /> nhãn hàng khác</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content" v-show="activeTab?.id == 2">
            <div class="logo-list">
                <template v-for="(item, index) in graphicList" :key="index">
                    <div class="logo-item" :class="`logo-graphics-${index}`" v-if="item.icon"
                        :to="`/graphics/${item.title}`"
                        @click="setCurrentPosition('graphics', index, `/graphics/${item.title}`)">
                        <div class="bg">
                            <img src="@/assets/images/project/logo-masked-bg-1.png" class="bg-img" />
                        </div>
                        <img :src="item.icon" class="logo-img" />
                    </div>
                </template>
                <div class="logo-item" :class="`logo-graphics-tong-hop`" to="/graphics/tong-hop"
                    @click="setCurrentPosition('graphics', 'tong-hop', '/graphics/tong-hop')">
                    <div class="bg">
                        <img src="@/assets/images/project/logo-masked-bg-1.png" class="bg-img" />
                    </div>
                    <!-- <div class="flex-center w-full logo-img">
                        <p class="text-lg campton-medium mr-2.5">XEM THÊM</p>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 0L4.53063 0.969375L8.36687 4.8125H0V6.1875H8.36687L4.53063 10.0306L5.5 11L11 5.5L5.5 0Z" fill="white"/>
                        </svg>
                    </div> -->
                    <div class="flex-center w-full logo-img">
                        <p class="text-lg text-center campton-medium">Tổng hợp<br />key visual, social post,...</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content" v-show="activeTab?.id == 3">

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProjectStore } from "@/stores/project";
import ProjectTabHeaderNew from "@/components/home/ProjectTabHeaderNew.vue";
import { useCommonStore } from "../../stores/common";

const route = useRoute();
const router = useRouter();
const projectStore = useProjectStore();
const commonStore = useCommonStore();

const tabList = ref([
    { id: 0, title: "" },
    { id: 1, title: "UI/UX", type: "UI" },
    { id: 2, title: "Graphics", type: "GRAPHICS" },
    { id: 3, title: "Animation", type: "ANIMATION" },
    { id: 4, title: "" },
]);

const activeTab = computed(() => {
    return commonStore.activeTab;
});


const projectList = computed(() => projectStore.list);
const graphicList = computed(() => projectList.value?.filter((project) => project.type == "GRAPHICS"));
const uiList = computed(() => projectList.value?.filter((project) => project.type == "UI"));

const setCurrentPosition = (type, index, to) => {
    let currentItem = document.querySelector(`.logo-${type}-${index} .logo-img`);
    if (currentItem) {
        let pos = {
            left: currentItem.getBoundingClientRect().left,
            top: currentItem.getBoundingClientRect().top
        };
        projectStore.setCurrentProjectLogoPos(pos);
    }
    setTimeout(() => {
        router.push(to);
    }, 100);
}

const setActiveTab = (tab) => {
    if (tab.id == 3) {
        setCurrentPosition("animation", "tong-hop", "/animation/tong-hop");
        return;
    }
    if (tab?.id !== 0 && tab?.id !== tabList.value?.length - 1) {
        commonStore.setTab(tab);
        // activeTab.value = tab;
    }
}

const initData = () => {
    if (route.query?.type && tabList.value?.length) {
        if (route.query.type.toLowerCase() == "animation") {
            setActiveTab({ id: 1, title: "UI/UX" });
            return;
        }
        let tabByType = tabList.value.find((tab) => tab.type?.toLowerCase() == route.query.type.toLowerCase());
        setActiveTab(tabByType);
    }
}

initData();
</script>