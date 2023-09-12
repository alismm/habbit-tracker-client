<template>
  <nav class="navbar">
    <div class="icon-menu">
      <div class="icon-menu__icon-container">
        <routerLink to="/">
          <BaseIcon
            class="icon-menu__home-icon"
            name="home"
            :class="{ 'icon-menu_active': this.$route.name == 'home'}"
          ></BaseIcon>
        </routerLink>
        <routerLink to="/event">
          <BaseIcon
            class="icon-menu__flash-icon"
            name="flash"
            :class="{ 'icon-menu_active': this.$route.name == 'event'}"
          ></BaseIcon>
        </routerLink>
      </div>

      <div class="icon-menu__icon-container">
        <routerLink to="/activities">
          <BaseIcon
            class="icon-menu__note2-icon"
            name="note2"
            :class="{ 'icon-menu_active': this.$route.name == 'activities'}"
          ></BaseIcon>
        </routerLink>
        <routerLink to="/profile">
          <BaseIcon
            class="icon-menu__frameFill-icon"
            name="frameFill"
            :class="{ 'icon-menu_active': this.$route.name == 'profile'}"
          ></BaseIcon>
        </routerLink>
      </div>
    </div>

    <BaseIcon
      class="icon-menu__add-icon"
      name="addCircle"
      @click.prevent="toggleAddActivity"
      :class="{ rotate: addActivityOpen }"
    ></BaseIcon>
  </nav>

  <div class="add-activity" v-show="addActivityOpen">
    <span class="add-activity__flash">
      <BaseIcon
        width="2.8rem"
        height="2.8rem"
        color="var(--theme-warning-main)"
        name="flash"
      ></BaseIcon>
    </span>
    <span @click="openModalCreateActivityType" class="add-activity__weight">
      <BaseIcon
        width="2.8rem"
        height="2.8rem"
        color="var(--theme-info-main)"
        name="weightFill"
      ></BaseIcon>
    </span>
    <span @click="openModalCreateActivity" class="add-activity__note2">
      <BaseIcon
        width="2.8rem"
        height="2.8rem"
        color="var(--theme-caution-main)"
        name="note2"
      ></BaseIcon>
    </span>
  </div>
  
<div class="backdrop-modal" v-show="ModalStore.isOpenCreateActivityType" ref="backdropCreateActivityType" @click="cancelModalCreateActivityType">
  <CreateActivityType >
  </CreateActivityType>
</div>
<div  class="backdrop-modal" v-show="ModalStore.isOpenCreateActivity" ref="backdropCreateActivity" @click="cancelModalCreateActivity">
  <CreateActivity >
  </CreateActivity>
</div>


</template>

<script>
import BaseIcon from '@/common/BaseIcon.vue'
import CreateActivityType from "@/common/Modals/CreateActivityType.vue"
import CreateActivity from "@/common/Modals/CreateActivity.vue"
import { mapStores } from 'pinia'
import useModalStore from '@/stores/Modal'
export default {
  name: 'NavbarItem',
  data() {
    return {
      addActivityOpen: false,
      isOpenCreateActivityType:false,
      isOpenCreateActivity:false
    }
  },
  components: {
    BaseIcon,
    CreateActivityType,
    CreateActivity
  },
  computed: {
    ...mapStores(useModalStore)
  },
  methods: {
    toggleAddActivity() {
      this.addActivityOpen = !this.addActivityOpen;
    },
    openModalCreateActivityType(){
      this.ModalStore.isOpenCreateActivityType=!this.ModalStore.isOpenCreateActivityType;
      this.addActivityOpen= false;
      console.log(this.ModalStore.isOpenCreateActivityType);
    },
    openModalCreateActivity(){
      this.ModalStore.isOpenCreateActivity=!this.ModalStore.isOpenCreateActivity;
      this.addActivityOpen= false;
      console.log(this.ModalStore.isOpenCreateActivity);
    },
    cancelModalCreateActivity(e){
    if(this.$refs.backdropCreateActivity==e.target){
      this.ModalStore.isOpenCreateActivity=false;
    }
    },
    cancelModalCreateActivityType(e){
    if(this.$refs.backdropCreateActivityType==e.target){
      this.ModalStore.isOpenCreateActivityType=false;
    }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 8.6rem 1.2rem 17rem;
  z-index: 10;

  @include respond-to('medium') {
    position: fixed;
    bottom: 0;
    max-height: 6.4rem;
    width: 100vw;
    background-image: linear-gradient(
        to right,
        #{$gradient-white},
        #{$gradient-white} 35%,
        #{$gradient-transparent} 36%,
        #{$gradient-transparent} 65%,
        #{$gradient-white} 66%,
        #{$gradient-white} 100%
      ),
      url('@/assets/images/BG.svg');
    background-position: bottom;
    background-repeat: no-repeat;
    border-radius: 24px 24px 0 0;
    filter: drop-shadow(0px -2px 24px rgba(0, 0, 0, 0.08));
    padding: 1.8rem 3.2rem;
    width: 100vw;
    max-height: 6.4rem;
  }
}

.icon-menu {
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  &__icon-container {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
  }

  &__add-icon {
    z-index: 10;
    cursor: pointer;
    min-height: 5.6rem;
  }

  &__frameFill-icon {
    display: none;
  }

  &__home-icon,
  &__flash-icon,
  &__note2-icon,
  &__frameFill-icon {
    width: 3.2rem;
    height: 3.2rem;
    fill: var(--theme-text-primary-200);
  }

  &_active {
    fill: var(--theme-primary-600);
  }

  @include respond-to('medium') {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    &__icon-container {
      flex-direction: row;
      justify-content: space-between;
      width: 30%;
    }

    &__frameFill-icon {
      display: inline-block;
    }

    &__add-icon {
      position: absolute;
      right: calc(50% - 2.8rem);
      left: calc(50% - 2.8rem);
      bottom: 3.6rem;
    }

    &__home-icon,
    &__flash-icon,
    &__note2-icon,
    &__frameFill-icon {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
}
.backdrop-modal{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: rgba(53, 46, 46, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  overflow-y: auto;
}
.add-activity {
  position: fixed;
  top: 0;
  background-color: rgba(53, 46, 46, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 2;

  &__flash,
  &__weight,
  &__note2 {
    padding: 1.8rem;
    background-color: var(--theme-surface);
    border-radius: 16px;
    max-width: 6.4rem;
  }

  &__flash {
    position: absolute;
    bottom: 32.7rem;
    right: 1.6rem;
  }

  &__weight {
    position: absolute;
    bottom: 29.5rem;
    right: 11.7rem;
  }

  &__note2 {
    position: absolute;
    bottom: 18.4rem;
    right: 17.8rem;
  }

  @include respond-to('medium') {
    &__flash {
      bottom: 15.6rem;
      right: calc(23.3% + 3.2rem);
      left: calc(68.8% - 6.4rem);
    }

    &__weight {
      bottom: 26.4rem;
      right: calc(50% - 3.2rem);
    }

    &__note2 {
      bottom: 15.6rem;
      left: calc(23.3% - 3.2rem);
      right: calc(68.8% - 3.2rem);
    }
  }
}

.rotate {
  transform: rotate(45deg);
}
</style>
