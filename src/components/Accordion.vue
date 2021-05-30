<template>
  <div class="Accordion">
    <div class="Accordion-Wrapper">
      <div
          class="Accordion-Title"

          @click="isOpen = !isOpen"
      >
        <template v-if="title">
          {{ title }}
        </template>
        <slot name="title" />
        <div class="Accordion-Img">
          <span class="Circle"></span>
          <span class="Triangle" :class="{ 'Triangle--active': isOpen }"></span>
        </div>
      </div>
      <div v-if="isOpen" class="Accordion-Content">
        <template v-if="content" v-html="content"></template>
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    title: {
      type: [String, Boolean],
      required: false,
      default: false,
    },
    content: {
      type: [String, Boolean],
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    // onClickOutside(e) {
    //   if (!e.target.closest('.Accordion')) this.isOpen = false;
    // },
  },
};
</script>

<style lang="scss">
.Accordion {
  padding: 7px 11px;
  border-radius: 8px;
  background-color: var(--color-text-main3);
  position: relative;

  &-Wrapper {
    padding: 18px 25px 22px 35px;
    border: 2px solid var(--color-bg-faq-border);
    border-radius: 8px;
  }

  &-Img {
    cursor: pointer;
    position: relative;

    &--active + .Triangle {
      transform: rotateZ(90deg);
    }
  }

  &-Title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.417;
    letter-spacing: .032em;
    color: var(--color-text-faq-light);
  }

  &-Content {
    position: absolute;
    z-index: 3;
    padding: 18px 25px 22px 35px;
    background-color: var(--color-text-main3);
    top: 108px;
    right: 0;
    left: 0;
    border-radius: 8px;
    font-size: 20px;
    line-height: 1.35;
    color: var(--color-text-faq-light);
    transition: .3s;
  }

  .Circle {
    display: block;
    width: 52px;
    height: 52px;
    background-image: var(--color-bg-btn-before);
    border-radius: 50%;
  }
  .Triangle {
    position: absolute;
    display: block;
    z-index: 2;
    width: 0;
    height: 0;
    top: 50%;
    left: 51%;
    transform: translate(-50%, -50%) rotateZ(0);
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    border-left: 12px solid var(--color-text-main3);
    transition: .3s;

    &--active {
      top: 54%;

      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
}
</style>
