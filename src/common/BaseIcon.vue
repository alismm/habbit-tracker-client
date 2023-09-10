<template>
    <component :is="iconComponent" />
  </template>
  
  <script>

  import AddCircleIcon from "@/common/icons/AddCircleIcon.vue"
  import WeightIcon from "@/common/icons/WeightIcon.vue"
  
  const icons = {
    addCircle:AddCircleIcon,
    weight:WeightIcon,
  };
  
  export default {
    name: "BaseIcon",
    props: {
      name: {
        type: String,
        required: true,
        validator(value) {
          return Object.prototype.hasOwnProperty.call(value, icons);
        },
      },
    },
    computed: {
      iconComponent() {
        return icons[this.name];
      },
    },
  };
  </script>
  