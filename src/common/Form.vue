<template>
  <form class="form" action="">
    <TheInput >
        نوع فعالیت
    </TheInput>
    <!-- button -->
    <div class="form__button-container">
      <TheButton styleButton="button_secondary">
            لغو
      </TheButton>
      <TheButton styleButton="button_primary">
            ایجاد
      </TheButton>
    </div>
  </form>
</template>
<script>
import TheButton from './TheButton.vue'
import TheInput from './Input.vue'

export default {
  components: {
    TheButton,
    TheInput
  },

}
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  &__double-input {
    @include box-container-direction-row(0.8rem);
  }

  &__button-container {
    @extend .form__double-input;
    margin-top: 1.6rem;
  }
}
</style>
