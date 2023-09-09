<template>
    <BaseModal>
      <div class="container">
        <!-- heading -->
        <h3 class="container__heading">ایجاد نوع فعالیت</h3>
        <!-- form activity type -->
        <Form />
      </div>
    </BaseModal>
    
  </template>
  
  <script>
import Form from "../../common/Form.vue"
import BaseModal from "../../common/BaseModal.vue"
  export default {
  components: {
    Form,BaseModal
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

  </style>
  