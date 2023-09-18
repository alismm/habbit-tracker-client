<template>
  <section class="report">
    <div class="report__container">
      <div class="report__most-activity">
        <div class="report__most-activity-img-container">
          <BaseIcon class="report__most-activity-img" name="vector" />

          <p>۱</p>
        </div>

        <div class="report__most-activity-text">
          <h3>{{ mostActivity }}</h3>

          <p>{{ countMostActivity }}فعالیت </p>
        </div>
      </div>

      <div class="report__activity-chart">
        <h3>بیشترین ها</h3>

        <div class="report__activity-chart-line">
          <p>{{ mostActivity }}</p>

          <div class="report__activity-chart-details">
            <p>{{ countMostActivity }}</p>

            <div class="report__chart-bar report__chart-bar_extra10"></div>
          </div>
        </div>

        <div class="report__activity-chart-line">
          <div class="report__activity-chart-line">
            <p>{{ secondMostActivity }}</p>

            <div class="report__activity-chart-details">
              <p>{{ countSecondMostActivity }}</p>

              <div class="report__chart-bar report__chart-bar_extra7"></div>
            </div>
          </div>
        </div>

        <div class="report__activity-chart-line">
          <div class="report__activity-chart-line">
            <p>{{ thirdMostActivity }}</p>

            <div class="report__activity-chart-details">
              <p>{{ countThirdMostActivity }}</p>

              <div class="report__chart-bar report__chart-bar_extra3"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="report__summary-activity">
        <header class="report__summary-heading">
          <h3>{{ titleSummeryActivity }}</h3>

          <div class="report__summary-heading-img">
            <BaseIcon name="ArrowDown" />
          </div>
        </header>

        <div class="report__summary-plan">
          <div class="report__summary-plan-line">
            <div>
              <BaseIcon name="Bullet" />
              <p>{{ firstComingActivity }}</p>
            </div>

            <p>{{ dateFirstComingActivity }}</p>
          </div>

          <div class="report__summary-plan-line">
            <div>
              <BaseIcon name="Bullet" />
              <p>{{ secondComingActivity }}</p>
            </div>

            <p>{{ dateSecondComingActivity }}</p>
          </div>

          <div class="report__summary-plan-line">
            <div>
              <BaseIcon name="Bullet" />
              <p>{{ thirdComingActivity }}</p>
            </div>

            <p>{{ dateThirdComingActivity }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BaseIcon from '@/common/BaseIcon.vue'
export default {
  components: { BaseIcon },
  data() {
    return {
      mostActivity:"دراز و نشست",
      countMostActivity:"12",
      secondMostActivity:"شنا",
      countSecondMostActivity:"10",
      thirdMostActivity:"دوچرخه سواری",
      countThirdMostActivity:"5",
      titleSummeryActivity:"دوچرخه سواری",
      firstComingActivity:"جمعه با بچه ها",
      secondComingActivity:"صبحگاهی",
      thirdComingActivity:"گروه دانشجویی",
      dateFirstComingActivity:"۲۱  مهر   ۱۴۰۱",
      dateSecondComingActivity:"۱۸  مهر   ۱۴۰۱",
      dateThirdComingActivity:"۸  شهریور   ۱۴۰۱",


    }
  },
}
</script>
<style lang="scss" scoped>
.report {
  width: 100%;

  &__heading-report {
    margin-bottom: 1.6rem;
  }

  &__container {
    width: 100%;
    @include box-container-direction-row(2rem);
    flex-wrap: wrap;
  }

  &__most-activity {
    @include report-box;
    padding: 2.2rem 2.4rem;
    width: 28rem;
    direction: rtl;
  }

  &__most-activity-img-container {
    display: flex;
    position: relative;
    width: 8rem;
    max-height: 8rem;
    justify-content: center;
    align-items: center;

    p {
      position: absolute;
      top: 1.8rem;
      font-size: #{$font-size-11xl};
      line-height: #{$line-height-s};
      font-weight: #{$font-semi-bold};
      color: #{$bg-light-surface};
    }
  }

  &__most-activity-text {
    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
      @include typography('text-18-32-bold-900', 'text-14-24-semi-900');
    }

    p {
      text-align: right;
      @include typography('text-16-32-normal-700', 'text-14-28-normal-700');
    }
  }

  &__activity-chart {
    width: 48rem;
    @include report-box;
    padding: 1.8rem 2.4rem;

    h3 {
      @include typography('text-18-32-bold-900', 'text-14-24-semi-900');
    }
  }

  &__activity-chart-line {
    gap: 1rem;
    @include flex-row-space-between;

    p {
      text-align: right;

      @include typography('text-16-32-normal-700', 'text-12-20-normal-900');
    }

    > p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  &__activity-chart-details {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    width: 60%;
    align-items: center;
    gap: 0.8rem;
  }

  &__chart-bar {
    border-radius: 0.8rem 0 0 0.8rem;
    height: 0.8rem;
  }

  &__chart-bar_extra10 {
    background: #4ad66d;
    width: 90%;
  }

  &__chart-bar_extra7 {
    background: #ffbf00;
    width: 60%;
  }

  &__chart-bar_extra3 {
    background: #f7953b;
    width: 35%;
  }

  &__summary-activity {
    width: 38rem;
    @include report-box(space-between, 1.6rem);
    padding: 2rem 2.4rem;
  }

  &__summary-heading {
    display: flex;
    flex-direction: row;
    gap: 0.4rem;

    h3 {
      @include typography('text-18-32-bold-900', 'text-14-24-semi-900');
      text-align: right;
    }
  }

  &__summary-heading-img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__summary-plan {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    direction: rtl;
    gap: 0.8rem;
  }

  &__summary-plan-line {
    width: 100%;
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      gap: 0.8rem;
      justify-content: center;
      align-items: center;

      > p {
        // @include typography.text-font-ml-xss();
        @include typography('text-16-32-normal-700', 'text-12-20-semi-700');
      }
    }

    > p {
      //   @include typography.text-font-static-sm-xss();
      @include typography('text-14-28-normal-900', 'text-12-20-normal-900');
    }
  }
  @include respond-to('medium') {
    &__container {
      gap: 0.8rem;
    }

    &__most-activity {
      max-width: 10.8rem;
      padding: 2.7rem 1.5rem;
    }

    &__activity-chart {
      max-width: 19.6rem;
      padding: 1.4rem 1.6rem;
    }

    &__summary-activity {
      max-width: 31.2rem;
      padding: 1.6rem 1.6rem;
    }

    &__most-activity-img-container {
      width: 3.6rem;
      height: 3.6rem;

      p {
        position: absolute;
        top: 0.5rem;
        left: 1rem;
        font-size: #{$font-size-3xl};
        line-height: #{$line-height-s};
        color: #{$bg-light-surface};
        font-weight: normal;
      }
    }

    &__most-activity-img {
      width: 3.1rem;
      height: 3.1rem;
    }

    &__activity-chart-line {
      > p {
        min-width: 6.4rem;
      }
    }
  }
}
</style>
