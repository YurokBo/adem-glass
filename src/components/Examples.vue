<template>
  <section class="Examples">
    <div class="Container">
      <div class="Decor">
        <span class="Decor-Line Left"></span>
        <div class="Decor-Text">
          Примеры стекла и зеркал
        </div>
        <span class="Decor-Line Right"></span>
      </div>
      <h2 class="Title Examples-Title">
        Примеры стекла и зеркал
      </h2>
      <div class="Examples-Btns">
        <div class="Examples-BtnRow">
          <div class="Examples-Btn"
               v-for="(button) in buttons.top"
               :key="button.id"
               :class="button.class"
          >
            <input :id="button.type"
                   class="Examples-Input"
                   type="radio"
                   v-model="selectedCategory" :value="button.type"
            >
            <label class="Examples-Label"
                   :for="button.type">
              {{ button.name }}
            </label>
          </div>
        </div>
        <div class="Examples-BtnRow">
          <div class="Examples-Btn"
               v-for="(button) in buttons.bottom"
               :key="button.id"
          >
            <input :id="button.type"
                   class="Examples-Input"
                   type="radio"
                   v-model="selectedCategory" :value="button.type"
            >
            <label class="Examples-Label"
                   :for="button.type"
            >
              {{ button.name }}
            </label>
          </div>
        </div>
      </div>
      <div class="Examples-SliderBox">
        <swiper class="Examples-Slider"
                :options="optionSlider"
        >
          <swiper-slide
              class="Examples-Slide"
              v-for="(slide) in sliderInfo"
              :key="slide.id"
          >
            <img
                :src="require(`@/assets/image/${slide.img}`)"
                alt=""
                class="Examples-SlideImg"
            >
            <div class="Examples-SlideTitle">{{ slide.title }}</div>
          </swiper-slide>
        </swiper>
        <div class="Examples-SliderBtns">
          <div class="swiper-button swiper-button-prev" slot="button-prev">
            <img src="../assets/image/arrow-slider-prev.png" alt="" class="Prev">
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button swiper-button-next" slot="button-next">
            <img src="../assets/image/arrow-slider-next.png" alt="" class="Next">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import SwiperCore, {
  Navigation,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Pagination]);
export default {
  name: "Examples",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      optionSlider: {
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 5,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
      },
      selectedCategory: "natural",
      buttons: {
        top: [
          {name: "Цветное зеркало", type: "colored",},
          {name: "Рифленое стекло", type: "corrugated",},
          {name: "Природный рисунок", type: "natural",},
          {name: "Окрашенное, глянец", type: "gloss",},
          {name: "Стекло имитация бетона и мрамора", type: "imitation", class: "Btn--centered"},
        ],
        bottom: [
          {name: "Современный рисунок", type: "modern",},
          {name: "Окрашенное, матовое", type: "matt",},
          {name: "Тонированое стекло", type: "toned",},
          {name: "Состаренное стекло", type: "old",},
        ]
      },
      sliderInfo: [
        {id: "1", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "2", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "3", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "4", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "5", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "6", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "7", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "8", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "9", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "10", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "11", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
      ]
    }
  },
  computed: {
    filteredPeople: function () {
      let category = this.selectedCategory;

      if (category === "gloss") {
        return this.cardInfo;
      } else {
        return this.cardInfo.filter(function (info) {
          return info.type === category;
        });
      }
    }
  }
}
</script>

<style scoped lang="scss">

.Examples {
  padding: 85px 0;
  background-image: url(~@/assets/image/example-bg.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  mix-blend-mode: multiply;

  .Decor-Text {
    color: var(--color-text-btn);
  }

  &-Title {
    margin-bottom: 52px;
    text-align: center;
    color: var(--color-text-dark);
  }

  &-Btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (min-width: $screen-xl) {
      flex-direction: column;
      margin-bottom: 85px;
    }
  }

  &-BtnRow {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    //flex-wrap: wrap;
    white-space: nowrap;
    //margin-bottom: 60px;

    &:last-child {
      align-items: flex-start;
      margin-bottom: 0;
      //margin-top: -65px;
      @media (min-width: $screen-xl) {
        margin-top: 0;
      }
    }

    @media (min-width: $screen-xl) {
      margin-bottom: 60px;
      flex-direction: row;
    }
  }

  &-Btn {
    text-align: center;
    margin-bottom: 28px;

    &:nth-child(5) {
      //margin-left: 50px;
    }

    @media (min-width: $screen-xl) {
      margin-bottom: 0;
      //border: 3px solid var(--color-text-light);

    }
  }

  .Btn--centered {
    margin-bottom: 0;
    position: absolute;
    bottom: -21px;
    left: 20%;
    @media (min-width: $screen-xl) {
      position: relative;
      bottom: 0;
      left: 0;
    }
  }

  &-Label {
    padding: 15px 20px;
    cursor: pointer;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.44em;
    letter-spacing: .022em;
    text-align: center;
    color: var(--color-text-main4);
    transition: .3s;
    position: relative;

    @media (min-width: $screen-xl) {
      padding: 21px 29px;
      font-size: 18px;
    }

    &:hover,
    &:focus {
      &:after {
        background-image: var(--color-bg-input-checked);
        border: 1px solid var(--color-bg-input-checked);
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 1px solid var(--color-border-color);
      border-radius: 4px;
      background-image: var(--color-bg-label2);
      z-index: -1;
      transform: skew(-25deg);
    }
  }

  &-Input {
    display: none;
    position: absolute;
    visibility: hidden;
    z-index: -9999;
    left: -9999px;
  }

  input:checked + label:after {
    background-image: var(--color-bg-input-checked);
    border: 1px solid var(--color-bg-input-checked);
  }

  &-SliderBtns {
    position: relative;
    width: 402px;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .swiper-button-prev,
  .swiper-button-next, {
    width: 69px;
    height: 69px;

    &:after {
      content: none;
    }
  }
  .swiper-pagination-bullets-dynamic {
    width: 100%!important;
    left: 56%;
    transform: translate(-50%, 0);
  }
  .swiper-pagination-bullet {
    background: var(--color-bg-faq)!important;
  }
  .swiper-pagination-bullet-active {
    background: var(--color-bg-btn-before)!important;
  }
}

</style>