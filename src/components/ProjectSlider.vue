<template>
  <div class="ProjectsSlider">
    <swiper class="ProjectsSlider-Slider"
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
                  :options="swiperOptionThumbs" @swiper="setThumbsSwiper"
                  ref="swiperThumbs"
                  :freeMode="true" :watchSlidesVisibility="true" :watchSlidesProgress="true"
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
<!--      <div v-if="width > 1024" class="swiper-button-prev" slot="button-prev">
        <img src="../assets/image/arrow-slider-prev.png" alt="" class="Prev">
      </div>
      <div v-if="width > 1024" class="swiper-button-next" slot="button-next">
        <img src="../assets/image/arrow-slider-next.png" alt="" class="Next">
      </div>-->
    </swiper>
    <div  class="swiper-button swiper-button-prev" slot="button-prev">
      <img src="../assets/image/arrow-slider-prev.png" alt="" class="Prev">
    </div>
    <div  class="swiper-button swiper-button-next" slot="button-next">
      <img src="../assets/image/arrow-slider-next.png" alt="" class="Next">
    </div>
  </div>
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
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            spaceBetween: -30,
          },
          1320: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: -30,
          }
        }
      },
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
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
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   const swiperTop = this.$refs.swiperTop.$swiper
    //   const swiperThumbs = this.$refs.swiperThumbs.$swiper
    //   swiperTop.controller.control = swiperThumbs
    //   swiperThumbs.controller.control = swiperTop
    // })
  }
}
</script>

<style scoped lang="scss">
.ProjectsSlider {

  &-Slide {
    min-width: 0;
    min-height: 0;
    width: 330px;
    padding: 34px 32px 32px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background-color: var(--color-bg-faq);
    box-shadow: 0px 2px 6px 0px rgba(160, 153, 146, 0.7);

    @media (min-width: $screen-s) {
      width: 390px;
    }

    @media (min-width: 1024px) {
      width: 868px;
      flex-direction: row;
      align-items: flex-start;
    }
  }

  &-SliderContent {
    max-width: 453px;
    width: 100%;
  }

  &-Name {
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: .032em;
    line-height: 1.25;
    color: var(--color-text-dark-light);
    text-align: center;

    @media (min-width: $screen-m) {
      font-size: 24px;
    }
  }

  &-Title {
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: .032em;
    line-height: 1.154;
    color: var(--color-text-dark);
    text-align: center;

    @media (min-width: $screen-m) {
      font-size: 26px;
    }
  }

  &-Item {
    margin-bottom: 20px;
    padding-left: 20px;
    font-size: 16px;
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

    @media (min-width: $screen-m) {
      font-size: 18px;
    }
  }

  .swiper-slide {
    transform: scale(0.87);
  }

  .swiper-slide-active {
    transform: scale(0.99);
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
    right: 28%;

    @media (min-width: $screen-xs) {
      right: 150px;
    }

    @media (min-width: 1024px) {
      right: 80px;
    }

    @media (min-width: $screen-xxxl) {
      right: 23.2%;
    }
  }

  .swiper-button-prev, {
    left: 28%;

    @media (min-width: $screen-xs) {
      left: 150px;
    }
    @media (min-width: 1024px) {
      left: 80px;
    }

    @media (min-width: $screen-xxxl) {
      left: 23.2%;
    }
  }

  .swiper-button {
    top: 87%;

    @media (min-width: $screen-s) {
      top: 90%;
    }

    @media (min-width: 1024px) {
      top: 50%;
    }
  }

  &-Photo {
    width: 346px;
    margin-bottom: 30px;

    @media (min-width: $screen-s) {
      width: 384px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 0;
    }

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
