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
            <input type="hidden" name="status" v-model.trim="form.status">
            <div class="Combined-FormContent">
              <h4 class="Title--h4 Combined-FormTitle">
                Размер проема
              </h4>
              <div class="Combined-FormField Field-Text">
                <input type="text"
                       class="Combined-FormInput Input Input-Text"
                       name="size"
                       placeholder="Высота*Ширина"
                       v-model.trim="form.size"
                       :class="$v.form.size.$error ? 'is-invalid' : ''"
                >
                <span v-if="$v.form.size.$dirty && !$v.form.size.required"
                      class="invalid-feedback">Обязательное поле!</span>
              </div>
            </div>
            <div class="Combined-FormContent">
              <h4 class="Title--h4 Combined-FormTitle">
                Количество дверей
              </h4>
              <div class="Combined-FormField Field-Number">
                <span class="Combined-Math Minus" @click="countDoorsMinus"></span>
                <input type="text"
                       class="Combined-FormInput Input Input-Number"
                       name="doors"
                       placeholder="0"
                       v-model.trim="form.doors"
                       :class="$v.form.doors.$error ? 'is-invalid' : ''"
                >
                <span class="Combined-Math Plus" @click="form.doors++"></span>
                <span v-if="$v.form.doors.$dirty && !$v.form.doors.required"
                      class="invalid-feedback">Обязательное поле!</span>
              </div>
            </div>
            <div class="Combined-FormContent">
              <h4 class="Title--h4 Combined-FormTitle">
                Укажите вариант разделения <br> дверей (из рисунка справа)
              </h4>
              <div class="Combined-FormField Field-Radio">
                <div class="Combined-RadioBox"
                     v-for="(id,index) in radioBtnId"
                     :key="index"
                >
                  <input :id="id.id"
                         type="radio"
                         class="Combined-FormInput Checkbox Input-Radio"
                         name="variable"
                         v-model.trim="form.variable"
                         :class="$v.form.variable.$error ? 'is-invalid' : ''"
                         :value="id.label"
                  >
                  <label :for="id.id" class="Combined-Label Label-Radio">
                    {{ id.label }}
                  </label>
                </div>
                <span v-if="$v.form.variable.$dirty && !$v.form.variable.required"
                      class="invalid-feedback">Обязательное поле!</span>
              </div>
            </div>
            <div class="Combined-FormContent">
              <h4 class="Title--h4 Combined-FormTitle">
                Ваш телефон
              </h4>
              <div class="Combined-FormField">
                <input type="text"
                       class="Combined-FormInput Input Input-Text"
                       name="phone"
                       placeholder="+7 (999) 475 59 00"
                       v-model.trim="form.phone"
                       :class="$v.form.phone.$error ? 'is-invalid' : ''"
                >
                <span v-if="$v.form.phone.$dirty && !$v.form.phone.required"
                      class="invalid-feedback">Обязательное поле!</span>
              </div>
              <button type="submit" class="Btn Combined-FormBtn">выбрать вариант</button>
            </div>
          </form>
        </div>
        <div class="Combined-SliderBox">
          <swiper :options="optionSlider" class="Combined-Slider">
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
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import "swiper/components/thumbs/thumbs.min.css"
import SwiperCore, {
  Navigation
} from 'swiper/core';
import axios from "axios";
import {required} from "vuelidate/lib/validators";
import {validationMixin} from "vuelidate";
import {showAuthDialog} from "@/utils/openModal";

SwiperCore.use([Navigation]);

export default {
  mixins: [validationMixin],
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
      },
      radioBtnId: [
        {id: "combi-1", label: "Комби - 1",},
        {id: "combi-1-4", label: "Комби - 1/4",},
        {id: "combi-2", label: "Комби - 2",},
        {id: "combi-3-4", label: "Комби - 3/4",},
        {id: "combi-3", label: "Комби - 3",},
        {id: "combi-4-4", label: "Комби - 4/4",},
        {id: "combi-4-5", label: "Комби - 4/5",},
      ],
      form: {
        status: 'формы с комбинациями дверей',
        size: '',
        doors: '',
        phone: '',
        variable: '',
      },
    }
  },
  validations: {
    form: {
      size: {
        required,
      },
      doors: {
        required,
      },
      phone: {
        required,
      },
      variable: {
        required,
      },
    }
  },
  methods: {
    countDoorsMinus(){
      this.form.doors > 0 ? --this.form.doors : 0
    },
    showAuthDialog,
    onSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        const params = new URLSearchParams();
        params.append('status', this.form.status);
        params.append('size', this.form.size);
        params.append('doors', this.form.doors);
        params.append('phone', this.form.phone);
        params.append('variable', this.form.variable);

        axios.post(
            "/mail.php",
            params,
            {
              headers: {
                'content-type': 'application/x-www-form-urlencoded'
              }
            }
        ).then(() => {
        })
        setTimeout(() => this.showAuthDialog(), 1000)
        this.form.size = ''
        this.form.doors = ''
        this.form.name = ''
        this.form.phone = ''
        this.form.variable = ''
        this.$nextTick(() => {
          this.$v.$reset()
        })
      }
    }
  },
}
</script>

<style lang="scss">
.Combined {
  padding: 70px 0 130px;
  background-color: var(--color-bg-faq);

  @media (min-width: $screen-xl) {
    padding: 94px 0;
  }

  .Decor {
    top: 47%;
    .Right {
      width: 60%;
    }
    .Left {
      width: 40%;
    }
    &-Text {
      color: var(--color-text-btn);
    }
  }

  &-Title {
    margin-bottom: 45px;
    padding: 0 20px;
    text-align: center;
    color: var(--color-text-faq);

    @media (min-width: $screen-m) {
      padding: 0;
    }

    @media (min-width: $screen-l) {
      margin-bottom: 58px;
    }
  }

  &-Content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: $screen-xl) {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 58px;
    }
  }

  &-FormBox {
    width: 100%;
    margin: 0 auto;

    @media (min-width: $screen-l) {
      width: 930px;
    }
    @media (min-width: $screen-xl) {
      width: 466px;
      margin: 0;
    }
  }

  &-Form {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0 40px;

    @media (min-width: $screen-m) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px 40px;
    }

    @media (min-width: $screen-xl) {
      display: flex;
      flex-direction: column;
    }
  }

  &-FormTitle {
    margin-bottom: 25px;
  }

  &-FormField {
    margin-bottom: 65px;
    position: relative;
  }

  &-FormInput {
    padding: 19px 20px 19px 32px;
    border: 1px solid var(--color-bg-input);
    border-radius: 8px;
    outline: none;
    font-size: 15px;
    letter-spacing: .045em;
    color: var(--color-text-btn);
    background-color: var(--color-text-main3);

    &::placeholder {
      color: var(--color-text-placeholder2);
    }

    &:focus {
      border: 1px solid var(--color-text-btn);
    }

    @media (min-width: $screen-m) {
      padding: 28px 32px;
    }
  }

  .Field-Number {
    display: flex;
    align-items: center;
    width: 194px;
    position: relative;
    padding: 0 48px;
  }

  .Input-Number {
    max-width: 94px;
    padding: 25px 15px 25px 22px;
    //margin: 0 30px 0;
  }

  &-Math {
    display: block;
    width: 26px;
    height: 26px;

    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      width: 26px;
      height: 2px;
      top: 50%;
      transform: translate(0, -50%);
      background-color: var(--color-text-dark);
    }
  }

  .Plus {
    &:before {
      right: 0;
    }

    &:after {
      content: "";
      position: absolute;
      width: 2px;
      height: 26px;
      background-color: var(--color-text-dark);
      top: 50%;
      transform: translate(0, -50%);
      right: 12px;
    }
  }

  .Minus {
    &:before {
      left: 0;
    }
  }

  .Field-Radio {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  &-RadioBox {
    margin-bottom: 28px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-Label {
    position: relative;
    padding-left: 48px;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      width: 32px;
      height: 32px;
      top: 50%;
      left: 0;
      transform: translate(0, -50%,);
      border-radius: 50%;
      background-color: var(--color-text-main);
      box-shadow: 0px 0px 1px 0px rgba(155, 146, 137, 0.14), inset 0px 5px 6.79px 0.21px rgba(77, 67, 56, 0.13);
      cursor: pointer;
      transition: all .3s;

      @media (min-width: $screen-l) {
        width: 28px;
        height: 28px;
      }

    }

    &:after {
      content: '';
      border-radius: 50%;
      position: absolute;
      width: 13px;
      height: 13px;
      top: 50%;
      left: 6.5px;
      transform: translate(0, -50%,);
      background-image: var(--color-bg-btn-before);
      opacity: 0;
      transition: opacity .3s;

      @media (min-width: $screen-l) {
        width: 14px;
        height: 14px;
        //top: 254px;
      }
    }
  }

  .Input-Radio:checked + .Label-Radio:after {
    opacity: 1;
  }

  .Input-Radio:checked + .Label-Radio:before {
    box-shadow: inset 0px 5px 6.79px 0.21px rgba(199, 189, 176, 0.13);
  }

  &-FormBtn {
    padding: 24px 55px 26px;
    margin-bottom: 70px;
    @media (min-width: $screen-xl) {
      margin-bottom: 0;
    }
  }

  .invalid-feedback {
    position: absolute;
    top: -20px;
    left: 0;
    font-size: 10px;
    color: var(--color-text-error);
  }

  &-SliderBox {
    width: 100%;
    margin: 0 auto;
    position: relative;

    @media (min-width: $screen-l) {
      width: 830px;
    }

    @media (min-width: $screen-xl) {
      margin: 0;
    }
  }

  &-Slider {
    box-shadow: var(--color-box-shadow);
  }

  &-Slide {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 178px);
    grid-gap: 5px 5px;
    justify-content: center;
    align-items: center;
    padding: 43px 0;
    border-radius: 8px;
    background-color: var(--color-text-main3);

    @media (min-width: $screen-m) {
      grid-template-columns: repeat(2, 355px);
      grid-gap: 40px 10px;
    }

    @media (min-width: $screen-l) {
      width: 830px;
      grid-gap: 10px 10px;
    }
  }

  &-SlideInner {
    display: flex;
    flex-direction: column;
    height: 180px;
    padding: 8px;
    text-align: center;
    border-radius: 8px;
    background-color: var(--color-bg-faq);
    @media (min-width: $screen-m) {
      height: 100%;
      padding: 15px 16px;
    }
    @media (min-width: $screen-l) {
      height: 330px;
    }
  }

  &-SlideImgBox {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 8px;
    background-color: var(--color-text-main3);
    @media (min-width: $screen-m) {
      margin: 0 auto 10px;
      padding: 20px 0 25px;
    }
    @media (min-width: $screen-l) {
      height: 255px;
    }
  }

  &-SlideText {
    font-size: 16px;
    letter-spacing: .045em;
    color: var(--color-text-ghost);
  }

  &-SliderBtns {
    width: 200px;
    position: absolute;
    z-index: 3;
    top: 105%;
    left: 50%;
    transform: translate(-50%, 0);

    @media (min-width: $screen-xl) {
      top: 87%;
    }
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
