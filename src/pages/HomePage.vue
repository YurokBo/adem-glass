<template>
  <div>
    <Header/>
    <Quiz />
    <Variables/>
    <Price />
    <Form/>
    <Examples />
    <Combined />
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
import Price from "@/components/Price";
import Quiz from "@/components/Quiz";
import Combined from "@/components/Combined";

export default {
  name: "HomePage",
  components: {
    Combined,
    Quiz,
    Price,
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