<template>
    <div class="other">
        <ServicePage title="Facials, Brows, & Other Services" :menu="$options.otherMenu" />
    </div>
</template>

<script>
import otherDat from "../assets/data/other.JSON";
import ServicePage from "../components/ServicePage.vue"

export default {
  otherMenu: otherDat,
  name: "other",
  components: {
      ServicePage
  }
};
</script>

<style>

</style>
