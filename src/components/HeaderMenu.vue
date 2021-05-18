<template>
  <div class="HeaderMenu">
      <div class="HeaderMenu-Wrapper">
        <Logo/>
        <div class="HeaderMenu-Contacts">
          <a href="tel:+74951617967" class="HeaderMenu-Contact Phone">+7 (495) 161-79-67</a>
          <div class="HeaderMenu-Contact Metro">ст.м. Марьино</div>
          <a href="mailto:welcome@ademglass.ru" class="HeaderMenu-Contact Email">welcome@ademglass.ru</a>
          <div class="HeaderMenu-Contact Address">ул. Иловайская, 10А</div>
        </div>
      </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  name: "HeaderMenu",
  components: {Logo}
}
</script>

<style scoped lang="scss">
.HeaderMenu {
  padding: 40px 0;

  &-Wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-Contacts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 61px;
  }

  &-Contact {
    position: relative;
    padding-left: 43px;
    font-size: 18px;
    line-height: 1.35em;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  
  .Phone {

    &:before {
      width: 23px;
      height: 23px;
      background-image: url(~@/assets/image/phone-icon.png);
    }
  }
  .Metro{

    &:before {
      width: 27px;
      height: 20px;
      background-image: url(~@/assets/image/metro-icon.png);
    }
  }
  .Email{

    &:before {
      width: 24px;
      height: 17px;
      background-image: url(~@/assets/image/mail-icon.svg);
    }
  }
  .Address{

    &:before {
      width: 18px;
      height: 25px;
      left: 5px;
      background-image: url(~@/assets/image/map-icon.svg);
    }
  }
}
</style>