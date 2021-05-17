<template>
  <nav class="MainNav">
    <div class="Container">
      <div class="MainNav-Wrapper">
        <Logo />
        <div class="MainNav-Contacts">
          <a href="tel:+74951617967" class="MainNav-Contact Phone">+7 (495) 161-79-67</a>
          <div class="MainNav-Contact Metro">ст.м. Марьино</div>
          <a href="mailto:welcome@ademglass.ru" class="MainNav-Contact Email">welcome@ademglass.ru</a>
          <div class="MainNav-Contact Address">ул. Иловайская, 10А</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  name: "MainNav",
  components: {Logo}
}
</script>

<style scoped lang="scss">

</style>