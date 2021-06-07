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
                 class="Examples-Input"
                 type="radio"
                 v-model="selectedCategory" :value="button.type"
          >
          <label class="Examples-Label"
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
        {name: "Состаренное стекло копия", type: "old", isActive: false},
        {name: "Стекло имитация бетона и мрамора", type: "imitation", isActive: false},
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

.Examples {
  &-Btns {
    display: grid;
    grid-template: repeat(2, 1fr)/repeat(5,1fr);
    justify-self: center;
    align-self: center;
    align-items: center;
    white-space: nowrap;
  }
  &-Btn {

    @media (min-width: $screen-l) {
      border: 3px solid var(--color-text-light);

      &:nth-child(2) {
        border-left: none;
        border-right: none;
      }
    }
  }

  &-Label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 326px;
    padding: 12px;
    cursor: pointer;
    font-family: 'Lexend', sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.69em;
    text-transform: uppercase;
    color: var(--color-text-light);
    transition: .3s;

    &:hover,
    &:focus {
      background-color: var(--color-text-light);
      color: var(--color-text-main3);
    }
  }
  &-Input {
    display: none;
    position: absolute;
    visibility: hidden;
    z-index: -9999;
    left:-9999;
    right: -9999;
  }
}

</style>