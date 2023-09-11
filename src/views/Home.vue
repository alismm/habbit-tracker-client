<template>
  <DashboardLayout>
    <template #navigation>
      <NavbarItem>
      </NavbarItem>
    </template>
    <template #main>
      <p>a</p>
    </template>
    <template #leftSideBar>
      <p>a</p>
    </template>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue"
import NavbarItem from "@/common/Navbar.vue"

export default {
  name: 'AppHome',
  components: {
    DashboardLayout,
    NavbarItem
  }
}
</script>
