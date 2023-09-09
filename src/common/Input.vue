<template>
    <div class="input">
      <div class="input__box">
        <input class="input__field" type="text" name="activity-type" id="activity-type" />

        <label class="input__label" for="activity-type">
            <slot></slot>
        </label>
      </div>
      <img src="../assets/images/weight.svg" alt="" />
    </div>
</template>
<script >

</script>
<style lang="scss" scoped>
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
  }

  &__box {
    position: relative;
    width: 100%;
  }

  &__field {
    @include typography('text-16-28-semi-selected');
    background-color: transparent;
    border: none;
    outline: none;
    text-align: right;
    transition-duration: 0.3s;
    transition-property: transform;
    width: 100%;
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

  &__field:focus ~ label {
    @include typography('text-12-16-normal-base');
    text-align: right;
    transform: translateY(-0.8rem);
  }

  &__field:focus {
    transform: translateY(+0.7rem);
  }
}
</style>