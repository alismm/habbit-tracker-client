<script >
  import CreateActivityType from './modules/create-activity-type/CreateActivityType.vue'
  export default {
  components: {
    CreateActivityType
  }
}
</script>

<template>
<CreateActivityType/>
</template>
<style lang="scss">
html {
  font-size: #{$html-font-size};
}

body {
  font-family: #{$normal-font-family};
}
</style>