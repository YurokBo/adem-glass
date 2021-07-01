<template>
<section class="Combined">
  <div class="Container">
    <div class="Decor">
      <span class="Decor-Line Left"></span>
      <div class="Decor-Text">
        Комбинированные двери
      </div>
      <span class="Decor-Line Right"></span>
    </div>
    <h2 class="Title Combined-Title">
      Выберите вариант<br/>  комбинирования дверей купе
    </h2>
    <div class="Combined-Content">

    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Combined"
}
</script>

<style scoped lang="scss">
.Combined {
  padding: 70px 0;
  background-color: var(--color-bg-faq);

  @media (min-width: $screen-l) {
    padding: 94px 0;
  }

  &-Title {
    margin-bottom: 45px;
    text-align: center;
    color: var(--color-text-faq);

    @media (min-width: $screen-l) {
      margin-bottom: 58px;
    }
  }


}
</style>
