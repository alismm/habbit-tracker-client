<template>
  <ModalLayout>
    <div class="create-activity">
      <!-- heading -->
      <h3 class="create-activity__heading">ایجاد فعالیت</h3>
      <!-- form activity type -->
      <HorizontalScroll gap="1.2rem" width="9.6rem" height="9.6rem">

      </HorizontalScroll>
      <section class="create-activity__form-container">
        <vee-form class="form">
          <InputItem nameInput="createActivity"
            >نام فعالیت
            <template #inputIcon>
              <BaseIcon name="note"></BaseIcon>
            </template>
          </InputItem>

          <TextAreaItem> </TextAreaItem>
          <InputItem nameInput="date">
            تاریخ
            <template #inputIcon>
              <BaseIcon name="calender"></BaseIcon>
            </template>
          </InputItem>
          <div class="form__double-input">
            <InputItem nameInput="startTime"
              >از ساعت
              <template #inputIcon>
                <BaseIcon name="clock"></BaseIcon>
              </template>
            </InputItem>
            <InputItem nameInput="endTime"
              >تا ساعت
              <template #inputIcon>
                <BaseIcon name="clock"></BaseIcon>
              </template>
            </InputItem>
          </div>
          <InputItem nameInput="create"
            >نوع فعالیت
            <template #inputIcon>
              <BaseIcon name="weight"></BaseIcon>
            </template>
          </InputItem>
          <div class="form__button-container">
            <ButtonItem @click="cancelModalCreateActivity" styleButton="button_secondary">
              لغو
            </ButtonItem>
            <ButtonItem
              @click="submitModalCreateActivity"
              styleButton="button_primary"
              type="submit"
            >
              ایجاد
            </ButtonItem>
          </div>
        </vee-form>
      </section>
    </div>
  </ModalLayout>
</template>

<script>
import ModalLayout from '@/layouts/ModalLayout.vue'
import InputItem from '@/common/Input.vue'
import ButtonItem from '@/common/Button.vue'
import BaseIcon from '@/common/BaseIcon.vue'
import HorizontalScroll from '@/common/HorizontalScroll.vue'
import TextAreaItem from '@/common/Textarea.vue'
import { mapStores } from 'pinia'
import useModalStore from '@/stores/Modal'
export default {
  components: {
    ModalLayout,
    InputItem,
    ButtonItem,
    BaseIcon,
    HorizontalScroll,
    TextAreaItem
  },
  computed: {
    ...mapStores(useModalStore)
  },
  methods: {
    previewFiles(event) {
      console.log(event.target.files)
    },
    submitModalCreateActivity() {
      this.ModalStore.isOpenCreateActivity = !this.ModalStore.isOpenCreateActivity
    },
    cancelModalCreateActivity() {
      this.ModalStore.isOpenCreateActivity = !this.ModalStore.isOpenCreateActivity
    }
  }
}
</script>

<style lang="scss">
.create-activity {
  background: var(--theme-background);
  border-radius: 2rem;
  max-width: 38rem;
  padding: 3.2rem 0 4rem 0;
  width: 100%;
  overflow: hidden;

  &__heading {
    margin-bottom: 3.2rem;
    text-align: center;
    @include typography('text-18-32-bold-900');
  }

  &__form-container {
    margin-right: 2.4rem;
    margin-left: 2.4rem;
    margin-top: 2.4rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;
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
    margin-top: 2.4rem;
  }
}
</style>
