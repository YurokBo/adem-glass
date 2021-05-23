<template>
  <footer class="Footer">
    <div class="Container">
      <div class="Footer-Inner">
        <Logo :coloredLogo="coloredLogo"/>
        <ContactsMenu :colored="colored"/>
      </div>
      <div class="Footer-Copy">
        © 2021 - ADEM GLASS
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "@/components/Logo";
import ContactsMenu from "@/components/ContactsMenu";

export default {
  name: "Footer",
  components: {ContactsMenu, Logo},
  data() {
    return {
      colored: "ContactsMenu-Contact--colored",
      coloredLogo: "Logo-Text--colored",
    }
  }
}
</script>

<style scoped lang="scss">

.Footer {
  padding: 62px 0 35px;
  background-color: var(--color-text-main);

  &-Inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  &-Copy {
    font-size: 18px;
    color: var(--color-text-ghost);
  }
}

</style>
