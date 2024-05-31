<template>
    <Modal class="contact-modal-component" ref="contactModalRef">
        <div class="w-full h-full flex-center">
            <p class="text-center contact-phone">+84 962 232 759</p>
        </div>
    </Modal>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/project-detail/Modal.vue";

const contactModalRef = ref(null);

const open = () => {
    contactModalRef.value?.open();
}

const close = () => {
    contactModalRef.value?.close();
}

defineExpose({ open, close });
</script>

<style lang="scss">
.contact-modal-component {
    .modal {
        &-content {
            .contact-phone {
                color: #FFFFFF;
                font-family: "Campton-Medium", sans-serif;
            }
        }
    }
}
</style>