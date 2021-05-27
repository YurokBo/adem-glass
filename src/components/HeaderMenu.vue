<template>
  <div class="HeaderMenu">
      <div class="HeaderMenu-Wrapper">
        <a href="/" class="Logo">
          <div class="Logo-Title">ADEM GLASS</div>
          <div class="Logo-Text">
            <div>Изготовление дверей</div>
            <div>купе на заказ</div>
          </div>
        </a>
        <div
            class="ContactsMenu"
        >
          <a href="tel:+74951617967" class="ContactsMenu-Contact Phone">+7 (495) 161-79-67</a>
          <div class="ContactsMenu-Contact Metro">ст.м. Марьино</div>
          <a href="mailto:welcome@ademglass.ru" class="ContactsMenu-Contact Email">welcome@ademglass.ru</a>
          <div class="ContactsMenu-Contact Address">ул. Иловайская, 10А</div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "HeaderMenu",
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.HeaderMenu {
  padding: 40px 0;
  margin-bottom: 30px;

  &-Contact--colored {
    color: var(--color-text-main3);
  }
  &-Logo--colored {
    color: var(--color-text-main3);
  }

  &-Wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: $screen-xl) {
      flex-direction: row;
    }
  }
}
</style>