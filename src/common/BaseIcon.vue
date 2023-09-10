<template>
    <component :is="iconComponent" />
  </template>
  
  <script>

  import AddCircleIcon from "@/common/icons/AddCircleIcon.vue"
  import WeightIcon from "@/common/icons/WeightIcon.vue"
  import UserIcon from "@/common/icons/UserIcon.vue"
  import LockIcon from "@/common/icons/LockIcon.vue"
  import EyeSlashIcon from "@/common/icons/EyeSlashIcon.vue"
  import ArrowRightIcon from "@/common/icons/ArrowRightIcon.vue"
  
  const icons = {
    addCircle:AddCircleIcon,
    weight:WeightIcon,
    user:UserIcon,
    lock:LockIcon,
    eyeSlash:EyeSlashIcon,
    arrowRight:ArrowRightIcon,
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
  