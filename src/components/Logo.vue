<template>
  <a href="/" class="Logo">
    <div class="Logo-Title">ADEM GLASS</div>
    <div class="Logo-Text">
      <span>Изготовление дверей</span>
      <span>купе на заказ</span>
    </div>
  </a>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style lang="scss">
.Logo {
  display: flex;
  align-items: center;
  font-family: 'Museo Sans Cyrl', sans-serif;
  font-weight: 300;

  &-Title {
    margin-right: 18px;
    font-size: 48px;
    line-height: 1.35em;
    letter-spacing: .022em;
    background: -webkit-linear-gradient(-90deg, rgba(253,227,176,1) 0%, rgba(197,142,70,1) 65%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &-Text {
    position: relative;
    padding-left: 20px;
    span {
      display: block;
      font-size: 16px;
      line-height: 1.2em;
      letter-spacing: .022em;
      color: var(--color-text-main);
    }
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 2px;
      height: 36px;
      top: 0;
      left: 0;
      transform: translate(-50%,0);
      background-color: var(--color-bg-logo);
      //box-shadow: 0px 0px 1px var(--color-bg-logo), 0 0 25px var(--color-bg-logo), 0 0 4px var(--color-bg-logo);
    }
  }
}
</style>
