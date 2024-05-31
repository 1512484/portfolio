<template>
    <header class="header-component">
        <div class="relative flex items-center justify-between header-content">
            <div>
                <div class="relative" id="project-title">
                    <router-link 
                        class="absolute block w-max-content campton-medium text-decoration-none mb-2.5 title" 
                        :to="portfolioUrl"
                        :style="{ 'top': projectPos.top + 'px', 'left': projectPos.left + 'px' }"
                    >
                        {{ projectTitle }}
                    </router-link>
                    <p class="campton-medium mb-2.5 title visibility-hidden">{{ projectTitle }}</p>
                </div>
                <Breadcrumb :items="breadcrumbList" />
            </div>
            <router-link to="/" class="user-image" id="user-logo-image">
                <img src="@/assets/images/profile/user-image.gif" />
            </router-link>
            <button 
                class="campton-medium contact-btn" 
                :class="{ 'active': isBtnActive }"
                @click="showContactModal"
            >Liên hệ</button>
        </div>
    </header>
    <ContactModal ref="contactModalRef" />
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import { useProjectStore } from "@/stores/project";

import Breadcrumb from "@/components/project-detail/Breadcrumb.vue";
import ContactModal from "@/components/project-detail/ContactModal.vue";

const route = useRoute();
const projectStore = useProjectStore();

const breadcrumbList = ref([]);
const portfolioUrl = ref("/?type=ui");
const projectTitle = ref("Project");
const projectPos = ref({
    top: 0,
    left: 0
});
const isBtnActive = ref(false);
const contactModalRef = ref(null);

const currentProject = computed(() => projectStore.currentProject);

onMounted(async () => {
    let userLogoImage = document.getElementById("user-logo-image");
    let projectTitleContainer = document.getElementById("project-title");
    let projectTitle = document.querySelector("#project-title .title");

    if(userLogoImage && projectTitleContainer && projectTitle) {
        projectPos.value = {
            top: 0,
            left: userLogoImage.getBoundingClientRect().left - projectTitleContainer.getBoundingClientRect().left
        };
        await nextTick();

        projectTitle.style.transition = "0.3s ease-in-out";
        await nextTick();
        projectPos.value = {
            top: 0,
            left: 0
        };
    }
});

const getBreadcrumbList = () => {
    if(route.path) {
        let title = route.name || "ui";
        if(route.name) {
            switch(route.name?.toLowerCase()) {
                case "ui":
                    title = "[UI/UX]";
                    break;
                case "graphics":
                    title = "Graphics";
                    break;
                case "animation":
                    title = "Animation";
                    break;
            }
        }

        portfolioUrl.value = `/?type=${route.name}`;

        breadcrumbList.value = [ 
            { title: "PORTFOLIO", to: portfolioUrl.value },
            { title, to: portfolioUrl.value }
        ];
        
        if(route.params?.name) {
            let currentProjectName = route.params.name;
            if(currentProject.value) {
                currentProjectName = currentProject.value.title;
            }
            breadcrumbList.value.push({ title: currentProjectName.toUpperCase(), to: "" });
        }
    }
}

const showContactModal = () => {
    isBtnActive.value = true;
    setTimeout(() => {
        isBtnActive.value = false;
    }, 300);

    contactModalRef.value?.open();
}

watch(() => route, getBreadcrumbList, { immediate: true, deep: true });
watch(() => currentProject.value, getBreadcrumbList, { immediate: true, deep: true });
</script>