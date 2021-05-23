<template>
  <div name="modal" class="Modal"><div >
    <p class="Text Modal-Text">Ваша заявка принята</p>
    <button type="button" class="Modal-Close Btn" @click="$emit('close')">OK</button>
  </div></div>
</template>

<script>
export default {
  name: "Modal"
}
</script>

<style lang="scss">

.Modal {
  padding: 40px;
  border-radius: 8px;
  background-color: var(--color-text-main3);
  font-size: 28px;
  text-align: center;

  &-Text {
    margin-bottom: 50px;
    color: var(--color-text-btn);
  }

  &-Close {
    width: 100%;
    padding:15px 0;
  }
}
</style>