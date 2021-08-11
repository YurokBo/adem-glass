<template>
  <section class="Quiz" id="quiz">
    <div class="Container">
      <div class="Decor">
        <span class="Decor-Line Left"></span>
        <div class="Decor-Text">
          Индивидуальный расчет
        </div>
        <span class="Decor-Line Right"></span>
      </div>
      <div class="Quiz-Content">
        <div class="Quiz-Subtitle">
          Ответьте на несколько вопросов и получите индивидуальный расчет
        </div>
        <h2 class="Title Quiz-Title">
          стоимости ваших дверей для шкафа и гардеробной
        </h2>
        <form class="Quiz-Form" @submit.prevent="onSubmit()" novalidate>
          <div class="swiper-pagination"></div>
          <input type="hidden" name="status" v-model.trim="form.status">
          <swiper class="Quiz-Slider" :options="options">
            <swiper-slide class="Quiz-Slide">
              <h4 class="Title--h4 Quiz-Question" v-html="questions.question1.question"></h4>
              <div class="Quiz-SlideInnerBox">
                <swiper :options="optionsInner" class="Quiz-SliderInner">
                  <swiper-slide class="Quiz-SlideInner">
                    <div class="Quiz-SlideAnswers">
                      <div class="Quiz-FormField"
                           v-for="answer in questions.question1.answers1"
                           :key="answer.id"
                      >
                        <div class="Quiz-FormFieldBox">
                          <input type="checkbox"
                                 :id="answer.id"
                                 class="Quiz-FormInput Checkbox"
                                 name="style"
                                 v-model.trim="form.style"
                                 :class="$v.form.style.$error ? 'is-invalid' : ''"
                                 :value="answer.text"
                          >
                          <label :for="answer.id" class="Quiz-FormLabel">
                            <img :src="require(`@/assets/image/${answer.img}`)" alt="" class="Quiz-FormImg">
                            <span class="Quiz-FormSpan">{{ answer.text }}</span>
                          </label>
                        </div>
                        <span v-if="$v.form.style.$dirty && !$v.form.style.required"
                              class="invalid-feedback">Обязательное поле!</span>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide class="Quiz-SlideInner">
                    <div class="Quiz-SlideAnswers">
                      <div class="Quiz-FormField"
                           v-for="(answer) in questions.question1.answers2"
                           :key="answer.id"
                      >
                        <div class="Quiz-FormFieldBox">
                          <input type="checkbox"
                                 :id="answer.id"
                                 class="Quiz-FormInput Checkbox"
                                 name="style"
                                 v-model.trim="form.style"
                                 :class="$v.form.style.$error ? 'is-invalid' : ''"
                                 :value="answer.text"
                          >
                          <label :for="answer.id" class="Quiz-FormLabel">
                            <img :src="require(`@/assets/image/${answer.img}`)" alt="" class="Quiz-FormImg">
                            <span class="Quiz-FormSpan">{{ answer.text }}</span>
                          </label>
                        </div>
                        <span v-if="$v.form.style.$dirty && !$v.form.style.required"
                              class="invalid-feedback">Обязательное поле!</span>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
                <!--                <div class="Quiz-SliderBtns">-->
                <div class="swiper-button swiper-button-prev quiz-previnner" slot="button-prev">
                  <img src="../assets/image/arrow-slider-prev.png" alt="" class="Prev">
                </div>
                <div class="swiper-button swiper-button-next quiz-nextinner" slot="button-next">
                  <img src="../assets/image/arrow-slider-next.png" alt="" class="Next">
                </div>
                <!--                </div>-->
              </div>
            </swiper-slide>
            <swiper-slide class="Quiz-Slide">
              <h4 class="Title--h4 Quiz-Question" v-html="questions.question2.question"></h4>
              <div class="Quiz-SlideAnswers">
                <div class="Quiz-FormField"
                     v-for="answer in questions.question2.answers"
                     :key="answer.id"
                >
                  <input type="checkbox" :id="answer.id" class="Quiz-FormInput Checkbox"
                         name="variable"
                         v-model.trim="form.variable"
                         :class="$v.form.variable.$error ? 'is-invalid' : ''"
                         :value="answer.id"
                  >
                  <label :for="answer.id" class="Quiz-FormLabel">
                    <img :src="require(`@/assets/image/${answer.img}`)" alt="" class="Quiz-FormImg">
                    <span class="Quiz-FormSpan">{{ answer.text }}</span>
                  </label>
                  <span v-if="$v.form.variable.$dirty && !$v.form.variable.required"
                        class="invalid-feedback">Обязательное поле!</span>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="Quiz-Slide">
              <h4 class="Title--h4 Quiz-Question">
                Укажите размер проема (см)
              </h4>
              <!--              <div class="Quiz-SlideInput">-->
              <div class="Quiz-FormGroup">
                <div class="Quiz-FormField Quiz-FormFieldSize">
                  <span>Высота</span>
                  <input type="text"
                         class="Quiz-FormInput Input Quiz-FormInputSize"
                         name="height"
                         v-model.trim="form.height"
                         :class="$v.form.height.$error ? 'is-invalid' : ''"
                  >
                  <span v-if="$v.form.height.$dirty && !$v.form.height.required"
                        class="invalid-feedback">Обязательное поле!</span>
                </div>
                <div class="Quiz-FormField Quiz-FormFieldSize">
                  <span>Ширина</span>
                  <input type="text"
                         class="Quiz-FormInput Input Quiz-FormInputSize"
                         name="width"
                         v-model.trim="form.width"
                         :class="$v.form.width.$error ? 'is-invalid' : ''"
                  >
                  <span v-if="$v.form.width.$dirty && !$v.form.width.required"
                        class="invalid-feedback">Обязательное поле!</span>
                </div>
              </div>
              <!--              </div>-->
              <h4 class="Title--h4 Quiz-Question">
                Укажите количество дверей
              </h4>
              <!--              <div class="Quiz-SlideInput">-->
              <div class="Quiz-FormField Field-Number">
                <span class="Quiz-Math Minus" @click="countDoorsMinus">
                  <img src="@/assets/image/minus.png" alt="plus">
                </span>
                <input type="text"
                       class="Quiz-FormInput Input Input-Number"
                       name="doors"
                       placeholder="0"
                       v-model.trim="form.doors"
                       :class="$v.form.doors.$error ? 'is-invalid' : ''"
                >
                <span class="Quiz-Math Plus" @click="form.doors++">
                  <img src="@/assets/image/plus.png" alt="plus">
                </span>
                <span v-if="$v.form.doors.$dirty && !$v.form.doors.required"
                      class="invalid-feedback">Обязательное поле!</span>
              </div>

              <!--              </div>-->
            </swiper-slide>
            <swiper-slide class="Quiz-Slide">
              <h4 class="Title--h4 Quiz-Question">
                Куда отправить расчет стоимости?
              </h4>
              <!--              <div class="Quiz-SlideInput">-->
              <div class="Quiz-FormGroup">
                <div class="Quiz-FormField Quiz-FormField">
                  <input type="text"
                         class="Quiz-FormInput Input"
                         name="name"
                         placeholder="Ваше имя" v-model.trim="form.name"
                         :class="$v.form.name.$error ? 'is-invalid' : ''"
                  >
                  <span v-if="$v.form.name.$dirty && !$v.form.name.required"
                        class="invalid-feedback">Обязательное поле!</span>
                </div>
                <div class="Quiz-FormField">
                  <input type="text"
                         class="Quiz-FormInput Input"
                         name="phone"
                         placeholder="Ваш телефон"
                         v-model.trim="form.phone"
                         :class="$v.form.phone.$error ? 'is-invalid' : ''"
                  >
                  <span v-if="$v.form.phone.$dirty && !$v.form.phone.required"
                        class="invalid-feedback">Обязательное поле!</span>
                </div>
              </div>
              <h4 class="Title--h4 Quiz-Question">
                Выберите удобный мессенджер
              </h4>
              <div class="Quiz-FormGroup">
                <div class="Quiz-FormField Social"
                     v-for="(item,i) in social"
                     :key="i"
                >
                  <input type="radio"
                         :id="i"
                         class="Checkbox Social-Input"
                         name="social"
                         v-model.trim="form.social"
                         :class="$v.form.social.$error ? 'is-invalid' : ''"
                         :value="item.name"
                  >
                  <span v-if="$v.form.social.$dirty && !$v.form.social.required"
                        class="invalid-feedback">Обязательное поле!</span>
                  <label :for="i" class="Social-Label">
                    <img :src="require(`@/assets/image/${item.icon}`)"
                         alt="icon"
                         :style="{width: `${item.width}px`}"
                         class="Social-Icon"
                    >
                    <span class="Social-Span">{{ item.name }}</span>
                  </label>
                </div>
              </div>
              <button type="submit" class="Btn Quiz-FormBtn">Рассчитать стоимость</button>
            </swiper-slide>
          </swiper>
          <div class="Quiz-FormBtnGroup">
            <button type="button" class="Quiz-FormPrev quiz-prev">предыдущий вопрос</button>
            <button type="button" class="Btn Quiz-FormNext quiz-next">следующий вопрос</button>
          </div>
        </form>
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
  name: "Quiz",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      doorsCount: 0,
      options: {
        allowTouchMove: false,
        spaceBetween: 30,
        navigation: {
          nextEl: '.quiz-next',
          prevEl: '.quiz-prev',
          disabledClass: 'Btn--disabled'
        },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
      },
      optionsInner: {
        // allowTouchMove: false,
        spaceBetween: 30,
        navigation: {
          nextEl: '.quiz-nextinner',
          prevEl: '.quiz-previnner',
          disabledClass: 'Btn--disabled-inner'
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   type: "progressbar",
        // },
      },
      social: [
        {icon: "call.svg", width: "31", name: "Звонок"},
        {icon: "whatsapp.svg", width: "37", name: "WhatsApp"},
        {icon: "viber.svg", width: "36", name: "Viber"},
        {icon: "telegram.svg", width: "37", name: "Telegram"},
      ],
      questions: {
        question1: {
          question: "Выберите стиль наполнения дверей <br/>(лучше несколько, для сравнения цены)",
          answers1: [
            {id: "painted-frosted", img: "quiz-1.png", text: "Окрашенное матовое стекло"},
            {id: "painted-glossy", img: "quiz-2.png", text: "Окрашенное глянцевое стекло"},
            {id: "mirror-corrugated", img: "quiz-3.png", text: "Зеркальное рифленое стекло"},
            {id: "matt-corrugated", img: "quiz-4.png", text: "Матовое рифленое стекло"},
            {id: "natural-drawing", img: "quiz-5.png", text: "Природный рисунок"},
            {id: "classic-pattern", img: "quiz-6.png", text: "Классический узор"},
            {id: "modern-drawing", img: "quiz-7.png", text: "Современный рисунок"},
            {id: "monolithic-glass", img: "quiz-8.png", text: "Монолитное стекло с 3D рисунком"},
          ],
          answers2: [
            {id: "beton-imitation", img: "beton-imitation.png", text: "Имитация бетона"},
            {id: "frosted-mirrorglass", img: "frosted-mirrorglass.png", text: "Матовое зеркало бронза"},
            {id: "frosted-mirror", img: "frosted-mirror.png", text: "Матовое зеркало"},
            {id: "usual-mirror", img: "usual-mirror.png", text: "Обычное зеркало"},
            {
              id: "natural-drawing-bronze1",
              img: "natural-drawing-bronze1.png",
              text: "Природный рисунок бронза 1"
            },
            {
              id: "modern-drawing-bronze",
              img: "modern-drawing-bronze.png",
              text: "Современный рисунок бронза"
            },
            {
              id: "natural-drawing-bronze2",
              img: "natural-drawing-bronze2.png",
              text: "Природный рисунок бронза 2"
            },
            {
              id: "natural-drawing-bronze3",
              img: "natural-drawing-bronze3.png",
              text: "Природный рисунок бронза 3"
            },
          ]
        },
        question2: {
          question: "Выберите вариант разделения двери <br/>(Размер блоков может быть индивидуальный - как Вам нужно)",
          answers: [
            {id: "full-door", img: "quiz-1.png", text: "Дверь целиковая"},
            {id: "comby-1", img: "comby_1.png", text: "Комби 1"},
            {id: "comby-2", img: "comby_2.png", text: "Комби 2"},
            {id: "comby-3", img: "comby_3.png", text: "Комби 3"},
            {id: "comby-1-4", img: "comby_1-4.png", text: "Комби 1-4"},
            {id: "comby-3-4", img: "comby_3-4.png", text: "Комби 3-4"},
            {id: "comby-4-4", img: "comby_4-4.png", text: "Комби 4-4"},
            {id: "comby-4-5", img: "comby_4-5.png", text: "Комби 4-5"},
          ]
        },
      },
      form: {
        status: 'квиз',
        doors: '',
        phone: '',
        name: '',
        style: [],
        variable: [],
        width: '',
        height: '',
        social: '',
      },
    }
  },
  validations: {
    form: {
      doors: {
        required,
      },
      phone: {
        required,
      },
      name: {
        required,
      },
      style: {
        required,
      },
      variable: {
        required,
      },
      width: {
        required,
      },
      height: {
        required,
      },
      social: {
        required,
      },
    }
  },
  methods: {
    countDoorsMinus() {
      this.form.doors > 0 ? --this.form.doors : 0
    },
    countDoorsPlus() {
      this.form.doors === 0 || '' ? ++this.form.doors : 0
    },
    showAuthDialog,
    onSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        const params = new URLSearchParams();
        params.append('status', this.form.status);
        params.append('doors', this.form.doors);
        params.append('name', this.form.name);
        params.append('phone', this.form.phone);
        params.append('style', this.form.style);
        params.append('variable', this.form.variable);
        params.append('width', this.form.width);
        params.append('height', this.form.height);
        params.append('social', this.form.social);

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
        this.showAuthDialog('quiz')
        this.form.status = ''
        this.form.doors = ''
        this.form.name = ''
        this.form.phone = ''
        this.form.style = []
        this.form.variable = []
        this.form.width = ''
        this.form.height = ''
        this.form.social = ''
        this.$nextTick(() => {
          this.$v.$reset()
        })
      }
    },
  }
}
</script>

<style lang="scss">
.Quiz {
  padding: 0 0 40px;
  background-image: url(~@/assets/image/quiz-bg.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: $screen-l) {
    padding: 0 0 90px;
  }

  .Decor-Text {
    color: var(--color-text-btn);
  }

  &-Content {
    width: 100%;
    margin-top: -20px;
    padding: 70px 18px 73px;
    background-color: var(--color-bg-faq);
    border-radius: 12px;
    box-shadow: var(--color-box-shadow);
    text-align: center;
    position: relative;

    @media (min-width: $screen-l) {
      width: 920px;
      margin: -140px auto 0;
      padding: 70px 107px 73px;
    }

    @media (min-width: $screen-xl) {
      width: 100%;
      padding: 70px 79px /*187px */
      73px;
    }
  }

  &-Subtitle {
    margin-bottom: 25px;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.444;
    color: var(--color-text-ghost);

    @media (min-width: $screen-l) {
      font-size: 18px;
    }
  }

  &-Title {
    margin-bottom: 40px;
    //padding: 0 80px;
    color: var(--color-text-dark);

    @media (min-width: $screen-l) {
      margin-bottom: 70px;
    }

    @media (min-width: $screen-xl) {
      padding: 0 80px;
    }
  }

  &-SlideInnerBox {
    position: relative;
  }

  &-Question {
    margin-bottom: 40px;
  }

  &-SlideAnswers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 14px 12px;
    width: 327px;
    height: 480px;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 0 auto 70px;

    @media (min-width: $screen-l) {
      grid-gap: 27px 20px;
      width: 500px;
    }

    @media (min-width: $screen-xl) {
      grid-template-columns: repeat(4, 1fr);
      width: 900px;
      height: 100%;
      margin-bottom: 0;
    }
  }

  &-FormImg {
    width: 98%;
    height: 197px;
    margin-bottom: 17px;
    border-radius: 4px;
    border: 1px solid var(--color-bg-faq);

    @media (min-width: $screen-l) {
      width: 212px;
      height: 265px;
      margin-bottom: 29px;
    }
  }

  &-FormSpan {
    font-weight: 300;
    font-size: 14px;
    letter-spacing: .02em;
    line-height: 1.25;
    color: var(--color-text-grey);

    @media (min-width: $screen-l) {
      font-size: 16px;
    }
  }

  &-FormLabel {
    display: block;
    //width: 138px;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: .02em;
    line-height: 1.25;
    color: var(--color-text-grey);
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      width: 32px;
      height: 32px;
      top: 181px;
      left: 50%;
      transform: translate(-50%, 0);
      border-radius: 50%;
      background-color: var(--color-text-main);
      box-shadow: 0px 0px 1px 0px rgba(155, 146, 137, 0.14), inset 0px 5px 6.79px 0.21px rgba(77, 67, 56, 0.13);
      cursor: pointer;
      transition: all .3s;

      @media (min-width: $screen-l) {
        width: 43px;
        height: 43px;
        top: 241px;
      }

    }

    &:after {
      content: '';
      border-radius: 50%;
      position: absolute;
      width: 13px;
      height: 13px;
      top: 190px;
      left: 50%;
      transform: translate(-50%, 0);
      background-image: var(--color-bg-btn-before);
      opacity: 0;
      transition: opacity .3s;

      @media (min-width: $screen-l) {
        width: 17px;
        height: 17px;
        top: 254px;
      }
    }
  }

  &-FormInput:checked + &-FormLabel:after {
    opacity: 1;
  }

  &-FormInput:checked + &-FormLabel:before {
    box-shadow: inset 0px 5px 6.79px 0.21px rgba(199, 189, 176, 0.13);
  }

  &-FormInput:checked + &-FormLabel &-FormImg {
    box-shadow: inset 0px 5px 6.79px 0.21px rgba(199, 189, 176, 0.13);
    border: 1px solid var(--color-text-gold);
  }

  &-FormField {
    margin: 0 auto;
    position: relative;

    @media (min-width: $screen-l) {
      margin: 0;
    }

    @media (min-width: $screen-xl) {
      //margin-bottom: 12px;
    }
  }

  &-FormField--bottom {
    margin-bottom: 12px;
  }

  &-FormInput {
    width: 72%;
    margin: 0 auto;
    padding: 28px 32px;
    border: 1px solid var(--color-bg-input);
    border-radius: 8px;
    font-size: 16px;
    letter-spacing: .045em;
    color: var(--color-text-btn);
    background-color: var(--color-bg-input);

    &::placeholder {
      color: var(--color-text-placeholder);
    }

    &:focus {
      border: 1px solid var(--color-text-btn);
    }

    @media (min-width: $screen-l) {
      padding: 28px 32px;
      font-size: 22px;
    }
  }

  .Field-Number {
    display: flex;
    align-items: center;
    width: 288px;
    justify-content: space-between;
    margin: 0 auto;
  }

  .Input-Number {
    width: 74px;
    padding: 18px 32px 19px;
  }

  .Quiz-Math {
    width: 47px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-image: var(--color-bg-btn);
    position: relative;
    z-index: 1;
    transition: 3s all;
    cursor: pointer;

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 1px;
      left: 0;
      border-radius: 50%;
      background-image: var(--color-bg-btn-before);
      z-index: -1;
    }
  }

  .Plus, .Minus {
    img {
      margin-bottom: 3px;
    }
  }

  &-FormBtn {
    margin-top: 50px;
    padding: 22px 24px 26px;

    @media (min-width: $screen-m) {
      padding: 24px 23px 28px;
    }
  }

  //&-SliderBtns {
  //  width: 150px;
  //  position: absolute;
  //  z-index: 3;
  //  bottom: 18%;
  //  left: 52%;
  //  transform: translate(-50%, 0);
  //
  //  @media (min-width: $screen-l) {
  //    width: 180px;
  //    bottom: 19%;
  //  }
  //
  //  @media (min-width: $screen-xl) {
  //    //width: 1123px;
  //    bottom: 45%;
  //    left: 50%;
  //  }
  //}

  .swiper-button-prev,
  .swiper-button-next, {
    position: absolute;
    width: 59px;
    //height: 59px;
    top: 98%;

    &:after {
      content: none;
    }

    @media (min-width: $screen-s) {
      top: 50%;
    }

    @media (min-width: 1070px) {
      width: 69px;
    }
  }

  .swiper-button-prev {
    left: 140px;

    @media (min-width: 1070px) {
      left: 0;
    }
  }

  .swiper-button-next {
    right: 140px;
  }

  &-FormGroup {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-FormFieldSize {
    display: flex;
    align-items: center;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }

    span {
      margin-right: 13px;
      font-size: 18px;
      color: rgb(150, 149, 148);
    }
  }


  &-FormInputSize {
    width: 104px;
    padding: 16px 36px 18px;
    font-size: 18px;
  }

  &-FormNext {
    margin-top: 36px;
    padding: 22px 24px 26px;

    @media (min-width: $screen-m) {
      padding: 24px 37px 28px;
    }
  }

  &-FormPrev {
    position: relative;
    margin-right: 12px;
    padding: 26px 32px 30px;
    font-family: 'Museo Sans Cyrl', sans-serif;
    font-weight: 900;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: .12em;
    color: var(--color-text-btn-gold);

    border: 1px solid var(--color-text-btn-before);
    border-radius: 8px;
    transition: .3s;

    &:before {
      content: "";
      position: absolute;
      top: 2px;
      left: 0;
      right: 0;
      bottom: 2px;
      border-radius: 8px;
      padding: 1px;
      background: var(--color-bg-btn);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      box-shadow: 0px 6px 9px 0px rgba(93, 84, 74, 0.28);
    }

    &:hover, &:focus {
      &:before {
        background: var(--color-bg-btn-before);
      }
    }

    @media (min-width: $screen-m) {
      padding: 28px 37px 30px;
      font-size: 14px;
    }
  }

  .Social {
    margin-right: 27px;

    &:last-child {
      margin-right: 0;
    }

    &-Input {

    }

    &-Label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 79px;
      filter: grayscale(.9);
      opacity: .4;
      border-bottom: 3px dashed transparent;
      cursor: pointer;
      transition: opacity .3s ease;

      &:hover {
        filter: grayscale(0);
        opacity: 1;
        border-bottom: 3px dashed #ce9b56;
      }
    }

    &-Icon {

    }

    &-Span {
      font-weight: 400;
      font-size: 20px;
      letter-spacing: .05em;
      color: #ce9b56;
      margin-bottom: 3px;
    }
    &-Input:checked + &-Label {
      filter: grayscale(0);
      opacity: 1;
      border-bottom: 3px dashed #ce9b56;
    }
  }
  .Social-Input:checked + .Social-Label {
    filter: grayscale(0);
    opacity: 1;
    border-bottom: 3px dashed #ce9b56;
  }
  .quiz-prev.Btn--disabled,
  .quiz-next.Btn--disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }

  .quiz-prev.Quiz-FormPrev.Btn--disabled {
    display: none;
  }

  .Btn--disabled-inner {
    opacity: 0.55;
    filter: grayscale(.7);
  }

  .invalid-feedback {
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 10px;
    color: var(--color-text-error);
  }
}
</style>
