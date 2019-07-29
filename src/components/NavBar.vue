<template>
  <nav class="navbar navbar-expand-lg fixed-top justify-content-center">
    <a href="/" class="navbar-brand d-flex w-40 mr-auto" id="tiffBrand">Tiffany's Salon</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsingNavbar3"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
      <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
        <li class="nav-item tiffNavItem">
          <b-link data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-link" to="/">HOME</b-link>
        </li>
        <li class="nav-item dropdown tiffNavItem">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">SERVICES</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <b-link data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" to="cuts">CUTS</b-link>
            <b-link data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" to="extensions">EXTENSIONS</b-link>
            <b-link data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" to="massages">MASSAGES</b-link>
            <b-link data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" to="other_services">FACIALS, BROWS, AND OTHER</b-link>
            <b-link data-toggle="collapse" data-target=".navbar-collapse.show" class="dropdown-item" to="packages">PACKAGES</b-link>
          </div>
        </li>
        <li class="nav-item tiffNavItem">
          <b-link data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-link" to="about">ABOUT</b-link>
        </li>
        <li class="nav-item tiffNavItem">
          <b-link data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-link" to="contact">CONTACT</b-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style lang="scss" scoped>
@import "../assets/tiffanyStyle.scss";
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800&display=swap');

.navbar,
.navbar-expand-lg {
  background-color: $tiffPink;
  color: white;
  padding-left: 2em !important;
  padding-right: 2em !important;
}

#tiffBrand {
  font-family: "Satisfy", cursive;
  font-size: 20pt;
  letter-spacing: 0.05em;
}

.tiffNavItem {
  color: white;
  font-family: "Montserrat";
  font-size: 16pt;
  font-weight: bold;
  margin-right: 3%;
}

a:link,
a:visited,
a:active {
  color: white;
}

a:hover {
  color: #f0f0f0;
}

.navbar-toggler {
    border-color: rgb(255,255,255);
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.dropdown-menu {
  background-color: $tiffPink;
  color: white;
}

.dropdown-item:hover {
  color: $tiffPink;
}

.dropdown-item:active {
  color: $tiffPink;
  background-color: #e7e7e7;
}
</style>
