import { defineStore } from 'pinia'
import CuckooLogo from "@/assets/images/project/logo-cuckoo.png";
import ACBLogo from "@/assets/images/project/logo-acb.png";
import PocariSweatLogo from "@/assets/images/project/logo-pocari-sweat.png";
import OCBLogo from "@/assets/images/project/logo-ocb.png";
import AIALogo from "@/assets/images/project/logo-aia.png";
import TCBLogo from "@/assets/images/project/logo-tcb.png";
import EarthganicLogo from "@/assets/images/project/logo-earthganic.png";
import TPBankLogo from "@/assets/images/project/logo-tpbank.png";
import MBLogo from "@/assets/images/project/logo-mb-ageas.png";
import InrongdoLogo from "@/assets/images/project/logo-inrongdo.png";
import BVMatLogo from "@/assets/images/project/logo-benh-vien-mat-sai-gon.png";
import MocChauLogo from "@/assets/images/project/logo-vinatea.png";
import ChinLogo from "@/assets/images/project/logo-chin-media.png";
import TinyLogo from "@/assets/images/project/logo-tiny.svg";
import TinyLogo1 from "@/assets/images/project/logo-tiny-1.svg";
import STEventsLogo from "@/assets/images/project/logo-st-events.png";

import { graphicImages, otherGraphicImages, uiImages, otherUIImages, animationData } from "./data.js";

export const useProjectStore = defineStore('projects', {
    state: () => ({
        list: [
            {
                "type": "GRAPHICS",
                "icon": ACBLogo,
                "logo": null,
                "title": "ACB",
                "name": "Ngân hàng thương mại cổ phần Á Châu",
                "short_description": "2022-2023",
                "description": "ACB là một ngân hàng tư nhân, hướng đến tập khách hàng là các cá nhân độ tuổi từ 25 trở lên, các doanh nghiệp vừa và nhỏ . ACB tập trung chăm sóc sức khỏe tài chính của khách hàng, tiến bước với những phát triển về công nghệ mới và mang đến giải pháp tốt nhất cho nhu cầu khách hàng.",
                "contributors": null,
                "images": graphicImages.acb,
                "children": null,
                "extra_data": null
            },
            {
                "type": "GRAPHICS",
                "icon": CuckooLogo,
                "logo": null,
                "title": "CUCKOO",
                "name": "Công Ty TNHH Cuckoo Vina",
                "short_description": "2021-2022",
                "description": "Cuckoo là thương hiệu nồi cơm của Hàn Quốc tập trung vào việc giới thiệu các sản phẩm của mình là sản phẩm có chất lượng tốt và độ tin cậy cao với công nghệ tiên tiến. Phong cách thiết kế độc đáo sang trọng, mang đến cho khách hàng trải nghiệm sử dụng nồi cơm điện không chỉ là công năng mà còn là một phần của phong cách sống hiện đại.",
                "contributors": null,
                "images": graphicImages.cuckoo,
                "children": null,
                "extra_data": null
            },
            {
                "type": "GRAPHICS",
                "icon": TCBLogo,
                "logo": null,
                "title": "TECHCOMBANK",
                "name": "Ngân hàng Thương mại cổ phần Kỹ Thương Việt Nam",
                "short_description": "2022-2023",
                "description": "Techcombank Career cần tiếp thị để tìm kiếm những nhân viên tốt nhất và phù hợp nhất. Thiết kế cần hiện đại, mang tính công nghệ, thể hiện rõ slogan “vượt trội hơn mỗi ngày”.",
                "contributors": null,
                "images": graphicImages.tcb,
                "children": null,
                "extra_data": null
            },
            {
                "type": "GRAPHICS",
                "icon": OCBLogo,
                "logo": null,
                "title": "OCB",
                "name": "Ngân hàng TMCP Phương Đông - OCB",
                "short_description": "2022-2023",
                "description": "Với sản phẩm tài chính chuyên nghiệp, tin cậy, Ngân hàng OCB tận tâm chăm sóc khách hàng, khát vọng sáng tạo và định hướng tương lai với các giải pháp tài chính để đáp ứng mục tiêu của cá nhân và doanh nghiệp dài hạn. Thiết kế mang tính công nghệ, hiện đại vừa phải, sử dụng màu sắc của logo làm chủ đạo.",
                "contributors": null,
                "images": graphicImages.ocb,
                "children": null,
                "extra_data": null
            },
            {
                "type": "GRAPHICS",
                "icon": PocariSweatLogo,
                "logo": null,
                "title": "POCARI SWEAT",
                "name": "Pocari Sweat",
                "short_description": "2022",
                "description": "Pocari Sweat là một loại thức uống chứa nhiều ion, có tác dụng bổ sung nước và khoáng chất cho cơ thể dành cho người tập thể thao hay người làm việc mệt mỏi bị mất nước, trẻ bị tiêu chảy giúp cơ thể phục hồi lại trạng thái cân bằng. Thiết kế theo hướng trẻ trung, năng động có phần dễ thương.",
                "contributors": null,
                "images": graphicImages.pocari,
                "children": null,
                "extra_data": null
            },
            {
                "type": "GRAPHICS",
                "icon": AIALogo,
                "logo": null,
                "title": "AIA",
                "name": "CÔNG TY TNHH BẢO HIỂM NHÂN THỌ AIA",
                "short_description": "2022-2023",
                "description": "Hình ảnh kết hợp hài hòa màu sắc và các yếu tố nhận diện thương hiệu của cả 2 brand để làm nổi bật các ưu điểm khi mua gói bảo hiểm AIA thông qua ngân hàng VP Bank.",
                "contributors": null,
                "images": graphicImages.aia,
                "children": null,
                "extra_data": null
            },
            {
                "type": "GRAPHICS",
                "icon": EarthganicLogo,
                "logo": null,
                "title": "Earthganic Vietnam",
                "name": "Earthganic Vietnam",
                "short_description": "2022",
                "description": "Earth Ganic là sự kết hợp hoàn hảo của yếu tố thiên nhiên trong thành phần cùng chiết xuất hương hoa cỏ tự nhiên tạo nên hương thơm mang đến cảm giác dễ chịu, thư thái cho mỗi giờ tắm gội. Đối tượng khách hàng là những cô gái 18-27 tuổi, Gen Y & Gen Z, các cô gái thành thị hiện đại, rất yêu thích làm đẹp, có kiến thức tương đối về mỹ phẩm, skincare.",
                "contributors": null,
                "images": graphicImages.earthganic,
                "children": null,
                "extra_data": null
            },
            {
                "type": "GRAPHICS",
                "icon": MBLogo,
                "logo": null,
                "title": "MB AGEAS LIFE",
                "name": "Bảo hiểm nhân thọ MB Ageas Life",
                "short_description": "2022",
                "description": "Phong cách hình ảnh chủ đạo là sự tươi mới, trẻ trung, con người là trung tâm củathương hiệu bảo hiểm MB Ageas Life vì vậy hình ảnh con người luôn tự tin, tràn đầy sức sống. Nên sử dụng ánh sáng tự nhiên. Trang phục của các diễn viên thường sẽ có màu gắn liền với màu sắc thương hiệu tuy nhiên phải trang nhã không nên có những phối màu sặc sỡ.",
                "contributors": null,
                "images": graphicImages.mb,
                "children": null,
                "extra_data": null
            },
            {
                "type": "GRAPHICS",
                "icon": TPBankLogo,
                "logo": null,
                "title": "TP BANK",
                "name": "Ngân hàng Thương mại Cổ phần Tiên Phong",
                "short_description": "2021",
                "description": "Đây là chương trình khuyến mãi của TP Bank x Baemin. Hình ảnh sử dụng hài hòa màu sắc và yếu tố nhận diện thương hiệu của 2 brand làm nổi bật mã khuyến mãi trong chương trình.",
                "contributors": null,
                "images": graphicImages.tpbank,
                "children": null,
                "extra_data": null
            },
            {
                "type": "GRAPHICS",
                "icon": STEventsLogo,
                "logo": null,
                "title": "STevents",
                "name": "CHI NHÁNH CÔNG TY CỔ PHẦN ST EVENT",
                "short_description": "2023",
                "description": "Công ty ST Event là một BTL Agency chuyên hướng đến phát triển, thực hiện các sự kiện xây dựng trên nền tảng chuyên nghiệp để tạo dựng sự tin cậy từ phía khách hàng.",
                "contributors": ["Creative Director: Danny Le", " Designer: Tuyen Nguyen"],
                "images": graphicImages.stevents,
                "children": null,
                "extra_data": null
            },
            {
                "type": "GRAPHICS",
                "icon": null,
                "logo": null,
                "title": "TỔNG HỢP",
                "name": "Và rất nhiều các social post tiêu biểu từ các brand khác nhau",
                "short_description": "2021-Nay",
                "description": null,
                "contributors": null,
                "images": null,
                "children": [
                    {
                        "icon": otherGraphicImages.lambretta.logo,
                        "banner": otherGraphicImages.lambretta.banner,
                        "title": "Lambretta Scooters",
                        "inline_layout": false
                    },
                    {
                        "icon": otherGraphicImages.nutrilite.logo,
                        "banner": otherGraphicImages.nutrilite.banner,
                        "title": "Nutrilite Việt Nam",
                        "inline_layout": false
                    },
                    {
                        "icon": otherGraphicImages.amway.logo,
                        "banner": otherGraphicImages.amway.banner,
                        "title": "Amway",
                        "inline_layout": false
                    },
                    {
                        "icon": otherGraphicImages.baseus.logo,
                        "banner": otherGraphicImages.baseus.banner,
                        "title": "Baseus Việt Nam",
                        "inline_layout": false
                    },
                    {
                        "icon": otherGraphicImages.msb.logo,
                        "banner": otherGraphicImages.msb.banner,
                        "title": "Ngân hàng TMCP Hàng hải Việt Nam",
                        "inline_layout": false
                    },
                    {
                        "icon": otherGraphicImages.homeCredit.logo,
                        "banner": otherGraphicImages.homeCredit.banner,
                        "title": "Home Credit Vietnam",
                        "inline_layout": true
                    },
                    {
                        "icon": otherGraphicImages.bridgestone.logo,
                        "banner": otherGraphicImages.bridgestone.banner,
                        "title": "Lốp xe BRIDGESTONE",
                        "inline_layout": true
                    },
                    {
                        "icon": otherGraphicImages.camRanhBay.logo,
                        "banner": otherGraphicImages.camRanhBay.banner,
                        "title": "Cam Ranh Bay Hotel & Resorts",
                        "inline_layout": false
                    },
                    {
                        "icon": otherGraphicImages.yokohama.logo,
                        "banner": otherGraphicImages.yokohama.banner,
                        "title": "Lốp xe Yokohama",
                        "inline_layout": true
                    },
                    {
                        "icon": otherGraphicImages.glister.logo,
                        "banner": otherGraphicImages.glister.banner,
                        "title": "Kem đánh răng Glister",
                        "inline_layout": true
                    },
                    {
                        "icon": otherGraphicImages.granMelia.logo,
                        "banner": otherGraphicImages.granMelia.banner,
                        "title": "Gran Meliá Nha Trang",
                        "inline_layout": false
                    },
                    {
                        "icon": otherGraphicImages.chateauRouge.logo,
                        "banner": otherGraphicImages.chateauRouge.banner,
                        "title": "Dược mỹ phẩm Chateau Rouge",
                        "inline_layout": false
                    },
                    {
                        "icon": null,
                        "banner": otherGraphicImages.cherubaby.banner,
                        "title": null,
                        "inline_layout": false
                    },
                    {
                        "icon": null,
                        "banner": otherGraphicImages.vinhTuong.banner,
                        "title": null,
                        "inline_layout": false
                    },
                ],
                "extra_data": null
            },
            {
                "type": "UI",
                "icon": null,
                "logo": null,
                "title": "RINH QUÀ",
                "name": "App Rinh quà",
                "short_description": "2019",
                "description": "App Rinh quà được tạo ra nhằm mục đích để các bậc cha mẹ có thể cùng con lập thời gian biểu rõ ràng, kích thích các mặt tích cực của con, khơi dậy tinh thần trách nhiệm giúp bé làm chủ bản thân ngay từ khi còn nhỏ. Hình ảnh dễ thương tạo cảm giác gần gũi với bé với màu xanh da trời nhẹ nhàng, tập trung.",
                "contributors": null,
                "images": graphicImages.rinhQua,
                "children": null,
                "extra_data": null
            },
            {
                // TO DO: Link prototype (page custom riêng)
                "type": "UI",
                "icon": CuckooLogo,
                "logo": null,
                "title": "CUCKOO",
                "name": "Công Ty TNHH Cuckoo Vina",
                "short_description": "2021-2022",
                "description": "Website Cuckoo chủ yếu dùng để trưng bày các sản phẩm, các thông tin khuyến mãi và các bài viết liên quan. Chúng ta có thể xem chi tiết sản phẩm, so sánh chức năng và tìm được nơi mua hàng nhanh chóng đáng tin cậy.",
                "contributors": null,
                "images": uiImages.cuckoo.slice(0, 1),
                "children": null,
                "extra_data": {
                    "prototype": {
                        "url": "https://www.figma.com/proto/1weXy1X03xaZDa784DhttQ/cuckoo?page-id=664%3A3794&node-id=696-5975&viewport=6513%2C1685%2C0.33&scaling=scale-down-width&starting-point-node-id=696%3A5975",
                        "url_name": "Website Cuckoo"
                    },
                    "description": "Landing page Cuckoo có 4 trang theo từng chương trình khuyến mãi cụ thể. Tone and mood theo KV của mỗi chương trình. LP cần nổi bật và thu hút sản phẩm giảm giá, quà tặng và voucher khuyến mãi. Trình bày thông tin về thời gian và địa điểm diễn ra cụ thể, rõ ràng.",
                    "images": uiImages.cuckoo.slice(1)
                },
                "url": "https://cuckoovina.com/vi/"
            },
            {
                "type": "UI",
                "icon": BVMatLogo,
                "logo": null,
                "title": "Mắt Sài Gòn",
                "name": "Bệnh Viện Mắt Sài Gòn",
                "short_description": "2022-2023",
                "description": "Landing Page Mắt Sài Gòn muốn làm nổi bật thế mạnh thương hiệu, như hình ảnh các bác sĩ chuyên nghiệp, đáng tin cậy cùng thông tin rõ ràng, mạch lạc từng phần và hài hòa với màu xanh chủ đạo. <br />Đặc biệt, thiết kế sẽ tập trung vào thông tin khuyến mãi các gói dịch vụ, thể hiện chi tiết nhiều mức giá khác nhau ở mỗi vùng/miền giúp khách hàng dễ dàng tiếp cận và tăng hiệu quả truyền thông.",
                "contributors": null,
                "images": uiImages.benhVienMat,
                "children": null,
                "extra_data": null
            },
            {
                "type": "UI",
                "icon": AIALogo,
                "logo": null,
                "title": "AIA",
                "name": "CÔNG TY TNHH BẢO HIỂM NHÂN THỌ AIA",
                "short_description": "2022",
                "description": "Hình ảnh kết hợp hài hòa màu sắc và các yếu tố nhận diện thương hiệu của cả 2 brand để làm nổi bật các ưu điểm khi mua gói bảo hiểm AIA thông qua ngân hàng VP Bank.",
                "contributors": null,
                "images": uiImages.aia,
                "children": null,
                "extra_data": {
                    "prototype": {
                        "url": "https://www.figma.com/proto/iKxw3vnCBakLfcEjsHT9KP/LDP-AIA?page-id=0%3A1&node-id=4-53&starting-point-node-id=2%3A5",
                        "url_name": "LP Các gói sản phẩm"
                    },
                    "description": null,
                    "images": null
                }
            },
            {
                "type": "UI",
                "icon": ChinLogo,
                "logo": null,
                "title": "CHIN MEDIA",
                "name": "Chin Media - Digital Marketing Agency",
                "short_description": "2021",
                "description": "Chin Media là một trong những Agency hàng đầu về Digital Marketing tại Việt Nam, chuyên tư vấn và cung cấp các giải pháp Performance Marketing toàn diện, tối ưu hóa chi phí và tăng lợi nhuận cho khách hàng. Website thể hiện sự chuyên nghiệp, chỉn chu, có tính hệ thống nhất quán từ bố cục đến màu sắc nhận diện thương hiệu, tạo niềm vui vững chắc cho các đối tác cũng như khách hàng hợp tác cùng Chin Media.",
                "contributors": null,
                "images": uiImages.chin,
                "children": null,
                "extra_data": null,
                "url": "https://chinmedia.vn/"
            },
            {
                "type": "UI",
                "icon": MocChauLogo,
                "logo": null,
                "title": "Mộc Châu",
                "name": "Tổng Công Ty Chè Việt Nam - CTCP (Vinatea)",
                "short_description": "2021",
                "description": "Vinatea với hơn 50 năm kinh nghiệm cung cấp các sản phẩm trà sạch, đảm bảo chất lượng cao. Thương hiệu hướng đến hình ảnh hiện đại, dễ tiếp cận nên trang web sẽ sử dụng hình ảnh tự nhiên gần gũi đáng tin cậy, thông tin rõ ràng cụ thể và chi tiết, dễ thao tác đặt hàng và thanh toán. Điều này mang đến trải nghiệm thân thiện nhất đối với mọi đối tượng từ người trẻ đến người lớn tuổi.",
                "contributors": null,
                "images": uiImages.vinatea,
                "children": null,
                "extra_data": null,
                "url": "https://vinateamocchau.vn/"
            },
            {
                "type": "UI",
                "icon": InrongdoLogo,
                "logo": null,
                "title": "In Rồng Đỏ",
                "name": "Công ty in Rồng Đỏ",
                "short_description": "2022",
                "description": "Thương hiệu Rồng Đỏ mong muốn mang đến thiết kế hiện đại và tiện dụng. Khách hàng có thể đặt in, thanh toán ngay trên trang web và sản phẩm được giao nhận tận nhà. Thường xuyên chạy flash sale để tăng tương tác, kích thích mua sắm.",
                "contributors": null,
                "images": uiImages.inrongdo,
                "children": null,
                "extra_data": null,
                "url": "https://inrongdo.com/"
            },
            {
                "type": "UI",
                "icon": TinyLogo,
                "logo": TinyLogo1,
                "title": "TINY",
                "name": "CÔNG TY TNHH LITTLE TINY",
                "short_description": "2023",
                "description": "Tiny.vn là một app trên máy tính tạo ra để phục vụ cho game thủ, giúp người dùng có thể chơi game với mức độ trễ thấp nhất. Tông màu hiện đại, màu sắc đa dạng bắt mắt với các biểu tượng và thông tin game quen thuộc",
                "contributors": null,
                "images": uiImages.tiny,
                "children": null,
                "extra_data": null,
                "url": "https://app.tiny.vn/"
            },
            {
                "type": "UI",
                "icon": null,
                "logo": null,
                "title": "TỔNG HỢP",
                "name": "Và rất nhiều các Web site, Landing Page tiêu biểu từ các brand khác nhau",
                "short_description": "2021-Nay",
                "description": "----",
                "contributors": null,
                "images": otherUIImages.default,
                "children": null,
                "extra_data": null
            },
            {
                "type": "ANIMATION",
                "icon": null,
                "logo": null,
                "title": "TỔNG HỢP",
                "name": "Một số hiệu ứng đơn giản mình làm cho các brand",
                "short_description": "2021-Nay",
                "description": null,
                "contributors": null,
                "images": null,
                "children": [
                    {
                        "icon": animationData.homeCredit.logo,
                        "banner": null,
                        "video": animationData.homeCredit.video,
                        "title": "Home Credit Vietnam",
                        "inline_layout": true
                    },
                    {
                        "icon": animationData.mocchau.logo,
                        "banner": null,
                        "video": animationData.mocchau.video,
                        "title": "Mộc Châu",
                        "inline_layout": true
                    },
                    {
                        "icon": animationData.cuckoo.logo,
                        "banner": null,
                        "video": animationData.cuckoo.video,
                        "title": "CUCKOO",
                        "inline_layout": true
                    },
                    {
                        "icon": animationData.ocb.logo,
                        "banner": null,
                        "video": animationData.ocb.video,
                        "title": "OCB",
                        "inline_layout": true
                    },
                    {
                        "icon": animationData.prudential.logo,
                        "banner": null,
                        "video": animationData.prudential.video,
                        "title": "Công ty bảo hiểm nhân thọ Prudential",
                        "inline_layout": false
                    },
                ],
                "extra_data": null
            },
        ],
        currentProject: null,
        currentProjectLogoPos: {
            top: 0,
            left: 0
        }
    }),
    actions: {
        setCurrentProject(value) {
            this.getCurrentProjectLogoPos();
            this.currentProject = value;
        },
        getCurrentProjectLogoPos() {
            // let pos = localStorage.getItem("currentProjectLogoPos");
            // if(pos) {
            //     this.setCurrentProjectLogoPos(JSON.parse(pos));
            // }
        },
        setCurrentProjectLogoPos(value) {
            this.currentProjectLogoPos = { ...value };
            localStorage.setItem("currentProjectLogoPos", JSON.stringify(value));
        }
    }
})