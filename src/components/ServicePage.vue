<template>
    <div class="service-page">
        <PageHeader :title="title"/>
        <Menu :menu="menu" />
    </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import Menu from "../components/Menu.vue"

export default {
  name: "service-page",
  components: {
      PageHeader,
      Menu
  },
  props: ["title", "menu"]
};
</script>

<style lang="scss" scoped>
@import "../assets/tiffanyStyle.scss";
</style>
