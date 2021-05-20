<template>
  <section class="Header">
    <div class="Container">
      <div class="Decor">
        <span class="Decor-Line Left"></span>
        <div class="Decor-Text">
          Главная страница
        </div>
        <span class="Decor-Line Right"></span>
      </div>
      <HeaderMenu/>
      <div class="Header-Content">
        <h1 class="Title Header-Title">
          Двери для шкафа-купе <br> и гардеробной <br> от
          <span class="Digit">8 000</span> до
          <span class="Digit">80 000</span> руб.
        </h1>
        <div class="Subtitle Header-Subtitle">
          От производителя на заказ по индивидуальным размерам
        </div>
        <div class="Header-List">
          <div class="Header-Item"
               v-for="(item, index) in items"
               :key="index"
          >
            <img :src="require(`@/assets/image/${item.image}`)" alt="image" class="Header-ItemImage">
            <div class="Header-ItemText" v-html="item.text"></div>
          </div>
        </div>
        <div class="Header-BtnBox">
          <button class="Btn Header-Btn">рассчитать стоимость</button>
          <a href="#" class="Header-BtnCatalog">Посмотреть каталог</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";

export default {
  name: "Header",
  components: {
    HeaderMenu
  },
  data() {
    return {
      items: [
        {image: "window.png", text: "Используем<br/> популярный<br/> узкий профиль"},
        {image: "glasses.png", text: "+350 видов<br/> красивейших<br/> стекол и зеркал"},
        {image: "clock.png", text: "Изготовление<br/> дверей от 3-х<br/> рабочих дней"}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.Header {
  position: relative;
  padding: 0 0 240px;
  background-image: url(~@/assets/image/header-fone.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &-Content {
    max-width: 640px;
    width: 100%;
  }

  &-Title {
    margin-bottom: 10px;
  }

  &-Subtitle {
    margin-bottom: 66px;
    line-height: 1.444;
    color: var(--color-text-main2);
  }

  &-List {
    display: flex;
    align-items: flex-end;
    margin-bottom: 47px;
  }

  &-Item {
    margin-right: 75px;
    font-size: 18px;
    line-height: 1.444em;
    color: var(--color-text-main2);

    &:last-child {
      margin-right: 0;

      img {
        display: block;
        margin: 0 auto 10px;
      }

      .Header-ItemText {
        padding-left: 0;
      }
    }
  }

  &-ItemText {
    padding-left: 14px;
  }

  &-BtnBox {
    display: flex;
    align-items: center;
  }

  &-Btn {
    padding: 24px 23px 28px;
    margin-right: 20px;
  }

  &-BtnCatalog {
    position: relative;
    padding: 27px 65px 30px 27px;
    font-family: 'Museo Sans Cyrl', sans-serif;
    font-weight: 900;
    font-size: 14px;
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
      bottom: 7px;
      border-radius: 8px;
      padding: 1px;
      background: var(--color-bg-btn);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }

    &:after {
      content: '';
      position: absolute;
      width: 113px;
      height: 112px;
      top: 35%;
      right: -62px;
      transform: translate(0, -50%);
      background-image: url(~@/assets/image/magazine.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    &:hover, &:focus {
      &:before {
        background: var(--color-bg-btn-before);
      }
    }
  }
}
</style>
