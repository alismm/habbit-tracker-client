<template>
  <div class="calender">
    <div class="calender__month">
      <p>مهر ۱۴۰۱</p>
      <div class="calender__next-prev-month">
        <BaseIcon class="calender__prev-month-icon" name="arrowLeft"></BaseIcon>
        <BaseIcon class="calender__next-month-icon" name="arrowRight"></BaseIcon>
        <i class="ic-arrow-left ic-arrow-left_dark-gray"></i>
        <i class="ic-arrow-right ic-arrow-right_dark-gray"></i>
      </div>
    </div>
    <div>
      <ul class="calender__weekdays">
        <li>ش</li>
        <li>ی</li>
        <li>د</li>
        <li>س</li>
        <li>چ</li>
        <li>پ</li>
        <li>ج</li>
      </ul>
    </div>
    <div>
      <ul class="calender__days">
        <li class="calender__day_inactive">۲۸</li>
        <li class="calender__day_inactive">۲۹</li>
        <li class="calender__day_inactive">۳۰</li>
        <li class="calender__day_inactive">۳۱</li>
        <li>۱</li>
        <li>۲</li>
        <li>۳</li>
        <li>۴</li>
        <li>۵</li>
        <li class="calender__day_today">۶</li>
        <li>۷</li>
        <li>۸</li>
        <li>۹</li>
        <li>۱۰</li>
        <li>۱۱</li>
        <li>۱۲</li>
        <li>۱۳</li>
        <li>۱۴</li>
        <li>۱۵<small class="calender__day_have-event">۲</small></li>
        <li>۱۶</li>
        <li>۱۷</li>
        <li>۱۸</li>
        <li>۱۹</li>
        <li>۲۰</li>
        <li>۲۱</li>
        <li>۲۲</li>
        <li>۲۳</li>
        <li>۲۴</li>
        <li>۲۵</li>
        <li>۲۶</li>
        <li>۲۷</li>
        <li>۲۸</li>
        <li>۲۹</li>
        <li>۳۰</li>
        <li class="calender__day_inactive">۱</li>
      </ul>
    </div>
  </div>

  <div class="mobile-calender">
    <ul class="mobile-calender__weekdays">
      <li class="mobile-calender__day">ش<span class="mobile-calender__weekdays-date">۲۰</span></li>

      <li class="mobile-calender__day">ی<span class="mobile-calender__weekdays-date">۲۱</span></li>

      <li class="mobile-calender__day mobile-calender__day_today">
        د<span class="mobile-calender__weekdays-date">۲۲</span>
      </li>

      <li class="mobile-calender__day">س<span class="mobile-calender__weekdays-date">۲۳</span></li>

      <li class="mobile-calender__day">چ<span class="mobile-calender__weekdays-date">۲۴</span></li>

      <li class="mobile-calender__day">
        <small class="mobile-calender__day_have-event">۲</small>
        پ<span class="mobile-calender__weekdays-date">۲۵</span>
      </li>

      <li class="mobile-calender__day">ج<span class="mobile-calender__weekdays-date">۲۶</span></li>
    </ul>
  </div>
</template>

<script>
import BaseIcon from '@/common/BaseIcon.vue'

export default {
  name: 'AppCalender',
  components: {
    BaseIcon
  }
}
</script>

<style lang="scss" scoped>
.calender {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: var(--theme-background);
  border-radius: 24px;

  &__month {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include typography('text-18-32-bold-900');
  }

  &__next-prev-month {
    display: flex;
    flex-direction: row-reverse;
    gap: 1.6rem;
  }

  &__next-month-icon {
    fill: var(--theme-primary-text-900);
    width: 2.4rem;
    height: 2.4rem;
  }

  &__prev-month-icon {
    fill: var(--theme-primary-text-900);
    width: 2.4rem;
    height: 2.4rem;
  }

  &__weekdays {
    display: flex;
    text-align: center;
    gap: 4.3rem;
    @include typography('text-14-28-semi-500');
    padding-right: 0.8rem;
  }

  &__days {
    display: grid;
    grid-template-columns: repeat(7, 3.2rem);
    gap: 0.8rem 2.067rem;
    direction: rtl;
    text-align: center;
    @include typography('text-16-32-normal-900');

    li {
      position: relative;
      cursor: pointer;
    }
  }

  &__day_today {
    background-color: var(--theme-primary-600);
    color: var(--theme-on-primary-50);
    border-radius: 12px;
  }

  &__day_inactive {
    color: var(--theme-text-primary-400);
  }

  &__day_have-event {
    position: absolute;
    right: -1rem;
    width: 1.6rem;
    height: 1.6rem;
    background-color: var(--theme-primary-600);
    border-radius: 50%;
    text-align: center;
    @include typography('text-10-16-normal-700');
    color: var(--theme-on-primary-50);
  }

  &__weekdays-date {
    display: none;
  }

  @include respond-to('medium') {
    display: none;
  }
}

.mobile-calender {
  display: none;

  @include respond-to('medium') {
    display: inline;
    filter: drop-shadow(0 0 4px #0043650c);
    // margin-top: 3.2rem;
    padding-bottom: 0.8rem;
    padding-top: 8.6rem;

    &__weekdays {
      display: flex;
      justify-content: center;
      gap: 0.8rem;
      text-align: center;
    }

    &__weekdays-date {
      @include typography('text-16-28-semi-900');
      color: var(--theme-text-primary-700);
    }

    &__day {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 0.8rem 1.2rem;
      background-color: var(--theme-surface);
      border-radius: 24px;
      @include typography('text-14-24-semi-900');
      color: var(--theme-text-primary-400);

      &_today,
      &_today > span {
        background-color: var(--theme-primary-600);
        color: var(--theme-on-primary-50);
      }
    }

    &__day_have-event {
      position: absolute;
      right: 0;
      top: 0;
      width: 1.6rem;
      height: 1.6rem;
      background-color: var(--theme-primary-600);
      border-radius: 50%;
      @include typography('text-10-16-normal-700');
      color: var(--theme-on-primary-50);
      text-align: center;
    }
  }
}
</style>
