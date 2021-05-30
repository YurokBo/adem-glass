<template>
  <section class="Faq">
    <div class="Container">
      <div class="Decor">
        <span class="Decor-Line Left"></span>
        <div class="Decor-Text">
          Ответы на вопросы
        </div>
        <span class="Decor-Line Right"></span>
      </div>
      <h2 class="Title Faq-Title">
        отвечаем на популярные вопросы
      </h2>
      <div class="Faq-Quiz">
        <Accordion v-for="(item, index) in quizItem"
                   :key="index">
          <template #title
          >{{ item.question }}
          </template
          >
          <template #content>
            {{ item.answer }}
          </template>
        </Accordion>
      </div>
      <form class="Faq-Form">
        <div class="Faq-FormTop">
          <div class="Faq-FormInfo">
            <h3 class="Title--h3 Faq-FormTitle">
              не нашли ответ на вопрос?
            </h3>
            <div class="Faq-FormSubtitle">
              Заполните форму, чтобы наш менеджен проконсультировал вас
            </div>
          </div>
          <div class="Faq-FormPerson">
            <img src="../assets/image/manager.png" alt="manager" class="Faq-FormPersonImg">
            <div class="Faq-FormPersonInfo">
              <div class="Faq-FormPersonName">Елена Инкогнито</div>
              <div class="Faq-FormPersonPosition">Менеджер</div>
            </div>
          </div>
        </div>
        <div class="Faq-FormForm"></div>
        <div class="Faq-FormAgreement"></div>
      </form>
    </div>
  </section>
</template>

<script>
import Accordion from "@/components/Accordion";

export default {
  name: "Faq",
  components: {
    Accordion
  },
  data() {
    return {
      quizItem: [
        {
          question: "Что входит в стоимость?",
          answer: "В современном и классическом стилях в Москве - более 350 позиций в наличии В современном и классическом стилях в Москве - более 350 позиций в наличии В современном и классическом стилях в Москве - более 350 позиций в наличии"
        },
        {
          question: "Возможен ли самовывоз?",
          answer: "В современном и классическом стилях в Москве - более 350 позиций в наличии"
        },
        {
          question: "Срок изготовления?",
          answer: "В современном и классическом стилях в Москве - более 350 позиций в наличии"
        },
        {
          question: "Что входит в стоимость?",
          answer: "В современном и классическом стилях в Москве - более 350 позиций в наличии"
        },
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.Faq {
  padding: 95px 0 90px;
  background-color: var(--color-bg-faq);

  &-Title {
    margin-bottom: 75px;
    text-align: center;
    color: var(--color-text-faq);
  }

  &-Quiz {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px 32px;
    margin-bottom: 90px;
  }

  &-Form {
    width: 1020px;
    margin: 0 auto;
    padding: 41px 72px 59px 78px;
    border-radius: 8px;
    background-color: var(--color-text-main3);
  }

  &-FormTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
