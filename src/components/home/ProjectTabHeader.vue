<template>
    <div class="tab-header">
        <div
            class="tab-header-item"
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
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script setup>
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

const setActiveTab = (tab) => {
    emit("change", tab);
}
</script>