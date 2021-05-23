<template>
  <div
      class="ContactsMenu"
      :class="colored"
  >
    <a href="tel:+74951617967" class="ContactsMenu-Contact Phone">+7 (495) 161-79-67</a>
    <div class="ContactsMenu-Contact Metro">ст.м. Марьино</div>
    <a href="mailto:welcome@ademglass.ru" class="ContactsMenu-Contact Email">welcome@ademglass.ru</a>
    <div class="ContactsMenu-Contact Address">ул. Иловайская, 10А</div>
  </div>
</template>

<script>
export default {
  name: "ContactsMenu",
  props: {
    colored: {
      type: String,
      required: false,
      default: ""
    }
  }
}
</script>

<style scoped lang="scss">

.ContactsMenu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7px 34px;

  @media (min-width: $screen-m) {
    grid-gap: 10px 61px;
  }

  &-Contact {
    position: relative;
    padding-left: 21px;
    font-size: 10px;

    @media (min-width: $screen-m) {
      padding-left: 43px;
      font-size: 18px;
    }

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

  &-Contact--colored {
    color: var(--color-text-ghost);
  }

  .Phone {

    &:before {
      width: 11px;
      height: 11px;
      background-image: url(~@/assets/image/phone-icon.png);
    }

    @media (min-width: $screen-m) {
      &:before {
        width: 23px;
        height: 23px;
      }
    }
  }

  .Metro {

    &:before {
      width: 14px;
      height: 10px;
      background-image: url(~@/assets/image/metro-icon.png);
    }

    @media (min-width: $screen-m) {
      &:before {
        width: 27px;
        height: 20px;
      }
    }
  }

  .Email {

    &:before {
      width: 12px;
      height: 9px;
      background-image: url(~@/assets/image/mail-icon.svg);
    }
    @media (min-width: $screen-m) {
      &:before {
        width: 24px;
        height: 17px;
      }
    }
  }

  .Address {
    &:before {
      width: 9px;
      height: 13px;
      left: 3px;
      background-image: url(~@/assets/image/map-icon.svg);
    }
    @media (min-width: $screen-m) {
      &:before {
        width: 18px;
        height: 25px;
        left: 5px;
      }
    }
  }
}


</style>