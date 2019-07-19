<template>
    <div class="cuts">
        <ServicePage title="Cuts & Styles" :menu="$options.cutMenu" />
    </div>
</template>

<script>
import cutDat from "../assets/data/cuts.JSON";
import ServicePage from "../components/ServicePage.vue";

export default {
  cutMenu: cutDat,
  name: "cuts",
  components: {
      ServicePage
  }
};
</script>

<style>

</style>
