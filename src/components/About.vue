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
            <ul class="Achievs-List">
              <li class="Achievs-Item"
                  v-for="(item,index) in achivsList1"
                  :key="index"
              >
                <img :src="require(`@/assets/image/${item}`)" alt="" class="Achievs-Img">
              </li>
            </ul>
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
            <img src="../assets/image/glasses.png" alt="image" class="About-ItemImg">
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
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.About {
  padding: 87px 0;
  color: var(--color-text-dark);

  &-Title {
    margin-bottom: 100px;
    text-align: center;
  }

  &-Wrapper {
    display: flex;
    justify-content: space-between;
  }

  &-Img {
    max-width: 620px;
    width: 100%;
    align-self: center;
  }

  &-Content {
    max-width: 310px;
    width: 100%;
  }

  &-ContentItem {
    margin-bottom: 75px;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-ItemImg {
    margin-bottom: 30px;
  }

  &-ItemTitle {
    margin-bottom: 28px;
    font-weight: 700;
    font-size: 26px;
    line-height: 1.3;
    letter-spacing: .032em;
  }

  &-ItemText {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.35;
    letter-spacing: .022em;
  }

  &-ListItem {
    position: relative;
    margin-bottom: 10px;
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
  }

  .Plus {
    position: absolute;
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
    right: 34px;
  }

  .Vertical {
    transform: rotateZ(90deg);
    transition: .3s;
  }
}
</style>