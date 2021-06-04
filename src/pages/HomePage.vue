<template>
  <div>
    <Header/>
    <Variables/>
    <Form/>
    <Examples />
    <About/>
    <Projects/>
    <Faq/>
    <Footer/>
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
import Examples from "@/components/Examples";

export default {
  name: "HomePage",
  components: {
    Examples,
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