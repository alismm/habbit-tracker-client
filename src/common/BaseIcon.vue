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
  import CalendarIcon from "@/common/icons/CalendarIcon.vue"
  import HomeIcon from "@/common/icons/HomeIcon.vue"
  import FlashIcon from "@/common/icons/FlashIcon.vue"
  import FrameFillIcon from "@/common/icons/FrameFillIcon.vue"
  import Note2Icon from "@/common/icons/Note2Icon.vue"
  import BGIcon from "@/common/icons/BGIcon.vue"
  import WeightFillIcon from "@/common/icons/WeightFillIcon.vue"
  
  const icons = {
    addCircle:AddCircleIcon,
    weight:WeightIcon,
    user:UserIcon,
    lock:LockIcon,
    eyeSlash:EyeSlashIcon,
    arrowRight:ArrowRightIcon,
    calendar:CalendarIcon,
    home:HomeIcon,
    flash:FlashIcon,
    frameFill:FrameFillIcon,
    note2:Note2Icon,
    bg:BGIcon,
    weightFill:WeightFillIcon,
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
  