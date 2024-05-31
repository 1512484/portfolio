<template>
    <div class="modal-component" :class="visible ? 'visible' : 'invisible'">
        <div class="layout" @click="close"></div>
        <div class="flex flex-col modal" :class="{'visible' : visible}" @click="close">
            <div class="modal-content">
                <slot></slot>
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
.modal-component {
    --header-height: 118px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1111;
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
        top: -200px;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        overflow: hidden;
        opacity: 0;
        transition: 0.15s ease-out;
        transition-delay: 0.1s;
        animation: hide .7s forwards;
        &.visible {
            animation: show .7s;
            display: flex;
            top: var(--header-height);
            opacity: 1;
        }
        .modal-content {
            position: relative;
            background: #100E26;
            overflow: auto;
            width: 100%;
            height: calc(100% - var(--header-height));
            padding: 30px;
            opacity: 0.9;
        }
        @keyframes show {
            0% {
                top: -200px;
            }
            60% {
                top: calc(var(--header-height) + 20px);
            }
            100% {
                top: var(--header-height);
            }
        }
        @keyframes hide {
            0% {
                top: var(--header-height);
            };
            100% {
                top: -200px;
            };
        }
    }
}
</style>