<template>
  <div class="Header">
    <div class="Container">
      <HeaderNav />
      <h1 class="Title Header-Title">
        Двери для шкафа-купе и гардеробной от 8 000 до 80 000 руб.
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
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";

export default {
  name: "Header",
  components: {
    HeaderNav
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
  background-image: url(~@/assets/image/header-fone.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>