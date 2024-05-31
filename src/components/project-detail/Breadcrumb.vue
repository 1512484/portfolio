<template>
    <div class="flex items-center breadcrumb-component">
        <template v-if="items?.length">
            <router-link v-for="(item, index) in items" :key="index" :to="item.to"
                class="text-sm"
                :class="{
                    'campton-bold cursor-default': index == items.length - 1,
                    'campton-light cursor-pointer': index != items.length - 1
                }"
            >
                {{ item.title }}{{ index != items.length - 1 ? "/" : "" }}
            </router-link>
        </template>
    </div>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
        default: () => []
    }
});
</script>

<style lang="scss">
.breadcrumb-component {
    a {
        color: #D9D9D9;
        text-decoration: none;
        &:last-of-type {
            color: #FFFFFF;
        }
    }
}
</style>