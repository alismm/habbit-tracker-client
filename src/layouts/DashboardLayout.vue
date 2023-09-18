<template>
  <div class="full-container">
    <nav class="full-container__navigation">
      <slot name="navigation"></slot>
    </nav>

    <main class="full-container__main">
      <slot name="main"></slot>
    </main>

    <aside class="full-container__l-side-bar">
      <slot name="leftSideBar"></slot>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout'
}
</script>

<style lang="scss" scoped>
.full-container {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: var(--theme-surface);
  overflow-x: hidden;

  &__main {
    width: 100%;
    padding: 8rem 0 2rem;
    background-color: var(--theme-background);
    border-radius: 40px 40px 0 0;
    margin-top: 0.8rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  &__navigation {
    min-width: 8rem;
    z-index: 10;
  }

  &__l-side-bar {
    min-width: 468px;
    padding: 3.6rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
  }

  @include respond-to('medium') {
    flex-direction: column-reverse;
    background-color: var(--theme-background);
    overflow-y: auto;
    // padding-top: 5.4rem;

    &__main {
      padding: 0;
      height: 100%;
      align-items: center;
      margin: 0;
      border-radius: 0;
      gap: 0;
      // overflow-y:visible;
    }

    &__navigation {
      position: fixed;
      bottom: 0;
      max-height: 6.4rem;
      width: 100%;
    }

    &__l-side-bar {
      padding: 0;
      min-width: 0;
      gap: 0;
    }
  }
}
</style>
