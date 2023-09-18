<template>
  <article class="activity-type-card">
    <div class="activity-type-card__header">
      <h4 class="activity-type-card__title">
        <slot name="cardTitle"></slot>
      </h4>
      <BaseIcon
        class="activity-type-card__title-icon"
        name="more"
        fill="var(--theme-primary-text-900)"
        width="2.4rem"
        height="2.4rem"
      ></BaseIcon>
    </div>
    <div class="activity-type-card__count">
      <i class="ic-note-2 ic-note-2_blue-lighter-static ic-note-2_4xs-static"></i>
      <BaseIcon class="activity-type-card__count-icon" name="note2"></BaseIcon>
      <p><slot name="cardCount"></slot></p>
    </div>
  </article>
</template>

<script>
import BaseIcon from '@/common/BaseIcon.vue'
export default {
  name: 'ActivityTypeCard',
  components: {
    BaseIcon
  }
}
</script>

<style lang="scss" scoped>
.activity-type-card {
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;
  background-color: var(--theme-surface);
  border-radius: 2.4rem;
  flex-shrink: 0;

  &__header {
    display: flex;
    justify-content: space-between;
    @include typography('text-16-28-bold-900');
    font-weight: bold;
  }

  &__count {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    @include typography('text-14-28-normal-700');
  }

  &__count-icon {
    fill: var(--theme-primary-300);
    width: 1.8rem;
    height: 1.8rem;
  }

  &_empty {
    align-self: center;
    justify-self: center;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
  }

  @include respond-to('medium') {
    width: 15.2rem;

    &__title-icon {
      display: none;
    }
  }
}
</style>
