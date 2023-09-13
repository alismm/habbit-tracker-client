<template>
  <DashboardLayout>
    <template #navigation>
      <NavbarItem></NavbarItem>
    </template>
    <template #main>
      <header class="header">
        <div class="title-container">
          <h4 class="title-container__title">گزارش ها</h4>
        </div>
        <div class="filters">
          <div class="filters__item">
            <p>روزانه</p>
          </div>
          <div class="filters__item filters__item_selected">
            <p>هفتگی</p>
          </div>
          <div class="filters__item">
            <p>ماهانه</p>
          </div>
          <div class="filters__item">
            <p>سالانه</p>
          </div>
        </div>
      </header>

      <report></report>

      <div class="horizontal-line"></div>

      <header class="header">
        <div class="title-container mobile-title-container">
          <h4 class="title-container__title">فعالیت ها</h4>
        </div>
        <div class="header__more">
          <p class="header__title-more">همه</p>
          <i class="ic-arrow-left-more ic-arrow-left-more_4xs"></i>
        </div>
      </header>

      <div class="horizontal-scroll main__horizontal-scroll">
        <ActivityCardItem>
          <template #cardTitle>دراز و نشست</template>
          <template #cardDescription>
            متن و توضیح فعالیت متن و توضیح فعالیت متن و توضیح فعالیت متن و توضیح فعالیت.
          </template>
          <template #cardTime>۸:۳۰ تا ۹:۴۵</template>
          <template #cardDate>۲۲ مهر</template>
          <template #cardLabel>دراز و نشست</template>
        </ActivityCardItem>
      </div>

      <header class="header">
        <div class="title-container mobile-title-container">
          <h4 class="title-container__title">نوع فعالیت</h4>
        </div>
        <div class="header__more">
          <p class="header__title-more">همه</p>
          <i class="ic-arrow-left-more ic-arrow-left-more_4xs"></i>
        </div>
      </header>

      <div class="horizontal-scroll main__horizontal-scroll-atc">
        <ActivityTypeCardItem>
          <template #cardTitle>شنا سوئدی 💪</template>
          <template #cardCount>۴ فعالیت</template>
        </ActivityTypeCardItem>
      </div>
    </template>
    <template #leftSideBar>
      <MiniProfile></MiniProfile>
      <Calender></Calender>
    </template>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import NavbarItem from '@/common/Navbar.vue'
import Calender from '@/common/Calender.vue'
import MiniProfile from '@/common/MiniProfile.vue'
import ActivityCardItem from '@/common/ActivityCard.vue'
import ActivityTypeCardItem from '@/common/ActivityTypeCard.vue'
import report from '@/modules/home/components/report.vue'

export default {
  name: 'AppHome',
  components: {
    DashboardLayout,
    NavbarItem,
    report,
    Calender,
    MiniProfile,
    ActivityCardItem,
    ActivityTypeCardItem
  },
  data() {
    return {
      activityCardData: {
        cardTitle: '',
        cardDescription: '',
        cardDate: '',
        cardTime: '',
        cardLabel: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(7.1% + 1.2rem) 0 7.1%;

  &__more {
    display: none;
  }

  &__title-more {
    font-size: var(--font-size-xs);
    color: var(--date-time-color);
    line-height: var(--line-height-s);
  }

  @include respond-to('medium') {
    padding: 0 2.8rem;

    &__more {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
  }
}

.title-container {
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  justify-content: center;

  &__back {
    display: flex;
  }

  &__title {
    // @include typography.title-font-l-m();
    @include typography('text-18-32-bold-900', 'text-16-28-semi-900');
  }

  div {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 0.8rem;
  }

  @include respond-to('medium') {
    gap: 1.2rem;
  }
}

.filters {
  display: flex;
  gap: 0.8rem;
  overflow-x: hidden;

  &__item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0 0.8rem;
    background-color: var(--theme-surface);
    border-radius: 12px;
    filter: drop-shadow(0 0 4px #0043650c);
    @include typography('text-14-28-normal-900', 'text-12-20-semi-900');

    &_selected {
      background-color: var(--theme-primary-200);
      color: var(--theme-primary-900);
      border: 0.1rem solid var(--theme-primary-500);
    }
  }

  @include respond-to('medium') {
    background-color: var(--theme-surface);
    border-radius: 12px;
    filter: drop-shadow(0 0 4px #0043650c);
    gap: 0;
    padding: 0.2rem 0;
    min-width: 31.9rem;

    &__item + &__item {
      border-right: 1px solid;
      border-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0) 25%,
        var(--theme-text-primary-300) 26%,
        var(--theme-text-primary-300) 74%,
        rgba(0, 0, 0, 0) 75%
      );
      border-image-slice: 1;
    }

    &__item_selected + &__item {
      border: none;
    }

    &__item + &__item_selected {
      border: none;
    }

    &__item {
      filter: drop-shadow(0 0 4px #00000000);
      padding: 0.4rem 2.5rem;

      &_selected {
        border-style: none;
      }
    }
  }
}

.horizontal-line {
  width: 87%;
  margin: 4.8rem 6.5% 4rem 0;
  border: 0.2rem solid var(--theme-surface);

  @include respond-to('medium') {
    display: none;
  }
}

.horizontal-scroll {
  display: flex;
  flex-wrap: nowrap;
  padding: 0 7.1%;
  gap: 2rem;
  overflow-y: auto;
  min-height: 48.8rem;
  &::-webkit-scrollbar {
    display: none;
  }

  @include respond-to('medium') {
    gap: 0.8rem;
    min-height: auto;
  }
}

.main__horizontal-scroll {
  margin-bottom: 5.6rem;
}

.main__horizontal-scroll-atc {
  margin-bottom: 5.6rem;
  min-height: 10.4rem;
}
</style>
