<template>
  <article class="activity-card">
    <main class="activity-card__main">
      <img class="activity-card__img" src="@/assets/images/Rectangle 155.png" alt="" />

      <header class="activity-card__header">
        <h4 class="activity-card__title">
          <slot name="cardTitle"></slot>
        </h4>
        <BaseIcon
          name="more"
          fill="var(--theme-primary-text-900)"
          width="2.4rem"
          height="2.4rem"
        ></BaseIcon>
      </header>

      <p class="activity-card__description">
        <slot name="cardDescription"></slot>
      </p>
    </main>
    <footer class="activity-card__footer">
      <div class="activity-card__date-time">
        <div class="activity-card__time">
          <p><slot name="cardTime"></slot></p>
          <BaseIcon class="activity-card__time-icon" name="clockFill"></BaseIcon>
        </div>

        <div class="activity-card__date">
          <p><slot name="cardDate"></slot></p>
          <BaseIcon class="activity-card__date-icon" name="calendarFill"></BaseIcon>
        </div>
      </div>

      <p class="lbl lbl_red"><slot name="cardLabel"></slot></p>
    </footer>
  </article>
</template>

<script>
import BaseIcon from '@/common/BaseIcon.vue'

export default {
  name: 'ActivityCardItem',
  components: {
    BaseIcon
  },
  data() {
    return {
      // activityCardData: {
      //   cardTitle: '',
      //   cardDescription: '',
      //   cardDate: '',
      //   cardTime: '',
      //   cardLabel: ''
      // }
    }
  }
  // props: ['cardTitle', 'cardDescription', 'cardDate', 'cardTime', 'cardLabel']
}
</script>

<style lang="scss" scoped>
.activity-card {
  display: flex;
  flex-direction: column;
  min-width: 28rem;
  width: 28rem;
  background-color: var(--theme-surface);
  border-radius: 24px;
  padding: 1.6rem;
  gap: 2.4rem;
  filter: drop-shadow(0px 0px 4px #0043650c);

  &:hover {
    background-color: var(--theme-on-hover-primary);
    transition: background-color 1s;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    @include typography('text-18-32-bold-900', 'text-16-28-bold-900');
  }

  &__description {
    @include typography('text-14-28-normal-light-600', 'text-12-20-normal-500');
    height: 8.4rem;
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1.5rem;
    gap: 1.6rem;
    border-top: 0.1rem solid var(--theme-outline-100);
  }

  &__date-time {
    display: flex;
    flex-direction: row-reverse;
    gap: 1.6rem;
    @include typography('text-14-28-normal-700', 'text-12-20-normal-700');
  }

  &__date,
  &__time {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 0.4rem;
  }

  &__time-icon,
  &__date-icon {
    width: 2rem;
    height: 2rem;
    fill: var(--theme-primary-500);
  }

  &_empty {
    align-self: center;
    padding-top: 21.4rem;
    padding-bottom: 21.4rem;
  }

  @include respond-to('medium') {
    max-width: 23.2rem;
    gap: 1.6rem;
    padding: 2rem;

    &__footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: cneter;
      margin: 0 0.4rem 0.4rem;
      padding: 0;
      border-style: none;
    }

    &__img {
      display: none;
    }

    .lbl {
      display: none;
    }

    &__header i {
      display: none;
    }

    &__description {
      height: 2.8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &__main {
      gap: 0;
    }

    &_empty {
      padding-top: 1.8rem;
      padding-bottom: 1.8rem;
    }

    &__time-icon,
    &__date-icon {
      width: 1.8rem;
      height: 1.8rem;
      fill: var(--theme-primary-300);
    }
  }
}

.lbl {
  @include typography('text-14-28-semi-700', 'text-12-20-semi-700');
  border-radius: 16px;
  padding: 0.2rem 0.8rem;
  align-self: flex-start;

  &_red {
    background-color: var(--theme-danger);
    color: var(--theme-text-danger);
  }

  &_orange {
    background-color: var(--theme-warning);
    color: var(--theme-text-warning);
  }

  &_yellow {
    background-color: var(--theme-caution);
    color: var(--theme-text-caution);
  }

  &_blue {
    background-color: var(--theme-info);
    color: var(--theme-text-info);
  }

  @include respond-to('medium') {
    border-radius: 12px;
  }
}
</style>
