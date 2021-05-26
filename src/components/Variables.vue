<template>
  <section class="Variables">
    <div class="Container">
      <div class="Decor">
        <span class="Decor-Line Left"></span>
        <div class="Decor-Text">
          Двери под любой интерьер
        </div>
        <span class="Decor-Line Right"></span>
      </div>
      <h2 class="Title Variables-Title">изготовим двери купе под любой интерьер</h2>
      <div class="SubTitle Variables-SubTitle">
        Полностью целиковое полотно или с комбинированными вставками, делителями
        - на ваш выбор, под ваш интерьер!
      </div>
      <div class="Variables-ContentList">
        <div class="Variables-Content">
          <div class="Variables-ContentItem ContentItem--left">
            <img src="../assets/image/var-glass1.png" alt="Glass variable" class="Variables-ContentItemImg">
            <div class="Variables-ContentItemInfo Info--left">
              <div class="Variables-ContentItemTitle">С окрашенным стеклом Лакобель</div>
              <div class="Variables-ContentItemText">Сохраняет стойкость цвета 15 и более лет</div>
            </div>
          </div>
          <div class="Variables-ContentItem">
            <img src="../assets/image/var-glass2.png" alt="Glass variable" class="Variables-ContentItemImg">
            <div class="Variables-ContentItemInfo Info--right">
              <div class="Variables-ContentItemTitle Text--right">Матовое стекло</div>
              <div class="Variables-ContentItemText Text--right">Матовое стекло наполняет интерьер воздушностью</div>
            </div>
          </div>
        </div>
        <div class="Variables-Content Variables-Content--center">
          <div class="Variables-ContentItem ContentItem--left">
            <img src="../assets/image/var-glass3.png" alt="Glass variable" class="Variables-ContentItemImg">
            <div class="Variables-ContentItemInfo Info--left">
              <div class="Variables-ContentItemTitle">С декоративным стеклом</div>
              <div class="Variables-ContentItemText">
                +350 вариантов
                декоративного стекла
                в современном
                и классическом стилях
              </div>
            </div>
          </div>
          <div class="Variables-ContentItem">
            <img src="../assets/image/var-glass4.png" alt="Glass variable" class="Variables-ContentItemImg">
            <div class="Variables-ContentItemInfo Info--right">
              <div class="Variables-ContentItemTitle Text--right">С делителями</div>
              <div class="Variables-ContentItemText Text--right">
                Делители и профиль,
                подобранные в цвет
                интерьера, завершают
                общую картину
              </div>
            </div>
          </div>
        </div>
        <div class="Variables-Content">
          <div class="Variables-ContentItem ContentItem--left">
            <img src="../assets/image/var-glass5.png" alt="Glass variable" class="Variables-ContentItemImg">
            <div class="Variables-ContentItemInfo Info--left">
              <div class="Variables-ContentItemTitle">С окрашенным матовым стеклом</div>
              <div class="Variables-ContentItemText">Модное матовое окрашенное стекло</div>
            </div>
          </div>
          <div class="Variables-ContentItem">
            <img src="../assets/image/var-glass6.png" alt="Glass variable" class="Variables-ContentItemImg">
            <div class="Variables-ContentItemInfo Info--right">
              <div class="Variables-ContentItemTitle Text--right">С окрашенным стеклом Лакобель</div>
              <div class="Variables-ContentItemText Text--right">Белое, бежевое, капучино, черное.- на ваш выбор!</div>
            </div>
          </div>
        </div>
      </div>
      <button class="Btn Variables-Btn">рассчитать стоимость</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Variables"
}
</script>

<style scoped lang="scss">
.Variables {
  padding: 70px 0;
  background-image: url(~@/assets/image/variables-bg.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: $screen-l) {
    padding: 89px 0;
  }

  &-Title {
    text-align: center;
    margin: 0 0 20px;
    @media (min-width: $screen-l) {
      width: 545px;
      margin: 0 auto 20px;
    }
  }

  &-SubTitle {
    margin: 0 0 60px;
    padding: 0 15px;
    text-align: center;
    @media (min-width: $screen-l) {
      width: 545px;
      margin: 0 auto 74px;
      padding: 0;
    }
  }

  &-ContentList {
    margin-bottom: 95px;
  }

  &-Content {
    display: flex;
    justify-content: center;
    //align-items: center;
    //flex-direction: column;
    margin-bottom: 70px;

    &:last-child {
      margin-bottom: 0;
    }

    @media (min-width: $screen-l) {
      //flex-direction: row;
      justify-content: space-around;
    }
  }

  &-Content--center {
    @media (min-width: $screen-xxl) {
      justify-content: space-between;
    }
  }

  &-ContentItem {
    display: flex;
    flex-direction: column;
    margin-right: 27px;
    //align-items: center;

    &:last-child {
      margin-right: 0;
    }

    @media (min-width: $screen-l) {
      flex-direction: row;
      margin-right: 0;
    }
  }

  .ContentItem--left {
    @media (min-width: $screen-l) {
      flex-direction: row-reverse;
    }
  }

  &-ContentItemInfo {
    max-width: 260px;
    width: 100%;
    padding-left: 20px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 22px;
      height: 22px;
      top: 2px;
      left: -13px;
      background-image: url(~@/assets/image/ball-ring.png);
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    @media (min-width: $screen-l) {
      padding-top: 20px;
      padding-left: 0;
      &:before {
        width: 43px;
        height: 43px;
        top: -15px;
        left: -11px;
      }
    }
    @media (min-width: $screen-xl) {
      &:before {
        left: -51px;
      }
    }
  }

  .Info--right {
    @media (min-width: $screen-l) {
      &:before {
        left: 231px;
      }
    }
    @media (min-width: $screen-xl) {
      &:before {
        left: 267px;
      }
    }
  }

  &-ContentItemImg {
    max-width: 133px;
    height: 133px;
    text-align: center;
    @media (min-width: $screen-s) {
      max-width: 177px;
      height: 177px;
    }
  }

  &-ContentItemTitle {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.15em;
    letter-spacing: .032em;
    color: var(--color-text-main2);

    @media (min-width: $screen-xs) {
      font-size: 16px;
    }

    @media (min-width: $screen-s) {
      font-size: 26px;
    }
  }

  &-ContentItemText {
    font-size: 11px;
    line-height: 1.22em;
    color: var(--color-text-main2);

    @media (min-width: $screen-xs) {
      font-size: 14px;
    }

    @media (min-width: $screen-s) {
      font-size: 18px;
    }
  }

  .Text--right {
    @media (min-width: $screen-l) {
      text-align: right;
    }
  }

  &-Btn {
    display: block;
    margin: 0 auto;
    padding: 24px 23px 28px;
  }
}
</style>