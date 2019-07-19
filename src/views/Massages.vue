<template>
    <div class="massages">
        <ServicePage title="Massages" :menu="$options.massageMenu" />
    </div>
</template>

<script>
import massageDat from "../assets/data/massages.JSON";
import ServicePage from "../components/ServicePage.vue"

export default {
  massageMenu: massageDat,
  name: "massages",
  components: {
      ServicePage
  }
};
</script>

<style>

</style>
