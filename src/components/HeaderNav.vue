<template>
  <nav class="HeaderNav">
    <div class="Container">
      <div class="HeaderNav-Wrapper">
        <Logo />
        <div class="HeaderNav-Contacts">
          <a href="tel:+74951617967" class="HeaderNav-Contact Phone">+7 (495) 161-79-67</a>
          <div class="HeaderNav-Contact Metro">ст.м. Марьино</div>
          <a href="mailto:welcome@ademglass.ru" class="HeaderNav-Contact Email">welcome@ademglass.ru</a>
          <div class="HeaderNav-Contact Address">ул. Иловайская, 10А</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  name: "HeaderNav",
  components: {Logo}
}
</script>

<style scoped lang="scss">

</style>