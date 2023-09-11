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
  const icons = {
    addCircle:AddCircleIcon,
    weight:WeightIcon,
    noteFill:NoteFillIcon,
    note:NoteIcon,
    calender:CalenderIcon,
    clock:ClockIcon,
    Document:DocumentIcon
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
  