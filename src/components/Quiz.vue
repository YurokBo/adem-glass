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
        <form class="Quiz-Form">
          <swiper class="Quiz-Slider">
            <swiper-slide class="Quiz-Slide">
              <h3 class="Quiz-Question" v-html="questions.question1.question"></h3>
              <div class="Quiz-SlideAnswers">
                <div class="Quiz-FormField"
                     v-for="answer in questions.question1.answers"
                     :key="answer.id"
                >
                  <label :for="answer.id" class="Quiz-FormLabel">
                    <img :src="require(`@/assets/image/${answer.img}`)" alt="" class="Quiz-FormImg">
                    <input type="checkbox" class="Quiz-FormInput" checked>
                    <span class="Quiz-FormSpan">{{ answer.text }}</span>
                  </label>
                </div>
              </div>
            </swiper-slide>
          </swiper>
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

SwiperCore.use([Navigation]);
export default {
  name: "Quiz",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
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
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Quiz {
  margin: 0 0 90px;
  background-image: url(~@/assets/image/quiz-bg.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  .Decor-Text {
    color: var(--color-text-btn);
  }

  &-Content {
    width: 100%;
    margin-top: -140px;
    padding: 70px 187px 73px;
    background-color: var(--color-bg-faq);
    border-radius: 12px;
    box-shadow: var(--color-box-shadow);
    text-align: center;
  }

  &-Subtitle {
    margin-bottom: 25px;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.444;
    color: var(--color-text-ghost);
  }

  &-Title {
    margin-bottom: 70px;
    padding: 0 80px;
    color: var(--color-text-dark);
  }

  &-Question {
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 26px;
    line-height: 1.462;
    letter-spacing: .03em;
    color: var(--color-text-dark);
  }

  &-SlideAnswers {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 27px 20px;
  }

  &-FormImg {
    width: 210px;
    height: 263px;
    margin-bottom: 29px;
  }

  &-FormInput {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  &-FormLabel {
    display: block;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: .02em;
    line-height: 1.25;
    color: var(--color-text-grey);
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 43px;
      height: 43px;
      top: 241px;
      left: 50%;
      transform: translate(-50%, 0);
      border-radius: 50%;
      background-color: var(--color-text-main);
      box-shadow: 0px 0px 1px 0px rgba(155, 146, 137, 0.14),inset 0px 5px 6.79px 0.21px rgba(77, 67, 56, 0.13);

      //box-shadow: inset 0px 5px 6.79px 0.21px rgba(199, 189, 176, 0.13);
    }
/*
    &:after {
      content: '';
      display: none;
      border-radius: 50%;
      position: absolute;
      width: 17px;
      height: 17px;
      top: 254px;
      left: 50%;
      transform: translate(-50%, 0);
      background-image: var(--color-bg-btn-before);

    }*/
  }

  &-FormInput:checked + &-FormLabel:after {
    content: '';
    position: absolute;
    width: 17px;
    height: 17px;
    top: 254px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    background-image: var(--color-bg-btn-before);
  }
}
</style>
