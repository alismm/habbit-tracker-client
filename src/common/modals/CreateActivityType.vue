<template>
  <ModalLayout>
    <div class="container">
      <!-- heading -->
      <h3 class="container__heading">ایجاد نوع فعالیت</h3>
      <!-- form activity type -->
      <vee-form :validation-schema="createActivityTypeSchema" @submit="createActivityTypeSubmit">
        <InputItem nameInput="create"
          >نوع فعالیت
          <template #inputIcon>
            <BaseIcon name="weight"></BaseIcon>
          </template>
        </InputItem>
        <div class="form__button-container">
          <ButtonItem styleButton="button_secondary"> لغو </ButtonItem>
          <ButtonItem styleButton="button_primary" type="submit"> ایجاد </ButtonItem>
        </div>
      </vee-form>
    </div>
  </ModalLayout>
</template>

<script>
import ModalLayout from '@/layouts/ModalLayout.vue'
import InputItem from '@/common/Input.vue'
import ButtonItem from '@/common/Button.vue'
import BaseIcon from '@/common/BaseIcon.vue'

export default {
  data() {
    return {
      createActivityTypeSchema: {
        create: 'required|min:3|max:100'
      }
    }
  },
  components: {
    ModalLayout,
    InputItem,
    ButtonItem,
    BaseIcon
  },
  methods: {
    createActivityTypeSubmit(values) {
      console.log(values)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  background: var(--theme-background);
  border-radius: 2rem;
  width: 38rem;
  padding: 3.2rem 2.4rem 4rem 2.4rem;

  &__heading {
    margin-bottom: 3.2rem;
    text-align: center;
    @include typography('text-18-32-bold-900');
  }
}
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
