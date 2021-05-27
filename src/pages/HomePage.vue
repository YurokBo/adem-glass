<template>
<div>
  <Header />
  <Variables />
  <Form />
  <Footer />
</div>
</template>

<script>
import Header from "@/components/Header";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import Variables from "@/components/Variables";
export default {
  name: "HomePage",
  components: {
    Variables,
    Form,
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>