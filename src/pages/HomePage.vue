<template>
<div>
  <Header />
  <Variables />
  <Form />
  <About />
<Projects />
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
import Projects from "@/components/Projects";

export default {
  name: "HomePage",
  components: {
    Projects,

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