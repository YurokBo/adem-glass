<template>
  <section class="About">
    <div class="Container">
      <div class="Decor">
        <span class="Decor-Line Left"></span>
        <div class="Decor-Text">
          ADEM GLASS - кто мы?
        </div>
        <span class="Decor-Line Right"></span>
      </div>
      <h2 class="Title About-Title">
        ADEM GLASS - кто мы?
      </h2>
      <div class="About-Wrapper">
        <div class="About-Content">
          <div class="About-ContentItem">
            <img src="../assets/image/showroom.png" alt="image" class="About-ItemImg">
            <div class="About-ItemTitle">
              Более 20 лет
              на стекольном рынке
            </div>
            <div class="About-ItemText">
              Мы являемся крупнейшим
              поставщиком интерьерного
              и мебельного стекла на
              российском рынке
            </div>
          </div>
          <div class="About-ContentItem">
            <div class="Plus Plus--left">
              <img src="../assets/image/plus-bg.png" alt="plus" class="Plus-Img">
              <span class="Plus-Plus Vertical Plus-Plus--left"></span>
              <span class="Plus-Plus Horizontal Plus-Plus--left"></span>
            </div>
            <div class="About-AchievsList Achivs--left">
              <img v-for="(item,index) in achivsList1"
                   :key="index"
                   :src="require(`@/assets/image/${item}`)"
                   alt="" class="About-AchievsImg">
            </div>
            <img src="../assets/image/macbook.png" alt="image" class="About-ItemImg">
            <div class="About-ItemTitle">
              Участвуем
              в телепроектах:
            </div>
            <ul class="About-ItemText About-List">
              <li class="About-ListItem">Дачный Ответ</li>
              <li class="About-ListItem">Битва Дизайнеров</li>
              <li class="About-ListItem">Большая переделка</li>
            </ul>
          </div>
        </div>
        <img src="../assets/image/about-center.png" alt="image" class="About-Img">
        <div class="About-Content">
          <div class="About-ContentItem">
            <div class="Plus Plus--right">
              <img src="../assets/image/plus-bg.png" alt="plus" class="Plus-Img">
              <span class="Plus-Plus Vertical Plus-Plus--right"></span>
              <span class="Plus-Plus Horizontal Plus-Plus--right"></span>
            </div>
            <div class="About-AchievsList Achivs--right">
              <img v-for="(item,index) in achivsList2"
                   :key="index"
                   :src="require(`@/assets/image/${item}`)"
                   alt="" class="About-AchievsImg">
            </div>
            <img src="../assets/image/exposition.png" alt="image" class="About-ItemImg">
            <div class="About-ItemTitle">
              Регулярно принимаем
              участие в выставках:
            </div>
            <ul class="About-ItemText About-List">
              <li class="About-ListItem">MosBuild</li>
              <li class="About-ListItem">Мир Стекла</li>
              <li class="About-ListItem">Мир Мебели</li>
            </ul>
          </div>
          <div class="About-ContentItem">
            <img src="../assets/image/glasses-about.png" alt="image" class="About-ItemImg">
            <div class="About-ItemTitle">
              Большой выбор стекла
              для дверей купе
            </div>
            <div class="About-ItemText">
              В современном и классическом
              стилях в Москве - более 350
              позиций в наличии
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      achivsList1: [
        "dacha-answer.png",
        "design-fight.png",
        "big-changing.png"
      ],
      achivsList2: [
        "mir-stekla.png",
        "mos-build.png",
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.About {
  padding: 55px 0 30px;
  color: var(--color-text-dark);

  @media (min-width: $screen-m) {
    padding: 87px 0;
  }

  .Decor-Text {
    color: var(--color-text-btn);
  }

  &-Title {
    margin-bottom: 30px;
    text-align: center;
    color: var(--color-text-dark);
    @media (min-width: $screen-m) {
      margin-bottom: 100px;
    }
  }

  &-Wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: $screen-l) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &-Img {
    display: none;

    @media (min-width: 1170px) {
      display: block;
      max-width: 500px;
      width: 100%;
      align-self: center;
    }

    @media (min-width: $screen-xl) {
      max-width: 620px;
    }
  }

  &-Content {
    max-width: 320px;
    width: 100%;
    @media (min-width: $screen-s) {
      max-width: 45%;
    }
    @media (min-width: $screen-l) {
      max-width: 45%;
    }
    @media (min-width: 1170px) {
      max-width: 310px;
      width: 100%;
    }
  }

  &-ContentItem {
    margin-bottom: 50px;
    position: relative;

    @media (min-width: $screen-m) {
      margin-bottom: 75px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &-ItemImg {
    margin-bottom: 25px;
    @media (min-width: $screen-m) {
      margin-bottom: 30px;
    }
  }

  &-ItemTitle {
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.3;
    letter-spacing: .032em;

    @media (min-width: $screen-m) {
      margin-bottom: 28px;
      font-size: 26px;
    }
  }

  &-ItemText {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.35;
    letter-spacing: .022em;
    @media (min-width: $screen-m) {
      font-size: 18px;
    }
  }

  &-ListItem {
    position: relative;
    margin-bottom: 5px;
    padding-left: 23px;

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      content: '';
      position: absolute;
      background-image: url(~@/assets/image/list-item.png);
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      width: 13px;
      height: 13px;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
    }

    @media (min-width: $screen-m) {
      margin-bottom: 10px;
    }
  }

  .Plus {
    position: absolute;
    z-index: 5;
    cursor: pointer;
    top: -27px;
    transition: .3s;

    &:hover {
      .Vertical {
        transform: rotateZ(180deg);
      }
    }

    &-Plus {
      display: block;
      position: absolute;
      width: 14px;
      height: 2px;
      top: 29px;
      background-color: var(--color-text-main3);

      &--right {
        right: 23px;
      }

      &--left {
        left: 22px;
      }
    }
  }

  .Plus--left {
    left: -10px;
  }

  .Plus--right {
    right: 45px;
    @media (min-width: $screen-l) {
      right: 40%;
    }
    @media (min-width: 1170px) {
      right: 40px;
    }
  }

  .Vertical {
    transform: rotateZ(90deg);
    transition: .3s;
  }

  &-AchievsList {
    display: flex;
    flex-direction: column;
    padding: 32px 24px 29px;
    position: absolute;
    border-radius: 8px;
    background-color: var(--color-bg-input);
    z-index: 4;

    visibility: hidden;
    opacity: 0;
    transition: all .3s;

    @media (min-width: $screen-l) {
      flex-direction: row;
      padding: 52px 44px 49px;
    }
  }

  &-AchievsImg {
    max-width: 230px;
    flex-grow: 1;
    &:last-child {
      margin-right: 0;
    }
  }

  .Achivs--left {
    left: 17px;
  }

  .Achivs--right {
    top: 5px;
    right: 68px;
  }

  .Plus:hover + &-AchievsList {
    visibility: visible;
    opacity: 1;
  }
}
</style>