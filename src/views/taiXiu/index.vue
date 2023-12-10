<template>
    <div class="page-container">
        taixiu
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>


        <!-- 底部 -->
        <div class="page-footer">
            <GameFooter />
        </div>
    </div>
</template>
<script>
import GameFooter from '@/components/game/GameFooter.vue'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export default {
    components: {
        GameFooter
    },
    data() {
        return {
            mySwiper: null
        }
    },
    created() {},
    mounted() {
        this.initSwiper()
    },
    methods: {
        initSwiper() {
            this.mySwiper = new Swiper ('.swiper-container', {
                // slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            })   
        }
    }
}
</script>

<style lang="less" scoped>
.swiper-container {
    width: 100%;
    height: 30rem;
}
.swiper-slide {
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}
</style>
