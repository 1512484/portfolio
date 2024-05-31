<template>
    <div class="flex-col flex-center profile-component">
        <div class="container">
            <div class="introduce-group">
                <img src="@/assets/images/profile/introduce-image.png" class="introduce-image" />
                <!-- <img src="@/assets/images/profile/user-image.gif" class="user-image" /> -->
                <img src="@/assets/images/profile/user-logo.png" class="user-icon" />
                <img src="@/assets/images/profile/user-bottom.gif" class="user-bottom" />
            </div>
            <!-- <img src="@/assets/images/profile/introduce.svg" class="introduce-image" /> -->
            <p class="text-base text-center introduce-article">
                <!-- Mình là nữ sinh năm 1997, với gần 3 năm kinh nghiệm trong nghành đồ họa và UI/UX, mình đã tham gia trong nhiều dự án thiết kế khác nhau và tích lũy được nhiều kinh nghiệm cần thiết để trở thành một chuyên gia trong lĩnh vực này. Mình luôn tìm kiếm những ý tưởng thiết kế độc đáo và sáng tạo, có nét riêng để đưa ra giải pháp thiết kế tốt nhất cho khách hàng. Mình mong muốn được hợp tác và mang đến giải pháp thiết kế chất lượng cao cho các dự án của quý khách hàng. -->
                <!-- Với gần 3 năm kinh nghiệm trong ngành đồ họa và UI/UX, tôi không ngừng nỗ lực sáng tạo không giới hạn, hướng đến mục đích tăng giá trị thẩm mỹ và làm nổi bật màu sắc đặc trưng cho từng thương hiệu/nhãn hàng. -->
                A Graphic Designer and UX Designer, possessing over three years of expertise across a range of design projects, from logos to marketing materials and UI/UX interfaces. The pursuit of unlimited creativity is apparent in the work, striving to elevate aesthetic appeal and spotlight the distinct aspects of each brand or label.
                <br /><br />
                Each creation reflects synchronization and uniformity, adhering to brand guidelines through a clear layout, tone, and mood. The end products not only captivate visually but also ensure an exceptional user experience, effectively transmitting the unique brand message in each campaign.
                <!-- Mỗi sản phẩm luôn thể hiện được sự đồng bộ và tính nhất quán thông qua cách sử dụng bố cục, tone & mood rõ ràng đúng chuẩn brandguideline. Thành phẩm cuối cùng không chỉ thỏa mãn thị giác, trải nghiệm tốt nhất cho người dùng, mà còn tối ưu hóa thông điệp thương hiệu/nhãn hàng muốn truyền tải trong từng chiến dịch. -->
            </p>
    
            <div class="detail-group">
                <img src="@/assets/images/profile/title-skill.png" class="detail-title" />
                <div class="skill">
                    <div class="skill-item" v-for="(skill, index) in skillList" :key="index">
                        <div class="skill-logo">
                            <img :src="skill.image" class="skill-logo-image" />
                        </div>
                        <p class="skill-title">{{ skill.title }}</p>
                    </div>
                </div>
            </div>
    
            <div class="detail-group" v-if="false">
                <img src="@/assets/images/profile/title-experience.png" class="detail-title" />
                <div class="experience">
                    <div class="experience-item">
                        <div class="experience-icon">
                            <img src="@/assets/images/profile/icon-adn.gif" class="absolute-full" />
                        </div>
                        <p class="experience-period">2019</p>
                        <div class="experience-place">
                            <p class="campton-bold company-title">Viện nghiên cứu hạt nhân</p>
                            <p class="campton-bold company-title">Công ty TNHH Đà Lạt Hasfarm</p>
                        </div>
                    </div>
                    <div class="experience-item">
                        <div class="experience-icon">
                            <img src="@/assets/images/profile/icon-pen.gif" class="absolute-full" />
                        </div>
                        <p class="experience-period">2020</p>
                        <div class="experience-place">
                            <p class="campton-bold company-title">Công ty TNHH Truyền thông và Dịch vụ DPS</p>
                            <p class="campton-light company-role">Graphic Design/UIUX Design</p>
                        </div>
                    </div>
                    <div class="experience-item">
                        <div class="experience-icon">
                            <img src="@/assets/images/profile/icon-pen.gif" class="absolute-full" />
                        </div>
                        <p class="experience-period">2021-2023</p>
                        <div class="experience-place">
                            <p class="campton-bold company-title">Công ty TNHH Chin Media</p>
                            <p class="campton-light company-role">Graphic Design/UIUX Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="detail-group">
            <img src="@/assets/images/profile/title-contact.png" class="detail-title" />
            <div class="contact">
                <div class="contact-content">
                    <div class="contact-item">
                        <img src="@/assets/images/profile/icon-phone.svg" class="contact-icon" />
                        <p class="contact-info">096*******</p>
                    </div>
                    <div class="contact-item">
                        <img src="@/assets/images/profile/icon-map.svg" class="contact-icon" />
                        <p class="contact-info">Thu Duc, Ho Chi Minh City</p>
                    </div>
                    <div class="contact-item">
                        <img src="@/assets/images/profile/icon-mail.svg" class="contact-icon" />
                        <p class="contact-info">tuyennguyenthibao@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="thanks-block">
            <img src="@/assets/images/profile/title-thanks.png" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

import Photoshop from "@/assets/images/profile/logo-photoshop.png";
import AfterEffects from "@/assets/images/profile/logo-after-effects.png";
import Illustrator from "@/assets/images/profile/logo-illustrator.png";
import Figma from "@/assets/images/profile/logo-figma.png";

const skillList = ref([
    { id: 1, title: "Photoshop", image: Photoshop },
    { id: 2, title: "After Effects", image: AfterEffects },
    { id: 3, title: "Illustrator", image:Illustrator },
    { id: 4, title: "Figma", image: Figma }
]);
</script>
