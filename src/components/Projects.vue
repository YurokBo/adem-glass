<template>
  <section class="Projects">
    <div class="Container">
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
    </div>
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
  padding: 35px 0 108px;

  .Container {
    @media (min-width: $screen-xxxl) {
      //max-width: 1480px;
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