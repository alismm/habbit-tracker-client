<template>
  <button class="button" :class="styleButton">
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: "ButtonItem",
  props: ['styleButton'],
  methods: {
    closeModalCreateActivityType(){
      this.ModalStore.isOpenCreateActivityType=!this.ModalStore.isOpenCreateActivityType;
      // this.ModalStore.isOpenCreateActivity=!this.ModalStore.isOpenCreateActivity;
      console.log(this.ModalStore.isOpenCreateActivityType)
    }
  }
}
</script>

<style lang="scss" scoped>
$button-primary-background-color: var(--theme-primary-600);
$button-primary-color: var(--theme-on-primary-100);
$button-secondary-border-color: var(--theme-primary-600);
$button-secondary-color: var(--theme-on-primary-600);

.button {
  height: 5.6rem;
  width: 100%;
  @include typography('text-16-32-semi-selected', 'text-14-24-semi-selected');
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  transition-duration: 0.5s;
  transition-property: background-color;
  border: 2px solid #{$button-secondary-border-color};

  &_primary {
    background: #{$button-primary-background-color};
    color: #{$button-primary-color};
  }

  &_secondary {
    background: transparent;
    color: #{$button-secondary-color};
  }

  // &:hover {
  //   background-color: #{$button-primary-background-color-hover};

  // }
}
</style>
