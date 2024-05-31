<template>
    <div class="show-on-desktop flex-grow flex-col flex-center project-component">
        <div class="flex-col flex-center container">
            <div class="relative">
                <img :src="ProjectMainTitle" class="animate-title main-title" />
                <img :src="ProjectMainTitle" class="visibility-hidden main-title" />
            </div>
            <p class="text-base subtitle">Mỗi sản phẩm luôn thể hiện được sự đồng bộ và tính nhất quán thông qua cách sử dụng bố cục, tone & mood rõ ràng đúng chuẩn brandguideline. Thành phẩm cuối cùng không chỉ thỏa mãn thị giác, trải nghiệm tốt nhất cho người dùng, mà còn tối ưu hóa thông điệp thương hiệu/nhãn hàng muốn truyền tải trong từng chiến dịch.</p>
        </div>
        <div class="container project-tab-container">
            <ProjectTab />
        </div>
        <div class="flex-grow flex flex-col justify-end planet-block">
            <img src="@/assets/images/Round.gif" />
        </div>
    </div>

    <InformBlock hide-go-to-home-button style="min-height: calc(100vh - 118px)" />
</template>

<script setup>
import ProjectMainTitle from "@/assets/images/project/title-portfolio.png";
import ProjectTab from "@/components/home/ProjectTab.vue";
import InformBlock from "@/components/InformBlock.vue";
</script>