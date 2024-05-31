<template>
    <div class="hide-on-desktop p-5 inform-block">
        <p class="campton-book text-xl text-center">Trang web chỉ hỗ trợ trên desktop</p>
        <button class="go-back-home-btn" v-if="!hideGoToHomeButton" @click="goToHome">Trở về trang chủ</button>
    </div>
</template>

<script setup>
defineProps({
    hideGoToHomeButton: {
        type: Boolean,
        default: false
    }
});

const goToHome = () => {
    window.location.href = "/";
}
</script>