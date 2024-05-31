<template>
    <div class="tab-header-new">
        <div
            class="tab-header-new-item"
            v-for="(tab, index) in tabList"
            :key="index"
            :class="{
                'active': tab.id == activeTab.id,
                'before-active': tab.id == activeTab?.id - 1,
                'after-active': tab.id == activeTab?.id + 1,
                'cursor-default': tab.id == 0 || tab.id == tabList.length - 1
            }"
            @click="setActiveTab(tab)"
        >
            <p>{{ tab.title }}</p>
        </div>
        <div class="before-border" :style="`width: ${beforeActiveWidth}px; left: 0;`"></div>
        <div class="after-border" :style="`width: ${afterActiveWidth}px; right: 0;`"></div>
    </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from "vue";
const props = defineProps({
    tabList: {
        type: Array,
        default: () => []
    },
    activeTab: {
        type: Object,
        default: null
    }
});

const emit = defineEmits(["change"]);

const beforeActiveWidth = ref(0);

const afterActiveWidth = ref(0);

onMounted(() => {
    window.addEventListener("resize", setBottomBorderInfo);
});

onUnmounted(() => {
    window.removeEventListener("resize", () => {});
})

const setActiveTab = (tab) => {
    emit("change", tab);
}

const setBottomBorderInfo = async () => {
    await nextTick();
    let tabHeader = document.querySelector(".tab-header-new");
    let activeTab = document.querySelector(".tab-header-new-item.active");

    if(tabHeader && activeTab) {
        let tabHeaderLeft = tabHeader.getBoundingClientRect().left;
        let tabHeaderWidth = tabHeader.getBoundingClientRect().width;
        let activeTabLeft = activeTab.getBoundingClientRect().left;
        let activeTabWidth = activeTab.getBoundingClientRect().width;

        beforeActiveWidth.value = activeTabLeft - tabHeaderLeft - 30;

        afterActiveWidth.value = tabHeaderWidth - activeTabLeft - activeTabWidth + tabHeaderLeft - 30;
    }
}

watch(() => props.activeTab, () => {
    if(props.activeTab) {
        setBottomBorderInfo();
    }
}, { immediate: true, deep: true });
</script>