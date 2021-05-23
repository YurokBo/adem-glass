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
      <!--      <div class="Variables-Content">-->
      <div class="Variables-Content">
        <div class="Variables-ContentItem">
          <div class="Variables-ContentItemInfo">
            <div class="Variables-ContentItemTitle">С окрашенным стеклом Лакобель</div>
            <div class="Variables-ContentItemText">Сохраняет стойкость цвета 15 и более лет</div>
          </div>
          <img src="../assets/image/var-glass1.png" alt="Glass variable" class="Variables-ContentItemImg">
        </div>
        <div class="Variables-ContentItem">
          <img src="../assets/image/var-glass2.png" alt="Glass variable" class="Variables-ContentItemImg">
          <div class="Variables-ContentItemInfo">
            <div class="Variables-ContentItemTitle">Матовое стекло</div>
            <div class="Variables-ContentItemText">Матовое стекло наполняет интерьер воздушностью</div>
          </div>
        </div>
      </div>
      <div class="Variables-Content Variables-Content--center">
        <div class="Variables-ContentItem">
          <div class="Variables-ContentItemInfo">
            <div class="Variables-ContentItemTitle">С декоративным стеклом</div>
            <div class="Variables-ContentItemText">
              +350 вариантов
              декоративного стекла
              в современном
              и классическом стилях
            </div>
          </div>
          <img src="../assets/image/var-glass3.png" alt="Glass variable" class="Variables-ContentItemImg">
        </div>
        <div class="Variables-ContentItem">
          <img src="../assets/image/var-glass4.png" alt="Glass variable" class="Variables-ContentItemImg">
          <div class="Variables-ContentItemInfo">
            <div class="Variables-ContentItemTitle">С делителями</div>
            <div class="Variables-ContentItemText">
              Делители и профиль,
              подобранные в цвет
              интерьера, завершают
              общую картину
            </div>
          </div>
        </div>
      </div>
      <div class="Variables-Content">
        <div class="Variables-ContentItem">
          <div class="Variables-ContentItemInfo">
            <div class="Variables-ContentItemTitle">С окрашенным матовым стеклом</div>
            <div class="Variables-ContentItemText">Модное матовое окрашенное стекло</div>
          </div>
          <img src="../assets/image/var-glass5.png" alt="Glass variable" class="Variables-ContentItemImg">
        </div>
        <div class="Variables-ContentItem">
          <img src="../assets/image/var-glass6.png" alt="Glass variable" class="Variables-ContentItemImg">
          <div class="Variables-ContentItemInfo">
            <div class="Variables-ContentItemTitle">С окрашенным стеклом Лакобель</div>
            <div class="Variables-ContentItemText">Белое, бежевое, капучино, черное.- на ваш выбор!</div>
          </div>
        </div>
      </div>
      <!--      </div>-->
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
  padding: 89px 0;
  background-image: url(~@/assets/image/variables-bg.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &-Title {
    width: 545px;
    margin: 0 auto 20px;
    text-align: center;
  }

  &-SubTitle {
    width: 545px;
    margin: 0 auto 74px;
    text-align: center;
  }

  &-Content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 70px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-Content--center {
    justify-content: space-between;
  }

  &-ContentItem {
    display: flex;
    align-items: center;
  }

  &-ContentItemInfo {
    max-width: 297px;
    width: 100%;
    //padding: 0 30px 0 47px;
  }

  &-ContentItemTitle {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 26px;
    line-height: 1.15em;
    letter-spacing: .032em;
    color: var(--color-text-main2);
  }

  &-ContentItemText {
    font-size: 18px;
    line-height: 1.22em;
    color: var(--color-text-main2);
  }
}
</style>