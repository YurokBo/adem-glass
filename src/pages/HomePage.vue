<template>
<div>
  <Header />
  <Variables />
  <Form />
  <About />
  <Footer />
</div>
</template>

<script>
import Header from "@/components/Header";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import Variables from "@/components/Variables";
import About from "@/components/About";
export default {
  name: "HomePage",
  components: {
    About,
    Variables,
    Form,
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>