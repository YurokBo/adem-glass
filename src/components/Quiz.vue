<template>
  <section class="Quiz">
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
          <swiper class="Quiz-Slider" :options="options">
            <swiper-slide class="Quiz-Slide">
              <h3 class="Quiz-Question" v-html="questions.question1.question"></h3>
              <div class="Quiz-SlideAnswers">
                <div class="Quiz-FormField"
                     v-for="answer in questions.question1.answers"
                     :key="answer.id"
                >
                  <input type="checkbox" :id="answer.id" class="Quiz-FormInput">
                  <label :for="answer.id" class="Quiz-FormLabel">
                    <img :src="require(`@/assets/image/${answer.img}`)" alt="" class="Quiz-FormImg">
                    <span class="Quiz-FormSpan">{{ answer.text }}</span>
                  </label>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="Quiz-Slide">
              <h3 class="Quiz-Question" v-html="questions.question2.question"></h3>
              <div class="Quiz-SlideAnswers">
                <div class="Quiz-FormField"
                     v-for="answer in questions.question2.answers"
                     :key="answer.id"
                >
                  <input type="checkbox" :id="answer.id" class="Quiz-FormInput">
                  <label :for="answer.id" class="Quiz-FormLabel">
                    <img :src="require(`@/assets/image/${answer.img}`)" alt="" class="Quiz-FormImg">
                    <span class="Quiz-FormSpan">{{ answer.text }}</span>
                  </label>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="Quiz-Slide">
              <h3 class="Quiz-Question">
                Укажите размер проема
              </h3>
              <!--              <div class="Quiz-SlideInput">-->
              <div class="Quiz-FormField">
                <input type="text"
                       class="Quiz-FormInput Input"
                       name="size"
                       placeholder="Высота*Ширина"
                >
                <!--                  <span class="invalid-feedback">Обязательное поле!</span>-->
              </div>
              <!--              </div>-->
            </swiper-slide>
            <swiper-slide class="Quiz-Slide">
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
              <!--              </div>-->
            </swiper-slide>
            <swiper-slide class="Quiz-Slide">
              <h3 class="Quiz-Question">
                Отлично! Теперь мы знаем, какие двери Вы хотите.<br/>
                Укажите как с Вами связаться
              </h3>
              <!--              <div class="Quiz-SlideInput">-->
              <div class="Quiz-FormField">
                <input type="text"
                       class="Quiz-FormInput Input"
                       name="name"
                       placeholder="Ваше имя"
                >
                <!--                <span v-if="$v.form.name.$dirty && !$v.form.name.required"
                                      class="invalid-feedback">Обязательное поле!</span>-->
              </div>
              <div class="Quiz-FormField">
                <input type="text"
                       class="Quiz-FormInput Input"
                       name="phone"
                       placeholder="Ваш телефон"
                >
                <!--                <span v-if="$v.form.phone.$dirty && !$v.form.phone.required"
                                      class="invalid-feedback">Обязательное поле!</span>-->
              </div>
              <button type="submit" class="Btn Quiz-FormBtn">Рассчитать стоимость</button>
            </swiper-slide>
          </swiper>
          <div class="Quiz-SliderBtns">
            <div class="swiper-button swiper-button-prev prev" slot="button-prev">
              <img src="../assets/image/arrow-slider-prev.png" alt="" class="Prev">
            </div>
            <div class="swiper-button swiper-button-next next" slot="button-next">
              <img src="../assets/image/arrow-slider-next.png" alt="" class="Next">
            </div>
          </div>
          <button type="button" class="Btn Quiz-FormNext next">следующий вопрос</button>
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
  Navigation, Pagination
} from 'swiper/core';
//import axios from "axios";

SwiperCore.use([Navigation, Pagination]);
export default {
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
          nextEl: '.next',
          prevEl: '.prev',
          disabledClass: 'Btn--disabled'
        },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
      },

      questions: {
        question1: {
          question: "Выберите стиль наполнения дверей <br/>(лучше несколько, для сравнения цены)",
          answers: [
            {id: "painted-frosted", img: "quiz-1.png", text: "Окрашенное матовое стекло"},
            {id: "painted-glossy", img: "quiz-2.png", text: "Окрашенное глянцевое стекло"},
            {id: "mirror-corrugated", img: "quiz-3.png", text: "Зеркальное рифленое стекло"},
            {id: "matt-corrugated", img: "quiz-4.png", text: "Матовое рифленое стекло"},
            {id: "natural-drawing", img: "quiz-5.png", text: "Природный рисунок"},
            {id: "classic-pattern", img: "quiz-6.png", text: "Классический узор"},
            {id: "modern-drawing", img: "quiz-7.png", text: "Современный рисунок"},
            {id: "monolithic-glass", img: "quiz-8.png", text: "Монолитное стекло с 3D рисунком"},
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
        }
      }
    }
  },
  methods: {
    onSubmit() {
      // this.$v.form.$touch();
      // if (!this.$v.form.$error) {
      //   const params = new URLSearchParams();
      //   params.append('size', this.form.size);
      //   params.append('doors', this.form.doors);
      //   params.append('name', this.form.name);
      //   params.append('phone', this.form.phone);
      //
      //   axios.post(
      //       "/mail.php",
      //       params,
      //       {
      //         headers: {
      //           'content-type': 'application/x-www-form-urlencoded'
      //         }
      //       }
      //   ).then(() => {})
      //   this.showAuthDialog()
      //   this.form.size = ''
      //   this.form.doors = ''
      //   this.form.name = ''
      //   this.form.phone = ''
      //   this.$nextTick(() => {
      //     this.$v.$reset()
      //   })
      // }
    },
    // addToDoor() {
    //   console.log(this.doorsCount++)
    // },
    // removeFromDoor() {
    //   console.log( this.doorsCount === 0 ? this.doorsCount-- : 0)
    // }
  }
}
</script>

<style scoped lang="scss">
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
      padding: 70px 187px 73px;
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

  &-Question {
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.462;
    letter-spacing: .03em;
    color: var(--color-text-dark);

    @media (min-width: $screen-l) {
      font-size: 20px;
    }

    @media (min-width: $screen-xl) {
      font-size: 26px;
    }
  }

  &-SlideAnswers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4px 12px;
    width: 327px;
    height: 520px;
    overflow-y: auto;
    margin: 0 auto 100px;

    @media (min-width: $screen-l) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 27px 20px;
      width: 100%;
    }

    @media (min-width: $screen-xl) {
      grid-template-columns: repeat(4, 1fr);
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

  &-FormInput[type="checkbox"] {
    position: absolute;
    width: 10px;
    height: 10px;
    overflow: hidden;
    clip: rect(0 0 0 0);
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
    margin: 0 auto 12px;
    position: relative;

    @media (min-width: $screen-l) {
      //width: 80%;
      margin: 0;
    }

    @media (min-width: $screen-xl) {
      //width: 83%;
    }
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
    width: 260px;
    margin: 0 auto;
  }

  .Input-Number {
    margin: 0 30px 0;
  }

  .Quiz-Math {
    display: block;
    width: 26px;
    height: 26px;
    position: relative;
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
    &:after {
      content: "";
      position: absolute;
      width: 2px;
      height: 25px;
      background-color: var(--color-text-dark);
      //top: -50%;
      left: 17.5px;
    }
  }

  .Minus {
    margin-right: 30px;
  }

  &-FormBtn {
    margin-top: 50px;
    padding: 22px 24px 26px;

    @media (min-width: $screen-m) {
      padding: 24px 23px 28px;
    }
  }

  &-SliderBtns {
    width: 150px;
    position: absolute;
    z-index: 3;
    bottom: 18%;
    left: 51%;
    transform: translate(-50%, 0);

    @media (min-width: $screen-l) {
      width: 180px;
      bottom: 19%;
    }

    @media (min-width: $screen-xl) {
      width: 1123px;
      bottom: 45%;
      left: 50%;
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
  .swiper-button-prev {
    left: -10px;
  }

  &-FormNext {
    margin-top: 36px;
    padding: 22px 24px 26px;

    @media (min-width: $screen-m) {
      padding: 24px 23px 28px;
    }
  }

  .prev.Btn--disabled,
  .next.Btn--disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }
}
</style>
