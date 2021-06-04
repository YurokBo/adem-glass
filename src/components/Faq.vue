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
      <form class="Faq-Form" @submit.prevent="onSubmit()" novalidate>
        <div class="Faq-FormTop">
          <div class="Faq-FormInfo">
            <h3 class="Title--h3 Faq-FormTitle">
              не нашли ответ на вопрос?
            </h3>
            <div class="Faq-FormSubtitle">
              Заполните форму, чтобы наш менеджел проконсультировал вас
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
        <div class="Faq-FormForm">
          <div class="Faq-FormField">
            <input type="text"
                   class="Faq-FormInput Input"
                   name="name"
                   placeholder="Ваше имя"
                   v-model.trim="form.name"
                   :class="$v.form.name.$error ? 'is-invalid' : ''"
            >
            <span v-if="$v.form.name.$dirty && !$v.form.name.required"
                  class="invalid-feedback">Обязательное поле!</span>
          </div>
          <div class="Faq-FormField">
            <input type="text"
                   class="Faq-FormInput Input"
                   name="phone"
                   placeholder="Ваш телефон"
                   v-model.trim="form.phone"
                   :class="$v.form.phone.$error ? 'is-invalid' : ''"
            >
            <span v-if="$v.form.phone.$dirty && !$v.form.phone.required"
                  class="invalid-feedback">Обязательное поле!</span>
          </div>
          <button type="submit" class="Btn Faq-FormBtn">получить консультацию</button>
        </div>
        <div class="Faq-FormAgreement"></div>
      </form>
    </div>
  </section>
</template>

<script>
import Accordion from "@/components/Accordion";
import {validationMixin} from 'vuelidate'
import {required} from "vuelidate/lib/validators";
import axios from 'axios';
import Modal from "@/components/Modal";

export default {
  mixins: [validationMixin],
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
      ],
      form: {
        size: '',
        doors: '',
        phone: '',
        email: '',
      },
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      phone: {
        required,
      },
    }
  },
  methods: {
    showAuthDialog() {
      this.$modal.show(
          Modal,
          {},
          {
            width: 428,
            height: 'auto',
            adaptive: true,
            scrollable: true,
            style: "{ backgroundColor: 'rgba(1,7,11,.7)'}",
            clickToClose: false,
          },
          {},
      );
    },
    onSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        const params = new URLSearchParams();
        params.append('name', this.form.name);
        params.append('phone', this.form.phone);

        axios.post(
            "/mail.php",
            params,
            {
              headers: {
                'content-type': 'application/x-www-form-urlencoded'
              }
            }
        ).then(() => {})
        this.showAuthDialog()
        this.form.name = ''
        this.form.phone = ''
        this.$nextTick(() => {
          this.$v.$reset()
        })
      }
    },
  }
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
    grid-template-columns: 1fr;
    grid-gap: 9px 0;
    margin-bottom: 90px;
    @media (min-width: $screen-xl) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px 32px;
    }
  }

  &-Form {
    width: 100%;
    margin: 0 auto;
    padding: 35px 38px 45px;
    border-radius: 8px;
    background-color: var(--color-text-main3);

    @media (min-width: $screen-m) {
      padding: 41px 72px 59px 78px;
      position: relative;
      z-index: 1;

      &:after {
        content: '';
        position: absolute;
        display: block;
        width: 96%;
        height: 100%;
        top: 15px;
        left: 50%;
        transform: translate(-50%, 0);
        border-radius: 8px;
        background-color: rgba(255, 255, 255, .4);
        z-index: -1;
      }

    }

    @media (min-width: 1170px) {
      width: 1080px;
    }
  }

  &-FormTop {
    margin-bottom: 22px;
    @media (min-width: $screen-m) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 35px;
    }
  }

  &-FormTitle {
    margin-bottom: 8px;
    padding: 0 23px;
    text-align: center;
    @media (min-width: $screen-s) {
      padding: 0;
    }
    @media (min-width: $screen-l) {
      text-align: left;
    }
  }

  &-FormSubtitle {
    font-size: 14px;
    line-height: 1.35em;
    letter-spacing: .035em;
    color: var(--color-text-faq-light2);
    text-align: center;

    @media (min-width: $screen-m) {
      font-size: 20px;
    }
    @media (min-width: $screen-l) {
      text-align: left;
    }
  }

  &-FormPerson {
    display: none;
    @media (min-width: 1170px) {
      display: flex;
      align-items: center;
      line-height: 1.35;
      letter-spacing: .035em;
    }
  }

  &-FormPersonImg {
    margin-right: 16px;
  }

  &-FormPersonName {
    font-weight: 400;
    font-size: 16px;
    color: var(--color-text-btn);
  }

  &-FormPersonPosition {
    font-size: 13px;
    color: var(--color-text-main2);
  }

  &-FormForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1170px) {
      flex-direction: row;
    }
  }

  &-FormField {
    margin-bottom: 12px;
    max-width: 100%;
    width: 100%;
    position: relative;

    @media (min-width: 1170px) {
      max-width: 275px;
      margin-right: 15px;
      margin-bottom: 0;
    }
  }

  &-FormInput {
    width: 100%;
    padding: 19px 20px 19px 32px;
    border: 1px solid var(--color-bg-input);
    border-radius: 8px;
    outline: none;
    font-size: 15px;
    letter-spacing: .045em;
    color: var(--color-text-btn);
    background-color: var(--color-bg-input);

    &::placeholder {
      color: var(--color-text-placeholder2);
    }

    &:focus {
      border: 1px solid var(--color-text-btn);
    }

    @media (min-width: $screen-m) {
      padding: 28px 32px;
    }
  }

  &-FormBtn {
    margin-top: 32px;
    padding: 24px 32px 27px 28px;
    @media (min-width: 1170px) {
      margin-top: 0;
    }
  }

  .invalid-feedback {
    position: absolute;
    top: -15px;
    right: 0;
    font-size: 10px;
    color: var(--color-text-error);
  }

  .Decor {
    &-Text {
      color: var(--color-text-btn);
    }
  }
}
</style>
