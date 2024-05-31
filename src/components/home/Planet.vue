<template>
    <div class="planet-component">
        <!-- <div class="planet">
            <img src="@/assets/images/project/masked-planet.png" class="planet-image" />
        </div> -->
        <!-- <div class="test"> -->
            <!-- <div class="ozone"> -->
                <img src="@/assets/images/project/ozone.png" class="ozone-image" />
            <!-- </div> -->
        <!-- </div> -->
    </div>
</template>

<style lang="scss">
.planet-component {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 91.67%;
    overflow: hidden;
    background: url("@/assets/images/project/masked-planet.png") no-repeat;
    background-size: contain;
    z-index: 1;
    // .test {
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     // z-index: 2;
    // }
    // .ozone {
    //     mix-blend-mode: hard-light;
    //     filter: blur(32.0916px);
    //     // position: absolute;
    //     // top: 0;
    //     // left: 0;
    //     width: 100%;
    //     height: 100%;
    //     position: relative;
    //     &-image {
    //         position: absolute;
    //         top: 0;
    //         left: 0;
    //         width: 100%;
    //         height: 100%;
    //     }
    //     &::before {
    //         content: "";
    //         position: absolute;
    //         top: 4.3%;
    //         left: 8.49%;
    //         // width: 100%;
    //         // height: 100%;
    //         width: 83%;
    //         height: 0;
    //         padding-bottom: 83%;
    //         background: #D9D9D9;
    //         filter: blur(41.2721px);
    //         border-radius: 50%;
    //     }
    // }
    .ozone {
        border-radius: 50%;
        overflow: hidden;
        mix-blend-mode: hard-light;
    }
    img {
        border-radius: 50%;
        mix-blend-mode: hard-light;
    }
}
</style>