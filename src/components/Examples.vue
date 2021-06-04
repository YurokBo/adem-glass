<template>
<section class="Examples">
  <div class="Container">
    <div class="Decor">
      <span class="Decor-Line Left"></span>
      <div class="Decor-Text">
        Примеры стекла и зеркал
      </div>
      <span class="Decor-Line Right"></span>
    </div>
    <h2 class="Title Projects-Title">
      Примеры стекла и зеркал
    </h2>
    <div class="Examples-Btns">

    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Examples",
  data() {
    return {
      buttons: [
        {name: "Современный рисунок", type: "all", isActive: true},
        {name: "Рифленое стекло", type: "user", isActive: false},
        {name: "Окрашенное стекло, глянец", type: "keyword", isActive: false},
        {name: "Цветное зеркало", type: "keyword", isActive: false},
        {name: "Природный рисунок", type: "keyword", isActive: false},
        {name: "Тонированое стекло", type: "keyword", isActive: false},
        {name: "Окрашенное стекло, матовое", type: "keyword", isActive: false},
        {name: "Стекло имитация бетона и мрамора", type: "keyword", isActive: false},
        {name: "Состаренное стекло копия", type: "keyword", isActive: false},
      ],
    }
  }
}
</script>

<style scoped lang="scss">

</style>