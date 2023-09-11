<template>
 <!-- horizontal scroll section -->
    <section class="horizontal-scroll">
          
            <slot name="svgHorizontalScroll"></slot>
            <slot name="svgHorizontalScroll"></slot>
            <slot name="svgHorizontalScroll"></slot>
            <slot name="imgHorizontalScroll"></slot>
    </section>
</template>
<script>
  export default {

    props: ['gap','height','width']
  }
</script>
<style lang="scss">
.horizontal-scroll {
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  gap: v-bind(gap);
  height: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


.horizontal-scroll__item {
  min-width: v-bind(width);
  max-width: v-bind(width);
  height: v-bind(height);
  border-radius: 2.4rem;
  background: var(--theme-surface);
  box-shadow: 0 0 0.4rem 0 rgba(0, 67, 101, 0.05);

  img {
    @include img-fill;

  }
}
.form__button-container {
  margin-top: 2.4rem;
}
.horizontal-scroll .horizontal-scroll__item:first-child{
  margin-right: 2.4rem;
}
#img-add {
  object-fit: none;
}

</style>