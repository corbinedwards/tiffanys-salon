<template>
    <div class="packages">
        <ServicePage title="Special Packages" :menu="$options.packageMenu" />
    </div>
</template>

<script>
import packageDat from "../assets/data/packages.JSON";
import ServicePage from "../components/ServicePage.vue"

export default {
  packageMenu: packageDat,
  name: "packages",
  components: {
      ServicePage
  }
};
</script>

<style>

</style>
