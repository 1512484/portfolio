<template>
  <main class="relative home-view-page" id="hover-container" ref="homeViewRef">
    <ColorfulHover ref="colorfulHoverRef" />
    <div class="flex-center view-tab">
      <div v-for="(view, index) in viewList" :key="index" class="view-tab-item"
        :class="{ active: activeView?.value == view.value }" @click="changeActiveView(view)">
        {{ view.title }}
      </div>
    </div>

    <Profile v-if="activeView?.value == 'profile'" />
    <Project v-else-if="activeView?.value == 'project'" />
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Profile from "@/components/home/Profile.vue";
import Project from "@/components/home/Project.vue";
import ColorfulHover from "@/components/home/ColorfulHover.vue";
import router from "../router";
import { useCommonStore } from "../stores/common";

const route = useRoute();
const commonStore = useCommonStore();

const colorfulHoverRef = ref(null);
const homeViewRef = ref(null);
const observerHeight = ref(0);

const viewList = ref([
  { id: 1, title: "Profile", value: "profile" },
  { id: 2, title: "Project", value: "project" }
]);
const activeView = computed(() => {
  return commonStore.activeView;
})

onMounted(() => {
  setObserver();
});

const setObserver = () => {
  observerHeight.value = homeViewRef.value?.clientHeight;

  MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  var observer = new MutationObserver((mutations, observer) => {
    // fired when a mutation occurs
    // console.log(mutations, observer);
    if (homeViewRef.value?.clientHeight != observerHeight.value) {
      // setHoverBlockPosition();
      colorfulHoverRef.value?.initData();
    }
    observerHeight.value = homeViewRef.value?.clientHeight;
  });

  // define what element should be observed by the observer
  // and what types of mutations trigger the callback
  observer.observe(homeViewRef.value, {
    subtree: true,
    attributes: true,
    childList: true
    //...
  });
}

const initData = () => {
  if (route.query?.type) {
    // activeView.value = { id: 2, title: "Project", value: "project" };
    commonStore.setView({ id: 2, title: "Project", value: "project" });
    router.replace("/");
  }
}

const changeActiveView = async (view) => {
  // activeView.value = view;
  commonStore.setView(view);
  // await nextTick();
  // colorfulHoverRef.value?.initData();
}

onMounted(() => {
  initData();
});
</script>
