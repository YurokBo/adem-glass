<template>
  <div class="HeaderMenu">
      <div class="HeaderMenu-Wrapper">
        <Logo/>
        <ContactsMenu />
      </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import ContactsMenu from "@/components/ContactsMenu";

export default {
  name: "HeaderMenu",
  components: {ContactsMenu, Logo}
}
</script>

<style scoped lang="scss">
.HeaderMenu {
  padding: 40px 0;
  margin-bottom: 30px;

  &-Wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: $screen-xl) {
      flex-direction: row;
    }
  }
}
</style>