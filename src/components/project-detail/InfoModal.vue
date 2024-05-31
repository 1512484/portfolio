<template>
    <div class="info-modal-component" :class="visible ? 'visible' : 'invisible'">
        <div class="layout" @click="close"></div>
        <div class="flex flex-col modal" :class="{'visible' : visible}" @click="close">
            <div class="modal-content">
                <p class="campton-book text-lg text-center">Trang web chỉ hỗ trợ tốt nhất trên desktop</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);

const open = () => {
    visible.value = true;
    document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
}

const close = () => {
    visible.value = false;
    document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
}

defineExpose({ open, close });
</script>

<style lang="scss">
.info-modal-component {
    --header-height: 118px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1111;
    display: none;
    @media (max-width: 900px) {
        display: block;
    }
    .layout {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    &.invisible {
        pointer-events: none;
        opacity: 0;
        transition-delay: 0.15s;
    }
    &.visible {
        opacity: 1;
    }
    .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1000;
        overflow: hidden;
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: 0.15s ease-out;
        transition-delay: 0.1s;
        animation: hide .7s forwards;
        &.visible {
            animation: show .7s;
            display: flex;
            top: 50%;
            opacity: 1;
        }
        .modal-content {
            position: relative;
            background: #FFFFFF;
            overflow: auto;
            width: 353px;
            max-width: calc(100% - 40px);
            min-height: 100px;
            padding: 30px;
            p {
                color: #000000;
            }
        }
        @keyframes show {
            0% {
                top: -200px;
            }
            60% {
                top: calc(50% + 20px);
            }
            100% {
                top: 50%;
            }
        }
        @keyframes hide {
            0% {
                top: 50%;
            };
            100% {
                top: -200px;
            };
        }
    }
}
</style>