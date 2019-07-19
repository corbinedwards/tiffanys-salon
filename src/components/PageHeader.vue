<template>
    <div class="page-header">
        {{ title }}
    </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: ['title']
};
</script>

<style lang="scss" scoped>
@import "../assets/tiffanyStyle.scss";

.page-header {
    margin-top: 65px;
    width: 100%;
    padding: 20px;
    text-align: center;
    font-family: "Satisfy", cursive, sans-serif;
    font-size: 3em;
    color: $tiffPink;
    background-image: url("../assets/images/light bg.png");
}
</style>