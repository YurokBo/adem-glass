<template>
  <section class="Price">
    <div class="Container">
      <div class="Decor">
        <span class="Decor-Line Left"></span>
        <div class="Decor-Text">
          Примеры стекла и зеркал
        </div>
        <span class="Decor-Line Right"></span>
      </div>
      <h2 class="Title Price-Title">
        Посмотрите примеры<br/> наших работ с ценами
      </h2>
      <div class="Price-Btns">
        <div class="Price-Btn"
             v-for="(button) in buttons"
             :key="button.id"
        >
          <input :id="button.type"
                 class="Price-Input"
                 type="radio"
                 v-model="selectedCategory"
                 :value="button.type"
          >
          <label class="Price-Label"
                 :for="button.type">
            {{ button.name }}
          </label>
        </div>
      </div>
    </div>
    <div class="Price-SliderBox">
      <swiper class="Price-Slider"
              :options="optionSlider"
      >
        <swiper-slide
            class="Price-Slide"
            v-for="(slide) in filteredPeople"
            :key="slide.id"
        >
          <img
              :src="require(`@/assets/image/${slide.img}`)"
              alt=""
              class="Price-SlideImg"
          >
          <div class="Price-SlideContent">
            <div class="Price-SlideTitle">{{ slide.title }}</div>
            <div class="Price-SlideSubtitle">{{ slide.subtitle }}</div>
            <div class="Price-SlideTable">
              <div class="Price-SlideTableRow">
                <div class="Price-SlideTableRowTitle">Размеры 1 двери:</div>
                <div class="Price-SlideTableRowText">{{ slide.sizeText }}</div>
              </div>
              <div class="Price-SlideTableRow">
                <div class="Price-SlideTableRowTitle">Цена 1 двери:</div>
                <div class="Price-SlideTableRowText">{{ slide.priceText }}</div>
              </div>
            </div>
            <button class="Btn Price-SlideBtn">рассчитать стоимость</button>
          </div>
        </swiper-slide>
      </swiper>
      <div class="Price-SliderBtns">
        <div class="swiper-button swiper-button-prev" slot="button-prev">
          <img src="../assets/image/arrow-slider-prev.png" alt="" class="Prev">
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button swiper-button-next" slot="button-next">
          <img src="../assets/image/arrow-slider-next.png" alt="" class="Next">
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// styles required for Pagination component
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, {
  Navigation, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
export default {
  name: "Price",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
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
          1070: {
            spaceBetween: -560,
          },
        }
      },
      buttons: [
        {name: "С простым зеркалом", type: "simple",},
        {name: "С цветным стеклом", type: "colored",},
        {name: "С декоративным стеклом", type: "decor",},
        {name: "Другие дизайны", type: "other",},
      ],
      sliderInfo: [
        {
          id: "1",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "colored"
        },
        {
          id: "2",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "colored"
        },
        {
          id: "3",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "colored"
        },
        {
          id: "4",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "colored"
        },
        {
          id: "5",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "colored"
        },
        {
          id: "6",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "simple"
        },
        {
          id: "7",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "simple"
        },
        {
          id: "8",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "simple"
        },
        {
          id: "9",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "simple"
        },
        {
          id: "10",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "gloss"
        },
        {
          id: "11",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "gloss"
        },
        {
          id: "12",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "natural"
        },
        {
          id: "13",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "natural"
        },
        {
          id: "14",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "natural"
        },
        {
          id: "15",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "natural"
        },
        {
          id: "16",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "decor"
        },
        {
          id: "17",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "decor"
        },
        {
          id: "18",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "decor"
        },
        {
          id: "19",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "decor"
        },
        {
          id: "20",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "decor"
        },
        {
          id: "21",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "other"
        },
        {
          id: "22",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "other"
        },
        {
          id: "23",
          img: "green-glass.png",
          title: "Двери купе  в гардеробную",
          subtitle: "Стекло с окрашиванием Лакобель",
          sizeTitle: "Размеры 1 двери:",
          priceTitle: "Цена 1 двери:",
          sizeText: "700 мм",
          priceText: "7 600 руб.",
          type: "other"
        },

      ],
      selectedCategory: "colored",
    }
  },
  computed: {
    filteredPeople: function () {
      let category = this.selectedCategory;
      return this.sliderInfo.filter(function (info) {
        return info.type === category
      });
    }
  }
}
</script>

<style scoped lang="scss">
.Price {
  padding: 85px 0;

  &-Title {
    margin-bottom: 52px;
    text-align: center;
    color: var(--color-text-dark);
  }

  &-Btns {
    display: grid;
    grid-template-columns: repeat(2, 170px);
    grid-gap: 6px 0;
    align-items: center;
    justify-content: center;
    margin-bottom: 85px;

    @media (min-width: $screen-xs) {
      grid-template-columns: repeat(2, 200px);
    }

    @media (min-width: $screen-xl) {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 0;
    }
  }

  &-Btn {
    text-align: center;

    @media (min-width: $screen-xl) {

    }
  }

  &-Label {
    display: block;
    padding: 15px 5px;
    cursor: pointer;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.44em;
    letter-spacing: .022em;
    text-align: center;
    color: var(--color-text-main4);
    transition: .3s;
    position: relative;

    @media (min-width: $screen-xs) {
      padding: 15px 20px;
    }

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

  &-Slider {
    //width: 390px;
    margin-bottom: 51px;

    @media (min-width: 1024px) {
      width: 1040px;
    }

    @media (min-width: $screen-xl) {
      width: 1240px;
    }

    @media (min-width: $screen-xxxl) {
      width: 1650px;
    }
  }

  .swiper-slide {
    transform: scale(0.85);
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      background-color: rgba(255, 255, 255, .5);
    }
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    transform: scale(0.92);
  }

  .swiper-slide-next {
    z-index: 9;
  }

  .swiper-slide-next ~ .swiper-slide {
    z-index: 8;
  }

  .swiper-slide-active {
    transform: scale(0.99);
    z-index: 10;

    &:before {
      display: none;
    }

    .Examples-SlideTitle {
      display: block;
    }
  }

  &-SliderBtns {
    position: relative;
    width: 200px;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    @media (min-width: 1070px) {
      width: 402px;
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

  &-Slide {
    min-width: 0;
    min-height: 0;
    width: 330px;
    padding: 30px;
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
      padding: 34px 61px 32px 32px;
      flex-direction: row;
      align-items: flex-start;
    }

    @media (min-width: $screen-xl) {
      width: 900px;
    }
  }

  &-SlideImg {
    margin-bottom: 35px;
    @media (min-width: 1024px) {
      width: 500px;
      margin-bottom: 0;
      margin-right: 50px;
    }
  }

  &-SlideTitle {
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.154;
    color: var(--color-text-ghost);

    @media (min-width: 1024px) {
      margin-bottom: 20px;
      font-size: 26px;
    }
  }

  &-SlideSubtitle {
    margin-bottom: 35px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.444;
    color: var(--color-text-main4);

    @media (min-width: 1024px) {
      margin-bottom: 55px;
      font-size: 18px
    }
  }

  &-SlideTable {
    margin-bottom: 40px;

    @media (min-width: 1024px) {
      margin-bottom: 77px;
    }
  }

  &-SlideTableRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 16px;
    color: var(--color-text-main4);

    &:last-child {
      margin-bottom: 0;
    }

    @media (min-width: 1024px) {
      margin-bottom: 25px;
      font-size: 18px
    }
  }

  &-SlideTableRowTitle {
    font-weight: 300;
    line-height: 1.444;
  }

  &-SlideTableRowText {
    font-weight: 700;
    line-height: 1.444;
  }

  &-SlideBtn {
    display: block;
    margin: 0 auto;
    padding: 22px 24px 26px;

    @media (min-width: $screen-m) {
      padding: 24px 23px 28px;
    }

    @media (min-width: 1024px) {
      margin: 0;
    }
  }

}
</style>