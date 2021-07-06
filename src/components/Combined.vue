<template>
  <section class="Combined">
    <div class="Container">
      <div class="Decor">
        <span class="Decor-Line Left"></span>
        <div class="Decor-Text">
          Комбинированные двери
        </div>
        <span class="Decor-Line Right"></span>
      </div>
      <h2 class="Title Combined-Title">
        Выберите вариант<br/> комбинирования дверей купе
      </h2>
      <div class="Combined-Content">
        <div class="Combined-FormBox">
          <form class="Combined-Form" @submit.prevent="onSubmit()" novalidate>
            <h3 class="Combined-FormTitle">
              Размер проема
            </h3>
            <!--              <div class="Quiz-SlideInput">-->
            <div class="Combined-FormField">
              <input type="text"
                     class="Combined-FormInput Input"
                     name="size"
                     placeholder="Высота*Ширина"
              >
              <!--                  <span class="invalid-feedback">Обязательное поле!</span>-->
            </div>
            <h3 class="Quiz-Question">
              Количество дверей
            </h3>
            <!--              <div class="Quiz-SlideInput">-->
            <div class="Quiz-FormField Field-Number">
              <span class="Quiz-Math Minus"></span>
              <input type="text"
                     class="Quiz-FormInput Input Input-Number"
                     name="size"
                     placeholder="0"
              >
              <span class="Quiz-Math Plus"></span>
              <!--                  <span class="invalid-feedback">Обязательное поле!</span>-->
            </div>
          </form>
        </div>
        <div class="Combined-SliderBox">
          <swiper :option="optionSlider" class="Combined-Slider">
            <swiper-slide class="Combined-Slide">
              <div class="Combined-SlideInner"
                   v-for="(item, i) in sliderInfo.slide1"
                   :key="i">
                <div class="Combined-SlideImgBox">
                  <img :src="require(`@/assets/image/${item.img}`)" alt="" class="Combined-SlideImg">
                </div>
                <div class="Combined-SlideText">{{ item.text }}</div>
              </div>
            </swiper-slide>
            <swiper-slide class="Combined-Slide">
              <div class="Combined-SlideInner"
                   v-for="(item, i) in sliderInfo.slide2"
                   :key="i">
                <div class="Combined-SlideImgBox">
                  <img :src="require(`@/assets/image/${item.img}`)" alt="" class="Combined-SlideImg">
                </div>
                <div class="Combined-SlideText">{{ item.text }}</div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="Combined-SliderBtns">
            <div class="swiper-button swiper-button-prev combined-prev">
              <img src="../assets/image/arrow-slider-prev.png" alt="" class="Prev">
            </div>
            <div class="swiper-button swiper-button-next combined-next">
              <img src="../assets/image/arrow-slider-next.png" alt="" class="Next">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//import axios from "axios";
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import "swiper/components/thumbs/thumbs.min.css"
import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);

export default {
  name: "Combined",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      optionSlider: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 100,
        navigation: {
          nextEl: '.combined-next',
          prevEl: '.combined-prev'
        },
      },
      sliderInfo: {
        slide1: [
          {img: "comby_1.png", text: "Комби - 1"},
          {img: "comby_2.png", text: "Комби - 2"},
          {img: "comby_3-4.png", text: "Комби - 3/4"},
          {img: "comby_4-4.png", text: "Комби - 4/4"},
        ],
        slide2: [
          {img: "comby_3.png", text: "Комби - 3"},
          {img: "comby_1-4.png", text: "Комби - 1/4"},
          {img: "comby_4-5.png", text: "Комби - 4/5"},
          {img: "comby_4-5.png", text: "Бриз - 4/5"},
        ]
      }
    }
  },
  methods: {
    check() {
      console.log('He;e;e')
    },
    onSubmit() {
      /*this.$v.form.$touch();
      if (!this.$v.form.$error) {
        const params = new URLSearchParams();
        params.append('size', this.form.size);
        params.append('doors', this.form.doors);
        params.append('name', this.form.name);
        params.append('phone', this.form.phone);

        axios.post(
            "/mail.php",
            params,
            {
              headers: {
                'content-type': 'application/x-www-form-urlencoded'
              }
            }
        ).then(() => {})
        this.showAuthDialog()
        this.form.size = ''
        this.form.doors = ''
        this.form.name = ''
        this.form.phone = ''
        this.$nextTick(() => {
          this.$v.$reset()
        })*/
    }
  }
  ,
}
</script>

<style scoped lang="scss">
.Combined {
  padding: 70px 0;
  background-color: var(--color-bg-faq);

  @media (min-width: $screen-l) {
    padding: 94px 0;
  }

  &-Title {
    margin-bottom: 45px;
    text-align: center;
    color: var(--color-text-faq);

    @media (min-width: $screen-l) {
      margin-bottom: 58px;
    }
  }

  &-Content {
    display: flex;
    justify-content: space-between;
  }

  &-FormBox {
    width: 466px;
  }

  &-SliderBox {
    width: 830px;
  }

  &-Slide {
    width: 830px;
    display: grid;
    grid-template-columns: repeat(2, 355px);
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 43px 0;
    border-radius: 8px;
    background-color: var(--color-text-main3);
  }

  &-SlideInner {
    display: flex;
    flex-direction: column;
    //align-items: center;
    //justify-content: center;
    height: 330px;
    padding: 15px 16px;
    text-align: center;
    border-radius: 8px;
    background-color: var(--color-bg-faq);
  }

  &-SlideImgBox {
    width: 100%;
    height: 255px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 10px;
    padding: 20px 0 25px;
    border-radius: 8px;
    background-color: var(--color-text-main3);
  }

  &-SlideText {
    font-size: 16px;
    letter-spacing: .045em;
    color: var(--color-text-ghost);
  }


  .swiper-button-prev,
  .swiper-button-next, {
    width: 59px;
    height: 59px;

    &:after {
      content: none;
    }

    @media (min-width: 1070px) {
      width: 69px;
      height: 69px;
    }
  }
}
</style>
