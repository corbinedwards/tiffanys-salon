<template>
  <div class="about">
    <PageHeader title="About" />
    <div class="about-container">
      <div class="about-text">
        <h2 class="tiffany-about-name">TIFFANY LYONS</h2>
        <a id="tiffany-email" href="mailto: tiffanys.salon@yahoo.com">tiffanys.salon@yahoo.com</a>
        <h3 style="font-size: 1.7em;">501-744-0406</h3>
        <p class="bio">
          <br>
          Tiffany’s Salon provides a private, tranquil experience to meet your hair and body needs. Servicing both male and female clients, Tiffany’s Salon begins each session with a consultation to understand the client’s needs. Customizing each session to respond to particular requests is the highest priority.
          <br>
          <br>
          Tiffany Lyons is a licensed cosmologist and a licensed professional massage therapist. With nearly 30-years experience, as a massage therapist and almost two decades as a cosmologist, Tiffany has the skill to customize your salon experience.
          <br>
          <br>
          Tiffany is a US Army veteran, an entrepreneur, a single mom, and volunteers with the cancer program at University of Arkansas for Medical Sciences.
          <br>
          <br>
          <b-link to="contact" id="contact-link">Contact</b-link>
        </p>
      </div>
      <div class="about-media">
        <b-img id="about-portrait" src="https://i.lensdump.com/i/WGaaei.png" fluid></b-img>
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
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.about-container {
  padding: 2em 4em;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
}

.tiffany-about-name {
  font-size: 2.5em;
  font-weight: bold;
  color: $tiffPink;
}

.about-text {
  padding-right: 2em;
}

#about-portrait {
  border: 10px solid white;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.15);
}

.bio {
  font-size: 1.1em;
  line-height: 188%;
}

.about-media {
  display: flex;
  flex-direction: column;
}

#tiffany-email {
  font-size: 1.7em;
  text-decoration: underline;
}

#tiffany-email:hover {
  color: black;
}

// .about-img {
//   background-color: #ccc;
//   width: 350px;
//   height: 350px;
//   margin-bottom: 5px;
// }

#contact-link {
  font-weight: bold;
  font-size: 1.1em;
  text-decoration: underline;
  color: $tiffPink;
}

@media(max-width: 1024px) {
  .about-container {
    padding: 2em 1em;
  }

  .about-text {
    width: 70%;
  }
}

@media (max-width: 500px) {
  .about-container {
    flex-direction: column;
    padding: 2em 0.5em;
  }

  .about-text {
    width: 100%;
  }
}
</style>
