<template>
  <swiper class="ProjectsSlider"
          :options="optionSlider"
  >
    <swiper-slide class="ProjectsSlider-Slide"
                  v-for="(item) in slides"
                  :key="item.id"
    >
      <div class="ProjectsSlider-Photo thumb-example">
        <!-- swiper1 -->
                <swiper class="ProjectsSlider-PhotoTop swiper gallery-top"
                        :options="swiperOptionTop"
                        :thumbs="{ swiper: thumbsSwiper }"
                >
                  <swiper-slide v-for="(item) in item.images"
                                :key="item.id">
                    <img :src="require(`@/assets/image/${item}`)" alt="" class="ProjectsSlider-PhotoTopImg">
                  </swiper-slide>
                </swiper>
        <!-- swiper2 Thumbs -->
                <swiper class="ProjectsSlider-PhotoBottom swiper gallery-thumbs"
                        :options="swiperOptionThumbs" @click="setThumbsSwiper"
                >
                  <swiper-slide v-for="(item) in item.images"
                                :key="item.id">
                    <img :src="require(`@/assets/image/${item}`)" alt="" class="ProjectsSlider-PhotoBottomImg">
                  </swiper-slide>
                </swiper>
      </div>
      <div class="ProjectsSlider-SliderContent">
        <div class="ProjectsSlider-Name">{{ item.name }}</div>
        <div class="ProjectsSlider-Title">{{ item.title }}</div>
        <ul class="ProjectsSlider-List">
          <li class="ProjectsSlider-Item" v-for="item in item.list" :key="item.id">
            {{ item }}
          </li>
        </ul>
      </div>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev">
      <img src="../assets/image/arrow-slider-prev.png" alt="" class="Prev">
    </div>
    <div class="swiper-button-next" slot="button-next">
      <img src="../assets/image/arrow-slider-next.png" alt="" class="Next">
    </div>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
//import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import SwiperCore, {
  Navigation, Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default {
  name: "ProjectSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
      optionSlider: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: -30,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      slides: [
        {
          id: "1",
          images: [
            "big-repair1.png",
            "test_slider.png",
            "big-repair1.png",
            "test_slider.png",
            "big-repair1.png",
          ],
          name: "Большая Переделка",
          title: "«Перегородка  с рифленым стеклом»",
          list: [
            "Возвели перегородку в стиле лофт с рифленым стеклом Moru матов",
            "Застеклили оконный проем между гостиной и кухней тем же рифлен",
            "Изготовили рифленое стекло для мебельных фасадов",
          ]
        },
        {
          id: "2",
          images: [
            "big-repair1.png",
            "test_slider.png",
            "big-repair1.png",
            "test_slider.png",
            "big-repair1.png",
          ],
          name: "Большая Переделка",
          title: "«Перегородка  с рифленым стеклом»",
          list: [
            "Возвели перегородку в стиле лофт с рифленым стеклом Moru матов",
            "Застеклили оконный проем между гостиной и кухней тем же рифлен",
            "Изготовили рифленое стекло для мебельных фасадов",
          ]
        }, {
          id: "3",
          images: [
            "big-repair1.png",
            "test_slider.png",
            "big-repair1.png",
            "test_slider.png",
            "big-repair1.png",
          ],
          name: "Большая Переделка",
          title: "«Перегородка  с рифленым стеклом»",
          list: [
            "Возвели перегородку в стиле лофт с рифленым стеклом Moru матов",
            "Застеклили оконный проем между гостиной и кухней тем же рифлен",
            "Изготовили рифленое стекло для мебельных фасадов",
          ]
        }, {
          id: "4",
          images: [
            "big-repair1.png",
            "test_slider.png",
            "big-repair1.png",
            "test_slider.png",
            "big-repair1.png",
          ],
          name: "Большая Переделка",
          title: "«Перегородка  с рифленым стеклом»",
          list: [
            "Возвели перегородку в стиле лофт с рифленым стеклом Moru матов",
            "Застеклили оконный проем между гостиной и кухней тем же рифлен",
            "Изготовили рифленое стекло для мебельных фасадов",
          ]
        },

      ]
    }
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
      alert(this.thumbsSwiper)
    },
  },
  mounted() {
    this.$nextTick(() => {
      // const swiperTop = this.$refs.swiperTop.$swiper
      // const swiperThumbs = this.$refs.swiperThumbs.$swiper
      // swiperTop.controller.control = swiperThumbs
      // swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style scoped lang="scss">
.ProjectsSlider {

  &-Slide {
    min-width: 0;
    min-height: 0;
    width: 868px;
    height: 426px;
    padding: 34px 32px 32px 32px;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    background-color: var(--color-bg-faq);
    box-shadow: 0px 2px 6px 0px rgba(160, 153, 146, 0.7);
    //transform: scale(.8);
  }

  &-SliderContent {
    max-width: 453px;
    width: 100%;
  }

  &-Name {
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 24px;
    letter-spacing: .032em;
    line-height: 1.25;
    color: var(--color-text-dark-light);
    text-align: center;
  }

  &-Title {
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 26px;
    letter-spacing: .032em;
    line-height: 1.154;
    color: var(--color-text-dark);
    text-align: center;
  }

  &-List {

  }

  &-Item {
    margin-bottom: 20px;
    padding-left: 20px;
    font-size: 18px;
    letter-spacing: .022em;
    line-height: 1.444;
    color: var(--color-text-dark);
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      content: '';
      position: absolute;
      width: 13px;
      height: 13px;
      top: 5px;
      left: 0;
      background-image: url(~@/assets/image/list-item.png);
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .swiper-slide {
    transform: scale(0.87);
  }

  .swiper-slide-active {
    transform: scale(0.99);
    //margin-left: -30px;
    //margin-right: -30px;
  }

  .swiper-slide-next {
   // margin-left: -30px;
  }

  .swiper-slide-prev {
    //margin-right: -30px;
  }

  .swiper-button-prev,
  .swiper-button-next, {
    width: 69px;
    height: 69px;

    &:after {
      content: none;
    }
  }

  .swiper-button-next, {
    right: 107px;
  }
  .swiper-button-prev, {
    left: 107px;
  }

  &-Photo {
    width: 384px;
    .swiper-slide {
      transform: scale(0.99);
    }

    .swiper-slide-active {
      transform: scale(0.99);
    }
  }

  &-PhotoBottomImg {
    width: 123px;
    border-radius: 8px;
  }
  &-PhotoTopImg {
    border-radius: 8px;
  }
}


</style>