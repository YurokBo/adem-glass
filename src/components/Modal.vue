<template>
  <div name="modal" class="Modal">
    <div class="Modal-Inner">
      <div class="Modal-ImgBox">
        <img src="../assets/image/woman.png" alt="woman" class="Modal-Img">
        <div class="Modal-ImgDescription">
          <div class="Modal-ImgTitle"><span>Менеджер Елена</span></div>
          <img src="../assets/image/arc.svg" alt="arc" class="Arc">
        </div>
      </div>
      <div class="Modal-Content">
        <h2 class="Title Modal-Title">заявка принята!</h2>
        <p class="Modal-Text">
          Ваш персональный менеджер свяжется с Вами
          в течение 30 минут
        </p>
        <button type="button" class="Btn Modal-Close" @click="$emit('close')">Вернуться на главную</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal"
}
</script>

<style lang="scss">

.Modal {
  padding: 65px 40px 40px;
  border-radius: 12px;
  background-color: rgb(237, 234, 230);
  box-shadow: 0px 6px 9px 0px rgba(93, 84, 74, 0.28);
  position: relative;

  @media (min-width: 1200px) {
    padding: 165px 140px 140px 25px;
  }

  @media (min-width: 1300px) {
    padding: 232px 166px 208px 122px;
  }

  &-Inner {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    @media (min-width: 1120px) {
      flex-direction: row;
      text-align: left;
    }
  }

  &-Content {
    @media (min-width: 1120px) {
      max-width: 420px;
    }
  }

  &-Title {
    margin-bottom: 30px;
    color: var(--color-text-dark);
  }

  &-Text {
    margin-bottom: 46px;
    font-size: 18px;
    color: #847055;
  }

  &-Close {
    padding: 24px 55px 26px;
  }

  &-ImgBox {
    display: none;
    @media (min-width: 1120px) {
      display: block;
    }
  }

  &-Img {
    @media (min-width: 1120px) {
      transform: rotateY(-180deg);
      width: 380px;
      position: absolute;
      left: 82px;
      bottom: 0;
    }

    @media (min-width: 1300px) {
      width: 480px;
      left: 122px;
    }
  }

  &-ImgDescription {

    @media (min-width: 1120px) {
      position: absolute;
      top: 113px;
      left: 320px;
      z-index: 2;
    }

    @media (min-width: 1300px) {
      left: 420px;
    }
  }

  &-ImgTitle {
    position: relative;
    width: 232px;
    height: 61px;
    margin-bottom: 14px;
    font-size: 18px;
    letter-spacing: .035em;
    text-align: center;
    color: var(--color-text-btn);
    white-space: nowrap;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 4px;
      background-color: var(--color-text-main);
      transform: skew(-20deg);
      z-index: 0;
    }

    span {
      position: absolute;
      top: 48%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
  }

  .Arc {
    position: absolute;
    left: 50px;
  }
}
</style>