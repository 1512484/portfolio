<template>
    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg" 
        class="go-to-top-component"
        :class="{'visible': isVisibile}"
        @click="goToTop"
        :style="`right: ${buttonRight}`"
    >
        <path d="M14.6621 25.8186L16.516 27.6725L23.866 20.3357V36.3373H26.4957V20.3357L33.8325 27.6856L35.6996 25.8186L25.1809 15.2998L14.6621 25.8186Z" fill="#C3A8FF"/>
        <circle cx="25.5" cy="25.5" r="24" stroke="#C3A8FF" stroke-width="3"/>
    </svg>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";

const isVisibile = ref(false);
const buttonRight = ref("15.97%");

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();
    handleResize();
});

onBeforeMount(() => {
    window.removeEventListener("scroll", () => {});
    window.removeEventListener("resize", () => {});
});

const handleScroll = () => {
    var scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if ((document.documentElement.scrollTop / scrollTotal) > 0.5) {
        isVisibile.value = true;
    } else {
        isVisibile.value = false;
    }
}

const handleResize = () => {
    let right = 20;
    if(window.innerWidth > 846 + 20) {
        right = (window.innerWidth - (864 + 20 + 60)) / 2;
        if(right < 20) {
            right = 20;
        }
    }
    buttonRight.value = right + "px";
}

const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
</script>

<style lang="scss">
.go-to-top-component {
    position: fixed;
    right: 15.97%;
    cursor: pointer;
    bottom: -100%;
    transition: 0.3s ease;
    z-index: 1;
    &.visible {
        bottom: 200px;
    }
}
</style>