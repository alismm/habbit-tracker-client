<template>
    <component :is="iconComponent" />
  </template>
  
  <script>

  import AddCircleIcon from "@/common/icons/AddCircleIcon.vue"
  import WeightIcon from "@/common/icons/WeightIcon.vue"
  import NoteFillIcon from "@/common/icons/NoteFillIcon.vue"
  import NoteIcon from "@/common/icons/NoteIcon.vue"  
  import CalenderIcon from "@/common/icons/CalenderIcon.vue"
  import ClockIcon from "@/common/icons/ClockIcon.vue"
  import DocumentIcon from "@/common/icons/DocumentIcon.vue"
  import UserIcon from "@/common/icons/UserIcon.vue"
  import LockIcon from "@/common/icons/LockIcon.vue"
  import EyeSlashIcon from "@/common/icons/EyeSlashIcon.vue"
  import ArrowRightIcon from "@/common/icons/ArrowRightIcon.vue"
  import ArrowLeftIcon from "@/common/icons/ArrowLeftIcon.vue"
  import CalendarIcon from "@/common/icons/CalendarIcon.vue"
  import HomeIcon from "@/common/icons/HomeIcon.vue"
  import FlashIcon from "@/common/icons/FlashIcon.vue"
  import FrameFillIcon from "@/common/icons/FrameFillIcon.vue"
  import Note2Icon from "@/common/icons/Note2Icon.vue"
  import BGIcon from "@/common/icons/BGIcon.vue"
  import WeightFillIcon from "@/common/icons/WeightFillIcon.vue"
  import ArrowDownIcon from "@/common/icons/ArrowDown.vue"
  import BulletIcon from "@/common/icons/Bullet.vue"
  import VectorIcon from "@/common/icons/Vector.vue"

  const icons = {
    addCircle:AddCircleIcon,
    weight:WeightIcon,
    noteFill:NoteFillIcon,
    note:NoteIcon,
    calender:CalenderIcon,
    clock:ClockIcon,
    Document:DocumentIcon,
    user:UserIcon,
    lock:LockIcon,
    eyeSlash:EyeSlashIcon,
    arrowRight:ArrowRightIcon,
    arrowLeft:ArrowLeftIcon,
    calendar:CalendarIcon,
    home:HomeIcon,
    flash:FlashIcon,
    frameFill:FrameFillIcon,
    note2:Note2Icon,
    bg:BGIcon,
    weightFill:WeightFillIcon,
    ArrowDown:ArrowDownIcon,
    Bullet:BulletIcon,
    vector:VectorIcon,
  };
  
  export default {
    name: "BaseIcon",
    props: {
      name: {
        type: String,
        required: true,
        // validator(value) {
        //   return Object.prototype.hasOwnProperty.call(value, icons);
        // },
      },
    },
    computed: {
      iconComponent() {
        return icons[this.name];
      },
    },
  };
  </script>
  