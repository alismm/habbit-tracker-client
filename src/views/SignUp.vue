<template>
  <AuthLayout v-if="currentComponent == 'AppRegister'">
    <routerLink class="frame__back-arrow" to="/login">
      <BaseIcon
        name="arrowRight"
        color="var(--theme-text-primary-dark-900)"
        width="2.4rem"
        height="2.4rem"
      ></BaseIcon>
    </routerLink>

    <header class="reverse-content">
      <h1 class="frame__header">ثبت نام</h1>
      <img src="@/assets/images/login-img.png" alt="" />
    </header>

    <vee-form class="form" :validation-schema="registerSchema" @submit="registerSubmit">
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

      <ButtonItem styleButton="button_primary" type="submit">ثبت نام</ButtonItem>
    </vee-form>

    <footer class="frame__footer"></footer>
  </AuthLayout>

  <AuthLayout v-else-if="currentComponent == 'AppPersonalInformation'">
    <div class="frame__back-arrow" @click="toggleComponent">
      <BaseIcon
        name="arrowRight"
        color="var(--theme-text-primary-dark-900)"
        width="2.4rem"
        height="2.4rem"
      ></BaseIcon>
    </div>

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

  <div class="error-message" v-show="showErrorMessage">
    <p>ثبت نام ناموفق</p>
  </div>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue'
import InputItem from '@/common/Input.vue'
import ButtonItem from '@/common/Button.vue'
import BaseIcon from '@/common/BaseIcon.vue'
import axios from 'axios'

export default {
  name: 'AppSignUp',
  components: {
    AuthLayout,
    InputItem,
    ButtonItem,
    BaseIcon
  },
  data() {
    return {
      currentComponent: 'AppRegister',
      registerSchema: {
        email: 'required|min_email:3|max_email:100|email',
        password: 'required|min_pass:3|max_pass:100'
      },
      personalInformationSchema: {
        name: 'required|min_name:3|max_name:100|name',
        age: 'required|min_value_age:3|max_value_age:100'
      },
      userEmail: '',
      userPass: '',
      userId: '',
      showErrorMessage: false
    }
  },
  methods: {
    toggleComponent() {
      if (this.currentComponent == 'AppRegister') this.currentComponent = 'AppPersonalInformation'
      else this.currentComponent = 'AppRegister'
    },
    registerSubmit(values) {
      this.userEmail = values.email
      this.userPass = values.password
      this.currentComponent = 'AppPersonalInformation'
    },
    async personalInformationSubmit(values) {
      try {
        const {
          data: {
            data: { token, userId }
          }
        } = await axios.post(
          'https://usermanager-v1-dev.apipart.ir/service/userManager@1/signUp',
          {
            email: this.userEmail,
            password: this.userPass
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
        console.log(token, userId);
        this.$cookies.set('token', token)
        this.$cookies.set('userId', userId)

        await axios.post(
          'https://barjavand-v3-dev.apipart.ir/service/barjavand@3/data',
          {
            schema: {
              name: 'user-info',
              version: '1.0.0'
            },
            tags: {
              userId: this.$cookies.get('userId')
            },
            data: {
              name: values.name,
              age: Number(values.age),
              userId: this.$cookies.get('userId'),
              email: this.userEmail
            }
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

        if (this.$cookies.get('token')) this.$router.replace({ name: 'home' })
        else this.toggleErrorMessage()
      } catch (error) {
        this.toggleErrorMessage()
        console.log(error);
      }
    },
    toggleErrorMessage() {
      this.showErrorMessage = true
      setTimeout(() => (this.showErrorMessage = false), 3000)
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
    height: 3.2rem;
  }

  &__back-arrow {
    position: absolute;
    padding: 3.6rem;
    top: 0;
    right: 0;
    cursor: pointer;
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

.error-message {
  position: absolute;
  top: 4rem;
  right: 4rem;
  height: 6rem;
  width: 25.6rem;
  border-radius: 20px;
  @include typography('text-18-32-bold-900');
  background-color: var(--theme-text-danger);
  color: var(--theme-danger);
  text-align: center;
  line-height: 6rem;
}
</style>
