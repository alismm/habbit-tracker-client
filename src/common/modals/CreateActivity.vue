<template>
  <ModalLayout>
    <div class="create-activity">
      <!-- heading -->
      <h3 class="create-activity__heading">ایجاد فعالیت</h3>
      <section class="horizontal-scroll">
        <a class="horizontal-scroll__item">
          <input
            type="file"
            @change="fileUpload($event)"
            name="file"
            id="file"
            class="horizontal-scroll__input-file"
            multiple
          />
          <label for="file">
            <img src="../../../old-project/assets/images/Frame-plus.svg" alt="" />
          </label>
        </a>
        <a v-if="imageURL != ''" class="horizontal-scroll__item">
          <img :src="imageURL" alt="" />
        </a>
      </section>
      <section class="create-activity__form-container">
        <vee-form ref="form" class="form" @submit="submitModalCreateActivity">
          <InputItem nameInput="createActivity"
            >نام فعالیت
            <template #inputIcon>
              <BaseIcon name="note"></BaseIcon>
            </template>
          </InputItem>

          <TextAreaItem nameInput="description"> </TextAreaItem>
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
            <ButtonItem @click.prevent="cancelModalCreateActivity" styleButton="button_secondary">
              لغو
            </ButtonItem>
            <ButtonItem styleButton="button_primary" type="submit"> ایجاد </ButtonItem>
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
import TextAreaItem from '@/common/Textarea.vue'
import { mapStores } from 'pinia'
import useModalStore from '@/stores/Modal'
import axios from 'axios'
import useBarjavandStore from '@/stores/barjavand'
export default {
  components: {
    ModalLayout,
    InputItem,
    ButtonItem,
    BaseIcon,
    TextAreaItem
  },
  data(){
    return {
      activityCardData: []
    }
  },
  computed: {
    ...mapStores(useModalStore),
    ...mapStores(useBarjavandStore)
  },
  data() {
    return {
      imageURL: '',
      file: null,
      idImage: ''
    }
  },
  methods: {
    submitModalCreateActivity(values) {
      this.ModalStore.isOpenCreateActivity = !this.ModalStore.isOpenCreateActivity
      this.$refs.form.resetForm()
      this.BarjavandStore.sendActivityData(values, this.$cookies.get('userId'))
    },
    cancelModalCreateActivity() {
      ;(this.ModalStore.isOpenCreateActivity = !this.ModalStore.isOpenCreateActivity),
        this.$refs.form.resetForm()
    },

    async fileUpload(e) {
      const target = e.target.files[0]
      console.log(target)
      const formData = new FormData()
      formData.append('file', target)
      this.imageURL = URL.createObjectURL(target)
      try {
        const {
          data: {
            data: { id }
          }
        } = await axios({
          url: '/service/fileStorage@3/file',
          method: 'put',
          headers: {
            system: 'mrRobot',
            'gateway-system': 'mrRobot',
            user: 'mrRobot',
            pass: 'mrRobot'
          },
          data: formData
        })
        console.log(id)
        this.idImage = id
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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

.horizontal-scroll {
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  gap: 1.2rem;
  height: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 9.6rem;
    max-width: 9.6rem;
    height: 9.6rem;
    border-radius: 2.4rem;
    background: var(--theme-surface);
    box-shadow: 0 0 0.4rem 0 rgba(0, 67, 101, 0.05);

    img {
      @include img-fill;
      border-radius: 2.4rem;
    }
  }
  &__input-file {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  &__input-file + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    display: inline-block;
    cursor: pointer;
  }
}
.horizontal-scroll .horizontal-scroll__item:first-child {
  margin-right: 2.4rem;
}
#img-add {
  object-fit: none;
}
</style>
