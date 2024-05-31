<template>
    <div class="relative show-on-desktop project-detail-page" id="project-detail-page" ref="projectDetailPageRef">
        <Header />
        <!-- <div class="absolute w-full" :style="`
            top: ${hoverContainerTop}px;
            left: 0;
            height: ${hoverContainerHeight}px;
            z-index: 0;
            pointer-events: none
        `">
            <div class="relative w-full h-full" id="hover-container-1">
                <ColorfulSubHover ref="colorfulHoverRef" hover-container-id="hover-container-1" />
            </div>
        </div> -->
        <div class="absolute h-full w-full" :style="`top: 0; left: 0; z-index: 0; pointer-events: none;`">
            <div class="relative w-full h-full" id="hover-container-1">
                <ColorfulHover ref="colorfulHoverRef" hover-container-id="hover-container-1" />
            </div>
        </div>
        <main class="container">
            <div class="mb-10">
                <ProjectDetail :detail="projectData" v-if="projectData" />
                <div class="no-data-available" v-else>
                    No data available
                </div>
            </div>
            <div class="more-project" v-if="moreProjectList?.length">
                <p class="mb-2">Xem thêm</p>
                <div class="more-project-list">
                    <router-link class="more-project-item" v-for="(project, index) in moreProjectList.slice(0, 4)" :key="index" :to="`/${route.name}/${project.title}`">
                        <img src="@/assets/images/project/logo-no-hover-bg.svg" class="no-hover-bg" />
                        <img src="@/assets/images/project/logo-masked-bg-2.png" class="hover-bg" />
                        <img :src="project.icon" class="logo" />
                    </router-link>
                </div>
            </div>
        </main>
        <Footer />
        <GoToTopButton />
    </div>

    <InformBlock />
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import { useProjectStore } from "@/stores/project";
import { toLowerCaseNonAccentVietnamese, toLowerCaseNonAccentVietnameseWithNoDash } from "@/helpers/string.js";
import Header from "@/components/project-detail/Header.vue";
import Footer from "@/components/project-detail/Footer.vue";
import ProjectDetail from "@/components/project-detail/ProjectDetail.vue";
import GoToTopButton from "@/components/project-detail/GoToTopButton.vue";
import ColorfulHover from "@/components/home/ColorfulHover.vue";
import InformBlock from "@/components/InformBlock.vue";

const route = useRoute();
const projectStore = useProjectStore();

const projectData = ref(null);
const colorfulHoverRef = ref(null);
const projectDetailPageRef = ref(null);
const hoverContainerHeight = ref(700);
const hoverContainerTop = ref(0);
const observerHeight = ref(0);

const projectList = computed(() => projectStore.list);
const moreProjectList = computed(() => projectList.value?.filter((project) => (
    project.type?.toLowerCase() == route.name?.toLowerCase() &&
    toLowerCaseNonAccentVietnamese(project.title) !== toLowerCaseNonAccentVietnameseWithNoDash(route.params?.name || "") && 
    toLowerCaseNonAccentVietnamese(project.title) !== toLowerCaseNonAccentVietnamese(route.params?.name || "") && 
    project.icon
)));

onMounted(() => {
    setObserver();
});

const setObserver = () => {
    observerHeight.value = projectDetailPageRef.value?.clientHeight;
    
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var observer = new MutationObserver((mutations, observer) => {
        // fired when a mutation occurs
        // console.log(mutations, observer);
        if(projectDetailPageRef.value?.clientHeight != observerHeight.value) {
            setHoverBlockPosition();
        }
        observerHeight.value = projectDetailPageRef.value?.clientHeight;
    });

    // define what element should be observed by the observer
    // and what types of mutations trigger the callback
    observer.observe(projectDetailPageRef.value, {
        subtree: true,
        attributes: true,
        childList: true
        //...
    });
}

const setHoverBlockPosition = async () => {
    // let page = document.getElementById("project-detail-page");
    // if(!page) return;

    // let pageHeight = page.getBoundingClientRect().height;
    // let top = pageHeight * 0.7;
    // if(top + hoverContainerHeight.value + 50 > pageHeight) {
    //     top = pageHeight - hoverContainerHeight.value - 50;
    // }
    // hoverContainerTop.value = top;
    // await nextTick();
    colorfulHoverRef.value?.initData();
}

const getProjectData = () => {
    projectData.value = null;
    let projectName = route.params?.name || "";
    if(projectList.value?.length) {
        projectData.value = projectList.value?.find((project) => (
            project.type?.toLowerCase() == route.name?.toLowerCase() && 
            (toLowerCaseNonAccentVietnamese(project.title) == toLowerCaseNonAccentVietnameseWithNoDash(projectName) ||
            toLowerCaseNonAccentVietnamese(project.title) == toLowerCaseNonAccentVietnamese(projectName))
        ));
    }
    projectStore.setCurrentProject(projectData.value);
    goToTop();
}

const goToTop = () => {
    window.scrollTo({
        top: 0,
        // behavior: "smooth"
    });
}

watch(() => route, getProjectData, { immediate: true, deep: true });
</script>