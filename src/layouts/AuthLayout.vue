<template>
  <main class="main-container">
    <div class="frame">
      <slot />
    </div>
  </main>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style lang="scss" scoped>
$gradient-up-color: rgba(255, 255, 255, 0.66);
$gradient-middle-color: rgba(255, 255, 255, 0.82);
$gradient-down-color: $gradient-white;

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--theme-background);
}

.frame {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--theme-surface);
  background-image: linear-gradient(
      $gradient-up-color 56%,
      $gradient-middle-color 1%,
      $gradient-down-color
    ),
    url('@/assets/images/login_background.svg');
  background-repeat: no-repeat;
  filter: drop-shadow(0px 0px 4px #0043650c);
  padding: 4.7rem 6rem 4rem;
  border-radius: 24px;
  background-position-x: center;
  text-align: center;
  gap: 1.6rem;
}
</style>
