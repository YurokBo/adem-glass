<template>
  <section class="Projects">
<!--    <div class="Container">-->
      <div class="Decor">
        <span class="Decor-Line Left"></span>
        <div class="Decor-Text">
          Участие в проекте
        </div>
        <span class="Decor-Line Right"></span>
      </div>
      <h2 class="Title Projects-Title">
        Наши проекты на tv
      </h2>
      <ProjectSlider/>
<!--    </div>-->
  </section>
</template>

<script>

import ProjectSlider from "@/components/ProjectSlider";
export default {
  name: "Projects",
  components: {
    ProjectSlider
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.Projects {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 35px 0 153px;
  position: relative;

  @media (min-width: $screen-xl) {
    max-width: 1320px;
  }

  @media (min-width: $screen-xxxl) {
    max-width: 1920px;
  }

  .Decor {
    left: -56.2%;

    @media (min-width: $screen-xxxl) {
      left: -38.65%;
    }
  }

  &-Title {
    margin-bottom: 30px;
    text-align: center;
    color: var(--color-text-dark);
    @media (min-width: $screen-m) {
      margin-bottom: 100px;
    }
  }
}
</style>