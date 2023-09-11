<template>
  <AuthLayout>
    <header class="reverse-content">
      <h1 class="frame__header">ورود</h1>
      <img src="@/assets/images/login-img.png" alt="" />
    </header>

    <vee-form class="form" :validation-schema="loginSchema" @submit="loginSubmit">
      <InputItem nameInput="email" type="email">
        ایمیل
        <template #inputIcon>
          <BaseIcon
            name="user"
            color="var(--theme-primary-500)"
            width="2.4rem"
            height="2.4rem"
          ></BaseIcon>
        </template>
      </InputItem>

      <InputItem nameInput="password" type="password">
        <template #hidePassIcon>
          <BaseIcon
            name="eyeSlash"
            color="var(--theme-text-primary-dark-900)"
            min-width="2.4rem"
            height="2.4rem"
          ></BaseIcon>
        </template>
        رمز عبور
        <template #inputIcon>
          <BaseIcon
            name="lock"
            color="var(--theme-primary-500)"
            width="2.4rem"
            height="2.4rem"
          ></BaseIcon>
        </template>
      </InputItem>

      <ButtonItem styleButton="button_primary" type="submit"> ورود </ButtonItem>
    </vee-form>

    <footer class="frame__footer">
      <RouterLink to="/signup">ثبت نام</RouterLink>
      <p>حساب کاربری ندارید؟</p>
    </footer>
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue'
import InputItem from '@/common/Input.vue'
import ButtonItem from '@/common/Button.vue'
import BaseIcon from '@/common/BaseIcon.vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

export default {
  name: 'AppLogin',
  data() {
    return {
      loginSchema: {},
      email: 'admin@email.com',
      password: '123456'
    }
  },
  components: {
    AuthLayout,
    InputItem,
    ButtonItem,
    BaseIcon,
    RouterLink
  },
  methods: {
    async loginSubmit(values) {
      try {
        const {
          data: {
            data: { token }
          }
        } = await axios.post(
          'https://usermanager-v1-dev.apipart.ir/service/userManager@1/login',
          {
            email: values.email,
            password: values.password
          },
          {
            headers: {
              'Content-Type': 'application/json',
              system: 'mrRobot',
              'gateway-system': 'mrRobot',
              user: 'mrRobot',
              pass: 'mrRobot'
            }
          }
        )
        console.log(token)
        this.$cookies.set('token', token)
        this.$router.push({ name: 'home' })
      } catch (error) {
        alert(error.message)
      }
    }
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
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    p {
      @include typography(text-16-32-normal-base);
    }

    a {
      @include typography(text-16-28-semi-selected);
    }
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
