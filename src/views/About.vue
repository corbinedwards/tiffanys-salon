<template>
  <div class="about">
    <PageHeader title="About" />
    <div class="about-container">
      <div class="about-text">
        <h2 class="tiffany-about-name">TIFFANY LYONS</h2>
        <h3 style="font-size: 1.7em;">tiffanymlyons@yahoo.com</h3>
        <p class="bio">
          <br>
          Tiffany’s Salon provides a private, tranquil experience to meet your hair and body needs. Servicing both male and female clients, Tiffany’s Salon begins each session with a consultation to understand the client’s needs. Customizing each session to respond to particular requests is the highest priority.
          <br>
          <br>
          Tiffany Lyons is a licensed cosmologist and a licensed professional massage therapist. With nearly 30-years experience, as a massage therapist and almost two decades as a cosmologist, Tiffany has the skill to customize your salon experience.
          <br>
          <br>
          Tiffany is a US Army veteran, an entrepreneur, a single mom, and volunteers with the “Look Good, Feel Better” cancer program at University of Arkansas for Medical Sciences.
        </p>
      </div>
      <div class="about-media">
        <div class="about-img"></div>
        <div class="about-img"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";

export default {
  name: "about",
  components: {
    PageHeader
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/tiffanyStyle.scss";

.about-container {
  padding: 2em 4em;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
}

.tiffany-about-name {
  font-size: 2.5em;
  font-weight: bold;
}

.about-text {
  padding-right: 2em;
}

.bio {
  font-size: 1.1em;
  line-height: 188%;
}

.about-media {
  display: flex;
  flex-direction: column;
}

.about-img {
  background-color: #ccc;
  width: 350px;
  height: 350px;
  margin-bottom: 5px;
}
</style>
