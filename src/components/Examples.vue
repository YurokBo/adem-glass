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
        <div class="Examples-Btn"
             v-for="(button) in buttons"
             :key="button.id"
        >
          <input :id="button.type"
                 class="CasesTabs-Input"
                 type="radio"
                 v-model="selectedCategory" :value="button.type"
          >
          <label class="CasesTabs-Label"
                 :for="button.type">
            {{ button.name }}
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Examples",
  data() {
    return {
      selectedCategory: "gloss",
      buttons: [
        {name: "Современный рисунок", type: "modern", isActive: false},
        {name: "Рифленое стекло", type: "corrugated", isActive: false},
        {name: "Окрашенное стекло, глянец", type: "gloss", isActive: true},
        {name: "Цветное зеркало", type: "colored", isActive: false},
        {name: "Природный рисунок", type: "natural", isActive: false},
        {name: "Тонированое стекло", type: "toned", isActive: false},
        {name: "Окрашенное стекло, матовое", type: "matt", isActive: false},
        {name: "Стекло имитация бетона и мрамора", type: "imitation", isActive: false},
        {name: "Состаренное стекло копия", type: "old", isActive: false},
      ],
      sliderInfo: [
        {id: "1", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "2", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "3", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "4", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "5", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "6", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "7", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "8", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "9", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "10", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
        {id: "11", img: "example-1.png", title: "Лакобель 9003", type: "gloss"},
      ]
    }
  },
  computed: {
    filteredPeople: function () {
      let category = this.selectedCategory;

      if (category === "gloss") {
        return this.cardInfo;
      } else {
        return this.cardInfo.filter(function (info) {
          return info.type === category;
        });
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>