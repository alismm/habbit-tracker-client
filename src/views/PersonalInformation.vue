<template>
  <AuthLayout>
    <routerLink class="frame__back-arrow" to="/register">
      <BaseIcon
        name="arrowRight"
        color="var(--theme-text-primary-dark-900)"
        width="2.4rem"
        height="2.4rem"
      ></BaseIcon>
    </routerLink>

    <header class="reverse-content">
      <h1 class="frame__header">اطلاعات فردی</h1>
      <img src="@/assets/images/login-img.png" alt="" />
    </header>

    <vee-form
      class="form"
      :validation-schema="personalInformationSchema"
      @submit="personalInformationSubmit"
    >
      <InputItem nameInput="name" type="text">
        نام
        <template #inputIcon>
          <BaseIcon
            name="user"
            color="var(--theme-primary-500)"
            width="2.4rem"
            height="2.4rem"
          ></BaseIcon>
        </template>
      </InputItem>

      <InputItem nameInput="age" type="number">
        سن
        <template #inputIcon>
          <BaseIcon
            name="calendar"
            color="var(--theme-primary-500)"
            width="2.4rem"
            height="2.4rem"
          ></BaseIcon>
        </template>
      </InputItem>

      <ButtonItem styleButton="button_primary" type="submit">تایید</ButtonItem>
    </vee-form>

    <footer class="frame__footer"></footer>
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue'
import InputItem from '@/common/Input.vue'
import ButtonItem from '@/common/Button.vue'
import BaseIcon from '@/common/BaseIcon.vue'

export default {
  name: 'AppPersonalInformation',
  data() {
    return {
      personalInformationSchema: {}
    }
  },
  components: {
    AuthLayout,
    InputItem,
    ButtonItem,
    BaseIcon
  },
  methods: {
    personalInformationSubmit() {}
  }
}
</script>

<style lang="scss" scoped>
.frame {
  &__header {
    @include typography(text-32-52-bold-selected);
    margin: 0;
  }

  &__footer {
    height: 3.2rem;
  }

  &__back-arrow {
    position: absolute;
    padding: 3.6rem;
    top: 0;
    right: 0;
  }
}

.reverse-content {
  display: flex;
  flex-direction: column-reverse;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  padding: 0 5rem;
}
</style>
