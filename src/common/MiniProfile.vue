<template>
  <div class="mini-profile">
    <div class="mini-profile__profile-section">
      <div>
        <p class="mini-profile__user-name">بهنام وهانی</p>
        <p class="mini-profile__user-last-event">بدون رویداد</p>
      </div>

      <div class="mini-profile__profile-img">
        <img src="@/assets/images/Avatar.svg" alt="" />
      </div>
    </div>

    <div class="mini-profile__notification">
      <img src="@/assets/images/notification.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.mini-profile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__profile-section {
    display: flex;
    flex-direction: row-reverse;
    gap: 1.2rem;
    cursor: pointer;
  }

  &__profile-img {
    @include img-wrapper(5.6rem, 5.6rem, 50%);
  }

  &__user-name {
    @include typography('text-16-28-semi-900');
  }

  &__user-last-event {
    @include typography('text-14-28-normal-900');
  }

  &__notification {
    cursor: pointer;
    @include img-wrapper(2.8rem, 2.8rem);
  }

  @include respond-to('medium') {
    position: fixed;
    top: 0;
    max-height: 6.4rem;
    width: 100%;
    background-color: var(--theme-surface);
    padding: 2rem;
    filter: drop-shadow(-1px 1px 4px rgba(0, 0, 0, 0.11));
    z-index: 10;

    &__notification {
      @include img-wrapper(2.4rem, 2.4rem);
    }

    &__profile-img {
      @include img-wrapper(4.8rem, 4.8rem, 50%);
    }
  }
}
</style>
