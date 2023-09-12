<template>
  <DashboardLayout>
    <template #navigation>
      <NavbarItem>
      </NavbarItem>
    </template>
    <template #main>
      <report></report>
    </template>
    <template #leftSideBar>
      <p>a</p>
    </template>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue"
import NavbarItem from "@/common/Navbar.vue"
import report from "@/modules/home/components/report.vue"

export default {
  name: 'AppHome',
  components: {
    DashboardLayout,
    NavbarItem,
    report
  }
}
</script>
