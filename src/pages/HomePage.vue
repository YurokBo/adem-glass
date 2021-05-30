<template>
<div>
  <Header />
  <Variables />
  <Form />
  <About />
  <Faq />
  <Footer />
</div>
</template>

<script>
import Header from "@/components/Header";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import Variables from "@/components/Variables";
import About from "@/components/About";
import Faq from "@/components/Faq";
export default {
  name: "HomePage",
  components: {
    Faq,
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