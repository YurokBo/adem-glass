<template>
  <a href="/" class="Logo">
    <div class="Logo-Title">ADEM GLASS</div>
    <div class="Logo-Text">
      <div :class="coloredLogo">Изготовление дверей</div>
      <div :class="coloredLogo">купе на заказ</div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Logo",
  props: {
    coloredLogo: {
      type: String,
      required: false,
      default: ""
    }
  }
}
</script>

<style lang="scss">
.Logo {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-family: 'Museo Sans Cyrl', sans-serif;
  font-weight: 300;

  @media (min-width: $screen-xl) {
    margin-bottom: 0;
  }

  &-Title {
    margin-right: 8px;
    font-size: 18px;
    line-height: 1.35em;
    letter-spacing: .022em;
    background: -webkit-linear-gradient(-90deg, rgba(253,227,176,1) 0%, rgba(197,142,70,1) 65%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: $screen-m) {
      margin-right: 18px;
      font-size: 48px;
    }
  }

  &-Text {
    position: relative;
    padding-left: 9px;
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 10px;
    line-height: 1.2em;
    letter-spacing: .022em;
    color: var(--color-text-main);

      @media (min-width: $screen-m) {
        padding-left: 20px;
        font-size: 16px;
      }

      @media (min-width: $screen-xl) {
        flex-direction: column;
        align-items: start;
      }

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 2px;
      height: 24px;
      top: 50%;
      left: 0;
      transform: translate(-50%,-50%);
      background-color: var(--color-bg-logo);
      //box-shadow: 0px 0px 1px var(--color-bg-logo), 0 0 25px var(--color-bg-logo), 0 0 4px var(--color-bg-logo);
    }
    @media (min-width: $screen-m) {
      &:before {
        height: 36px;
      }
    }
  }

  &-Text--colored {
    color: var(--color-text-ghost);
  }
}
</style>
