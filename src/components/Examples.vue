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
      <h2 class="Title Examples-Title">
        Примеры стекла и зеркал
      </h2>
      <div class="Examples-Btns">
        <div class="Examples-BtnRow">
          <div class="Examples-Btn"
               v-for="(button) in buttons.top"
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
        <div class="Examples-BtnRow">
          <div class="Examples-Btn"
               v-for="(button) in buttons.bottom"
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
    </div>
  </section>
</template>

<script>
export default {
  name: "Examples",
  data() {
    return {
      selectedCategory: "gloss",
      buttons: {
        top: [
          {name: "Современный рисунок", type: "modern", isActive: false},
          {name: "Рифленое стекло", type: "corrugated", isActive: false},
          {name: "Окрашенное стекло, глянец", type: "gloss", isActive: true},
          {name: "Цветное зеркало", type: "colored", isActive: false},
          {name: "Природный рисунок", type: "natural", isActive: false},
        ],
        bottom: [
          {name: "Тонированое стекло", type: "toned", isActive: false},
          {name: "Окрашенное стекло, матовое", type: "matt", isActive: false},
          {name: "Состаренное стекло копия", type: "old", isActive: false},
          {name: "Стекло имитация бетона и мрамора", type: "imitation", isActive: false},
        ]
      },
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
  padding: 85px 0;

  .Decor-Text {
    color: var(--color-text-btn);
  }

  &-Title {
    margin-bottom: 52px;
    text-align: center;
    color: var(--color-text-dark);
  }

  &-Btns {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-BtnRow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    margin-bottom: 60px;

    &:last-child {
      margin-bottom: 0;
    }

    @media (min-width: $screen-xl) {
      flex-direction: row;
    }
  }

  &-Btn {
    text-align: center;

    @media (min-width: $screen-l) {
      //border: 3px solid var(--color-text-light);

      &:nth-child(2) {
        //border-left: none;
        //border-right: none;
      }
    }
  }


  &-Label {
    padding: 21px 29px;
    cursor: pointer;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44em;
    letter-spacing: .022em;
    color: var(--color-text-main4);
    transition: .3s;
    position: relative;

    &:hover,
    &:focus {
      &:after {
        background-image: var(--color-bg-input-checked);
        border: 1px solid var(--color-bg-input-checked);
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 1px solid var(--color-border-color);
      border-radius: 4px;
      background-image: var(--color-bg-label2);
      z-index: -1;
      transform: skew(-25deg);
    }
  }

  &-Input {
    display: none;
    position: absolute;
    visibility: hidden;
    z-index: -9999;
    left: -9999;
    right: -9999;
  }

  input:checked + label:after {
    background-image: var(--color-bg-input-checked);
    border: 1px solid var(--color-bg-input-checked);
  }
}

</style>