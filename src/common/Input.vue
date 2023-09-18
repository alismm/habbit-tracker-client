<template>
  <div class="input-container">
    <div class="input">
      <div class="input__hide-pass" @click="toggleShow">
        <slot name="hidePassIcon"></slot>
      </div>
      <div class="input__box">
        <vee-field class="input__field" :type="inputType" :name="nameInput" placeholder="" />
        <label class="input__label" for="activity-type">
          <slot></slot>
        </label>
      </div>
      <slot name="inputIcon"></slot>
    </div>
    <ErrorMessage class="error-message" :name="nameInput" />
  </div>
</template>

<script>
export default {
  name: 'InputItem',
  data() {
    return {
      inputType: this.type,
      userEmail: '',
      userPass: ''
    }
  },
  props: ['nameInput', 'type'],
  methods: {
    toggleShow() {
      if (this.inputType === 'password') {
        this.inputType = 'text'
      } else if (this.inputType === 'text') this.inputType = 'password'
    }
  }
}
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
}

.input {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border: 1px solid var(--theme-outline);
  border-radius: 1.6rem;
  height: 5.6rem;
  padding: 0.8rem;

  /* Hide input number arrows in Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide input number arrows in Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  &__hide-pass {
    cursor: pointer;
    display: flex;
    justify-content: center;
  }

  &__box {
    position: relative;
    flex-grow: 2;
  }

  &__field {
    position: relative;
    @include typography('text-16-28-semi-selected');
    background-color: transparent;
    border: none;
    outline: none;
    text-align: right;
    transition-duration: 0.3s;
    transition-property: transform;
    width: 100%;
    z-index: 1;
  }

  &__label {
    @include typography('text-16-28-semi-base');
    cursor: text;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
    transition-duration: 0.3s;
    transition-property: transform;
    /* pointer-events: stroke; */
  }

  &__field:focus ~ label,
  &__field:not(:placeholder-shown) ~ label {
    @include typography('text-12-16-normal-base');
    text-align: right;
    transform: translateY(-0.8rem);
  }

  &__field:focus,
  &__field:not(:placeholder-shown) {
    transform: translateY(+0.7rem);
  }
}

.error-message {
  position: absolute;
  right: 1rem;
  bottom: -2.7rem;
  @include typography('text-14-28-semi-notColor');
  color: var(--theme-text-danger);
}
</style>
