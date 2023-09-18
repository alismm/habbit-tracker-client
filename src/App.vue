<template>
  <div :theme="this.themeStore.theme">
    <router-view></router-view>
    <!-- <button class="change-theme" @click="toggleTheme">Change Theme</button> -->
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import useThemeStore from '@/stores/theme'

export default {
  name: 'App',
  computed: {
    ...mapStores(useThemeStore)
  },
  methods: {
    toggleTheme() {
      this.themeStore.theme = this.themeStore.theme == 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: #{$html-font-size};
}

body {
  overflow-x: hidden;
  font-family: #{$normal-font-family};
}

.change-theme {
  position: absolute;
  top: 10px;
  right: 48%;
  padding: 10px;
}
</style>
