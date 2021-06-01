<template>
  <swiper class="Projects-Slider"
          :options="optionSlider"
  >
    <swiper-slide class="Projects-Slide"
                  v-for="(item) in slides"
                  :key="item.id"
    >
      <div class="Projects-SliderInner">
        <swiper :spaceBetween="10"
                :navigation="true" :thumbs="{ swiper: thumbsSwiper }"
                class="Projects-SlideInnerTop"
        >
          <swiper-slide v-for="(item) in item.images"
                        :key="item.id">
            <img :src="require(`@/assets/image/${item}`)" alt="" class="Projects-SlideInnerTopImg">
          </swiper-slide>
        </swiper>
        <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
                :watchSlidesVisibility="true" :watchSlidesProgress="true"
                class="Projects-SlideInnerBottom"
        >
          <swiper-slide v-for="(item) in item.images"
                        :key="item.id">
            <img :src="require(`@/assets/image/${item}`)" alt="" class="Projects-SlideInnerBottomImg">
          </swiper-slide>
        </swiper>
      </div>
      <div class="Projects-SliderContent">
        <div class="Projects-Name">{{ item.name }}</div>
        <div class="Projects-Title">{{ item.title }}</div>
        <ul class="Projects-List">
          <li class="Projects-Item" v-for="item in item.list" :key="item.id">
            {{ item }}
          </li>
        </ul>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.min.css'
import "swiper/components/navigation/navigation.min.css"
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
        slidesPerView: '1',
        //initialSlide: 2,
        //centeredSlides: true,
        spaceBetween: 27,
        mousewheelControl: true,
        speed: 100,
      },
      slides: [
        {
          id: "1",
          images: [
            "big-repair1.png",
            "big-repair2.png",
            "big-repair3.png",
            "big-repair4.png",
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
            "big-repair1.png",
            "big-repair1.png",
            "big-repair1.png",
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
            "big-repair1.png",
            "big-repair1.png",
            "big-repair1.png",
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
            "big-repair1.png",
            "big-repair1.png",
            "big-repair1.png",
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
  }
}
</script>

<style scoped lang="scss">

.Projects-Slide.swiper-slide-active {
  //width: 932px !important;
  //height: 490px;
}
.Projects-Slide.swiper-slide {
  //width: 932px !important;
  min-width: 0;
  //height: 426px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  background-color: var(--color-bg-faq);
  box-shadow: 0px 2px 6px 0px rgba(160, 153, 146, 0.7);
}
//.Projects-Slider {
//  display: flex;
//  align-items: center;
//  min-width: 0;
//}
//
//.Projects-Slide.swiper-slide {
//  width: 932px !important;
//  min-width: 0;
//  height: 426px;
//  display: flex;
//  justify-content: space-between;
//  border-radius: 8px;
//  background-color: var(--color-bg-faq);
//  box-shadow: 0px 2px 6px 0px rgba(160, 153, 146, 0.7);
//}
//
//.Projects-Slide.swiper-slide-active {
//  width: 932px !important;
//  height: 490px;
//}
//
//.Projects-SliderInner {
//  width: 385px;
//}
//
//
//.Projects-SlideInnerTop {
//  height: 317px;
//  width: 385px;
//}
//
//.Projects-SlideInnerBottom {
//  height: 95px;
//  box-sizing: border-box;
//  padding: 10px 0;
//}
//
//.Projects-SlideInnerBottom .swiper-slide {
//  width: 123px !important;
//  height: 100%;
//  opacity: 0.4;
//}
//
//.mySwiper .swiper-slide-thumb-active {
//  opacity: 1;
//}
//
//.swiper-slide img {
//  display: block;
//  width: 100%;
//  height: 100%;
//  object-fit: cover;
//}

</style>