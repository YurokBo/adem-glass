<template>
  <footer class="Footer">
    <div class="Container">
      <div class="Footer-Inner">
        <a href="/" class="Logo">
          <div class="Logo-Title">ADEM GLASS</div>
          <div class="Logo-Text Footer-LogoText">
            <div>Изготовление дверей</div>
            <div>купе на заказ</div>
          </div>
        </a>
        <div class="ContactsMenu">
          <a href="tel:+74951617967" class="ContactsMenu-Contact Footer-ContactsMenuContact Phone">+7 (495) 161-79-67</a>
          <div class="ContactsMenu-Contact Footer-ContactsMenuContact Metro">ст.м. Марьино</div>
          <a href="mailto:welcome@ademglass.ru" class="ContactsMenu-Contact Footer-ContactsMenuContact Email">welcome@ademglass.ru</a>
          <div class="ContactsMenu-Contact Footer-ContactsMenuContact Address">ул. Иловайская, 10А</div>
        </div>
      </div>
      <div class="Footer-Copy">
        © 2021 - ADEM GLASS
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "Footer",
  components: {},
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">

.Footer {
  padding: 35px 0 18px;
  background-color: var(--color-bg-footer-mobile);

  @media (min-width: $screen-xl) {
    padding: 62px 0 35px;
    background-color: var(--color-text-main);
  }

  &-Inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    @media (min-width: $screen-xl) {
      flex-direction: row;
    }
  }

  &-LogoText {
    @media (min-width: $screen-xl) {
      color: var(--color-text-ghost);
    }
  }

  &-ContactsMenuContact {
    @media (min-width: $screen-xl) {
      color: var(--color-text-ghost);
    }
  }
  &-LogoText {
    @media (min-width: $screen-xl) {
      color: var(--color-text-ghost);
    }
  }

  &-Copy {
    margin-top: 25px;
    font-size: 10px;
    color: var(--color-text-main3);
    text-align: center;
    @media (min-width: $screen-xl) {
      font-size: 18px;
      margin-top: 0;
      text-align: start;
      color: var(--color-text-ghost);
    }
  }
}

</style>
