<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
// import InfoModal from "@/components/project-detail/InfoModal.vue";

// const infoModalRef = ref(null);

const bodyHeight = ref(0);
const observer = ref(null);

onMounted(() => {
  try {
    AOS.init();

    observer.value = new ResizeObserver((entries) => {
      entries?.forEach((entry) => {
        let height = Number(entry.contentRect?.height || 0);
        if(height !== bodyHeight.value) {
          bodyHeight.value = height;
          AOS.refresh();
        }
      });
    });

    observer.value?.observe?.(document.body);
  } catch(error) {
    console.log("Error: ", error);
  }

  // infoModalRef.value?.open();
  // setTimeout(() => {
  //   infoModalRef.value?.close();
  // }, 3000);
});

onBeforeUnmount(() => {
  observer.value?.disconnect?.();
});
</script>

<template>
  <RouterView />
  <!-- <InfoModal ref="infoModalRef" /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
