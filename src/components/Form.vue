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
        <div class="Form-ContentInner">
          <form class="Form-Form" @submit.prevent="onSubmit()" novalidate>
            <h3 class="Title Form-FormTitle">
              Оставьте заявку
            </h3>
            <div class="Form-Field">
              <input type="text"
                     class="Form-Input Input"
                     name="size"
                     placeholder="Размер проема (высота*ширина)"
                     v-model.trim="form.size"
                     :class="$v.form.size.$error ? 'is-invalid' : ''"
              >
              <span v-if="$v.form.size.$dirty && !$v.form.size.required"
                    class="invalid-feedback">Обязательное поле!</span>
            </div>
            <div class="Form-Field">
              <input type="text"
                     class="Form-Input Input"
                     name="doors"
                     placeholder="Количество дверей"
                     v-model.trim="form.doors"
                     :class="$v.form.doors.$error ? 'is-invalid' : ''"
              >
              <span v-if="$v.form.doors.$dirty && !$v.form.doors.required"
                    class="invalid-feedback">Обязательное поле!</span>
            </div>
            <div class="Form-Field">
              <input type="text"
                     class="Form-Input Input"
                     name="name"
                     placeholder="Ваше имя"
                     v-model.trim="form.name"
                     :class="$v.form.name.$error ? 'is-invalid' : ''"
              >
              <span v-if="$v.form.name.$dirty && !$v.form.name.required"
                    class="invalid-feedback">Обязательное поле!</span>
            </div>
            <div class="Form-Field">
              <input type="text"
                     class="Form-Input Input"
                     name="phone"
                     placeholder="Ваш телефон"
                     v-model.trim="form.phone"
                     :class="$v.form.phone.$error ? 'is-invalid' : ''"
              >
              <span v-if="$v.form.phone.$dirty && !$v.form.phone.required"
                    class="invalid-feedback">Обязательное поле!</span>
            </div>
            <button type="submit" class="Btn Form-Btn">подобрать двери купе</button>
          </form>
          <a href="tel:+74995209636" class="Form-PhoneBox">
            <div class="Form-PhoneTitle">Или звоните:</div>
            <div class="Form-Phone">+7 (499) 520-96-36</div>
          </a>
        </div>

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
import {required} from "vuelidate/lib/validators";
import axios from 'axios';
import Modal from "@/components/Modal";
//import Modal from "@/components/Modal";

export default {
  mixins: [validationMixin],
  name: "Form",
  data() {
    return {
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
      size: {
        required,
      },
      doors: {
        required,
      },
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
        params.append('size', this.form.size);
        params.append('doors', this.form.doors);
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
        this.form.size = ''
        this.form.doors = ''
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
.Form {
  padding: 90px 0 80px;
  background-image: url(~@/assets/image/form-bg.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  .Decor {

    &-Text {
      color: var(--color-text-main3);
    }
    .Left {
      width: 35%;
    }

    .Right {
      width: 45%;
    }
  }

  &-Title {
    margin-bottom: 25px;
  }

  &-Subtitle {
    margin-bottom: 30px;
    font-size: 22px;
    color: var(--color-text-main2);
  }

  &-Content {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  &-ContentInner {
    width: 50%;
  }

  &-Form {
    width: 494px;
    margin: 0 auto 15px;
    padding: 60px 70px;
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

  &-Field {
    margin-bottom: 12px;
    max-width: 324px;
    width: 100%;
    position: relative;

    &:nth-child(5) {
      margin-bottom: 22px;
    }
  }

  &-Input {
    width: 100%;
    padding: 28px 32px;
    border: 1px solid var(--color-bg-input);
    border-radius: 8px;
    outline: none;
    font-size: 15px;
    letter-spacing: .045em;
    color: var(--color-text-btn);
    background-color: var(--color-bg-input);

    &::placeholder {
      color: var(--color-text-placeholder);
    }

    &:focus {
      border: 1px solid var(--color-text-btn);
    }
  }

  &-Btn {
    padding: 24px 32px 27px 28px;
  }

  &-PhoneBox {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-main3);
  }

  &-PhoneTitle {
    margin-right: 7px;
    position: relative;
    padding-left: 38px;

    &:before {
      content: '';
      position: absolute;
      width: 27px;
      height: 27px;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      background-image: url(~@/assets/image/phone-icon-white.png);
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  &-Phone {
    display: block;
    position: relative;
    font-weight: 700;

    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--color-text-main3);
    }

    @media (min-width: $screen-l) {
      &:before {
        opacity: 0;
        transition: .3s;
      }
      &:hover {
        &:before {
          opacity: 0.502;
        }
      }
    }
  }

  &-ImgBox {
    position: relative;
    width: 50%;
  }

  &-Img {
    position: absolute;
    left: -95px;
    bottom: -80px;
  }

  &-ImgDescription {
    position: absolute;
    top: 0;
    right: -74px;
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

  .invalid-feedback {
    position: absolute;
    top: -15px;
    right: 0;
    font-size: 10px;
    color: var(--color-text-error);
  }
}
</style>
