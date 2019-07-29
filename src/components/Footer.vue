<template>
<footer class="footer">
    <span>Copyright © 2019 Tiffany Lyons. All rights reserved. <br> Financial Centre Pkwy, Little Rock, Arkansas <br> 501-744-0406</span>
</footer>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style lang="scss" scoped>
@import "../assets/tiffanyStyle.scss";
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: $tiffPink;
  color: white;
  font-family: "Montserrat", sans-serif;
  padding: 1em 2em;
  text-align: center;
}

</style>