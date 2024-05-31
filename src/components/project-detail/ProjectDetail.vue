<template>
    <div class="flex-center flex-col text-center mt-8 project-detail-component" v-if="detail">
        <div class="relative flex-center" id="project-detail-title" v-if="detail.icon">
            <div class="absolute w-full h-full flex-center animate-title" :style="{ 'top': logoPos.top + 'px', 'left': logoPos.left + 'px' }">
                <img :src="detail.logo || detail.icon" />
            </div>
            <div class="flex-center visibility-hidden">
                <img :src="detail.logo || detail.icon" />
            </div>
        </div>
        <div class="relative flex-center" v-else>
            <p class="campton-bold z-1 project-detail-title">{{ detail.title }}</p>
        </div>
        <p class="text-lg campton-medium z-1 mt-4.5 mb-1.5">{{ detail.name }}</p>
        <p class="text-base campton-light z-1 mb-5">{{ detail.short_description }}</p>
        <p class="text-base campton-book z-1 mb-9">
            <span v-html="detail.description"></span>
        </p>
        <p class="text-base campton-medium z-1 mb-9 campton-bold">
            <span v-if="detail.url"> Link website: <a :href="detail.url" target="_blank" style="color: #fff;">{{detail.url}}</a></span>
        </p>
        <div class="flex text-base font-bold mb-5 contributor" v-if="detail.contributors?.length">
            <template v-for="(contributor, index) in detail.contributors" :key="index">
                <div class="border-left mx-5" v-if="index"></div>
                <span class="contributor-item">
                    {{ contributor }}
                </span>
            </template>
        </div>

        <div class="image-list" v-if="detail.images?.length">
            <img 
                v-for="(image, index) in detail.images" 
                :key="index" 
                :src="image" 
                :data-aos="animateList[index % 3]" 
                data-aos-offset="200"
            />
        </div>

        <div class="children" v-if="detail.children?.length">
            <div 
                v-for="(child, index) in detail.children" 
                :key="index"
                class="children-item"
                :class="{'inline-item': child.inline_layout}"
                :data-aos="animateList[index % 3]"
                data-aos-offset="200"
            >
                <div class="item-header" v-if="child.icon || child.title">
                    <img :src="child.icon" v-if="child.icon" class="item-icon" />
                    <p class="inter-regular text-lg text-truncate ml-3.5 item-title">{{ child.title }}</p>
                </div>
                <img :src="child.banner" class="item-banner" v-if="child.banner" />
                <div class="item-video" v-if="child.video">
                    <video autoplay muted loop>
                        <source :src="child.video" />
                    </video>
                </div>
            </div>
        </div>

        <div class="z-1 extra-data" v-if="detail.extra_data">
            <div class="prototype-link" v-if="detail.extra_data.prototype">
                <p class="text-lg inter-regular text-truncate">
                    Link Prototype
                    <a :href="detail.extra_data.prototype.url" target="_blank">
                        {{ detail.extra_data.prototype.url_name }}
                    </a>
                </p>
            </div>
            <p class="text-base description" v-if="detail.extra_data.description">
                {{ detail.extra_data.description }}
            </p>
            <div class="extra-image" v-if="detail.extra_data.images?.length">
                <img
                    v-for="(image, index) in detail.extra_data.images"
                    :key="index"
                    :src="image"
                    :data-aos="animateList[index % 3]"
                    data-aos-offset="200"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from "vue";
import { useProjectStore } from "@/stores/project";

const props = defineProps({
    detail: {
        type: Object,
        required: true
    }
});

const projectStore = useProjectStore();

const animateList = ref(["fade-up", "fade-left", "fade-right"]);
const logoPos = ref({
    top: 0,
    left: 0
});

const prevProjectLogoPos = computed(() => projectStore.currentProjectLogoPos);

onMounted(async () => {
    setTitleAnimation();
});

const setTitleAnimation = async () => {
    let titleContainer = document.getElementById("project-detail-title");
    
    if(titleContainer) {
        logoPos.value = {
            left: document.documentElement.scrollTop + prevProjectLogoPos.value.left - titleContainer.getBoundingClientRect().left,
            top: document.documentElement.scrollTop + prevProjectLogoPos.value.top - titleContainer.getBoundingClientRect().top
        };
    }
    
    await nextTick();
    
    let title = document.querySelector("#project-detail-title .animate-title");
    if(title) {
        title.style.transition = "0.3s ease-in-out";
        await nextTick();
        title.style.top = 0;
        title.style.left = 0;
    }
}

watch(() => props.detail, setTitleAnimation, { deep: true });
</script>