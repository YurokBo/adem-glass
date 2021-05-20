<template>
  <section class="Form">
    <div class="Container">
      <div class="Decor">
        <span class="Decor-Line Left"></span>
        <div class="Decor-Text">
          Форма заявки
        </div>
        <span class="Decor-Line Right"></span>
      </div>
      <h2 class="Title Form-Title">
        Поможем подобрать двери купе
      </h2>
      <div class="Subtitle Form-Subtitle">
        Оставьте заявку и наш манеждер свяжемся с вами в течении 30 минут
      </div>
      <div class="Form-Content">
        <form class="Form-Form" @submit.prevent="onSubmit()" novalidate>
          <h3 class="Title Form-FormTitle">
            Оставьте заявку
          </h3>
          <div class="Form-Field">
            <input type="text"
                   class="Form-Input Input"
                   name="size"
                   placeholder="Размер проема (высота*ширина)"
                   v-model.trim="form.email"
                   :class="$v.form.email.$error ? 'is-invalid' : ''"
            >
            <span v-if="$v.form.email.$dirty && !$v.form.email.required"
                  class="invalid-feedback">Required field!</span>
            <span v-if="$v.form.email.$dirty && !$v.form.email.email"
                  class="invalid-feedback">Incorrect email</span>
          </div>
          <div class="Form-Field">
            <input type="text"
                   class="Form-Input Input"
                   name="doors"
                   placeholder="Количество дверей"
                   v-model.trim="form.email"
                   :class="$v.form.email.$error ? 'is-invalid' : ''"
            >
            <span v-if="$v.form.email.$dirty && !$v.form.email.required"
                  class="invalid-feedback">Required field!</span>
            <span v-if="$v.form.email.$dirty && !$v.form.email.email"
                  class="invalid-feedback">Incorrect email</span>
          </div>
          <div class="Form-Field">
            <input type="text"
                   class="Form-TopInput Input"
                   name="name"
                   placeholder="Ваше имя"
                   v-model.trim="form.name"
                   :class="$v.form.name.$error ? 'is-invalid' : ''"
            >
            <span v-if="$v.form.name.$dirty && !$v.form.name.required"
                  class="invalid-feedback">Required field!</span>

          </div>
          <div class="Form-Field">
            <input type="text"
                   class="Form-TopInput Input"
                   name="phone"
                   placeholder="Ваш телефон"
                   v-model.trim="form.phone"
                   :class="$v.form.phone.$error ? 'is-invalid' : ''"
            >
            <span v-if="$v.form.phone.$dirty && !$v.form.phone.required"
                  class="invalid-feedback">Required field!</span>
          </div>
          <button type="submit" class="Btn Form-Btn">send</button>
        </form>
        <div class="Form-ImgBox">
          <img src="../assets/image/woman.png" alt="woman" class="Form-Img">
          <div class="Form-ImgDescription">
            <div class="Form-ImgTitle"><span>Елена Инкогнито</span></div>
            <div class="Form-ImgLabel">Менеджер</div>
            <img src="../assets/image/arc.svg" alt="arc" class="Arc">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {email, required} from "vuelidate/lib/validators";
import axios from 'axios';
//import Modal from "@/components/Modal";

export default {
  mixins: [validationMixin],
  name: "Form",
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        message: '',
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
      email: {
        required,
        email
      },
      message: {
        required,
      },
    }
  },
  methods: {
    /*showAuthDialog() {
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
    },*/
    onSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        const params = new URLSearchParams();
        params.append('name', this.form.name);
        params.append('phone', this.form.phone);
        params.append('email', this.form.email);
        params.append('message', this.form.message);

        axios.post(
            "/mail.php",
            params,
            {
              headers: {
                'content-type': 'application/x-www-form-urlencoded'
              }
            }
        ).then(() => {

        })
        this.showAuthDialog()
        this.form.name = '',
            this.form.phone = '',
            this.form.email = '',
            this.form.message = ''
        this.$nextTick(() => {
          this.$v.$reset()
        })
      }
    },
  }
}
</script>

<style scoped lang="scss">
.Form {
  padding: 90px 0 0;
  background-image: url(~@/assets/image/form-bg.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &-Title {
    margin-bottom: 25px;
  }

  &-Subtitle {
    margin-bottom: 30px;
  }

  &-Content {
    display: flex;
  }

  &-Form {
    width: 494px;
    padding: 60px 50px;
    border-radius: 8px;
    background-color: var(--color-text-main3);
  }

  &-FormTitle {
    margin-bottom: 20px;
    font-size: 38px;
    line-height: 1.35em;
    letter-spacing: .015em;
    color: var(--color-text-ghost);
  }

  &-ImgBox {
    position: relative;
  }

  &-ImgDescription {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  &-ImgTitle {
    position: relative;
    width: 232px;
    height: 61px;
    margin-bottom: 14px;
    font-size: 18px;
    letter-spacing: .035em;
    text-align: center;
    color: var(--color-text-btn);
    white-space: nowrap;
    //padding: 22px 43px 25px;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 4px;
      background-image: var(--color-bg-label);
      transform: skew(-20deg);
      z-index: 0;
    }

    span {
      position: absolute;
      top: 48%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
  }

  &-ImgLabel {
    margin-bottom: 14px;
    font-size: 16px;
    line-height: 1.35em;
    letter-spacing: .035em;
    text-align: center;
    color: var(--color-text-main2);
  }

  .Arc {
    position: absolute;
    left: 50px;
  }
}
</style>
