<template>
  <AuthLayout>
    <header class="reverse-content">
      <h1 class="frame__header">ورود</h1>
      <img src="@/assets/images/login-img.png" alt="" />
    </header>

    <form class="form" action="">
      <div class="input">
        <div class="input__box">
          <input class="input__field" type="email" name="email-input" id="email-input" />
          <label class="input__label" for="email-input">ایمیل</label>
        </div>
        <i class="ic-user ic-user_blue"></i>
      </div>

      <div class="input">
        <i class="input__hide-pass ic-eye-slash ic-eye-slash_dark-gray"></i>
        <div class="input__box">
          <input class="input__field" type="password" name="password-input" id="password-input" />
          <label class="input__label" for="password-input">رمز عبور</label>
        </div>
        <i class="ic-lock ic-lock_blue"></i>
      </div>

      <input class="button button_primary" type="submit" value="ورود" />
    </form>

    <footer class="frame__footer">
      <a href="">ثبت نام</a>
      <p>حساب کاربری ندارید؟</p>
    </footer>
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue'

export default {
  name: 'AppLogin',
  components: {
    AuthLayout
  }
}
</script>

<style lang="scss" scoped>
@import '@/../old-project/sass/components/form';
@import '@/../old-project/sass/components/button';
@import '@/../old-project/sass/components/icons';

@include generate-icon('user', 2.4rem);
@include generate-icon-modifier('user_blue', var(--theme-primary-500));
@include generate-icon('lock', 2.4rem);
@include generate-icon-modifier('lock_blue', var(--theme-primary-500));
@include generate-icon('eye-slash', 2.4rem);
@include generate-icon-modifier('eye-slash_dark-gray', var(--theme-text-primary-dark-900));

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
  padding: 0 5rem;
  gap: 2.8rem;
}
</style>
