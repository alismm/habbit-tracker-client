<template>
  <div class="textArea" action="">
    <div class="textArea__box">
      <VeeField
        :name="nameInput"
        as="textarea"
        id="description-activity"
        cols="30"
        rows="2"
        class="textArea__input-field"
      ></VeeField>

      <label class="textArea__label" for="description-activity">توضیحات</label>
    </div>

    <div class="textArea__img-wrapper">
      <BaseIcon name="Document"></BaseIcon>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/common/BaseIcon.vue'
export default {
  components: { BaseIcon },
  props: ['nameInput'],
  methods: {}
}
</script>

<style lang="scss" scoped>
$textarea-scroll-outline: var(--theme-scroll-outline);
$textarea-scroll: var(--theme-scroll);

.textArea {
  display: flex;
  border-radius: 1.6rem;
  border: 1px solid var(--theme-outline);
  flex-direction: row-reverse;
  gap: 0.8rem;
  min-height: 9.6rem;
  justify-content: center;
  padding: 0.8rem;

  &__box {
    position: relative;
    width: 100%;
  }

  &__input-field {
    resize: none;
    // cursor: pointer;
    &::-webkit-scrollbar {
      width: 0.3rem;
      cursor: pointer;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--theme-scroll);
      outline: 1px solid var(--theme-scroll-outline);
      // cursor: pointer;
    }

    background-color: transparent;
    border: none;
    @include typography('text-16-28-semi-selected');
    outline: none;
    text-align: right;
    transition-duration: 0.5s;
    transition-property: transform;
    width: 100%;
  }
  &__label {
    cursor: text;
    @include typography('text-16-28-semi-base');
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
    transition-duration: 0.5s;
    transition-property: transform;
  }

  &__input-field:focus ~ label {
    @include typography('text-12-16-normal-base');
    text-align: right;
    transform: translateY(-4px);
  }

  &__input-field:focus {
    transform: translateY(+14px);
  }

  &__img-wrapper {
    align-items: flex-start;
    display: flex;
    justify-content: flex-end;
    padding: 0.4rem 0;

    img {
      align-items: center;
      display: flex;
      height: 2.4rem;
      justify-content: center;
      width: 2.4rem;
    }
  }
}
</style>
