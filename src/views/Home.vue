<template>
  <div class="home">

  <!-- Hero carousel -->

    <div class="hero">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="7000"
        controls
        indicators
        background="#ababab"
        img-width="850"
        img-height="315"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-src="https://i.lensdump.com/i/iA6dkQ.png"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.lensdump.com/i/WGab0c.png"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.lensdump.com/i/WGacF1.jpg"></b-carousel-slide>
      </b-carousel>
    </div>

  <!-- Hair Dreams Feature -->

    <!-- Desktop Screen -->
    <div class="home-item d-md-block">
      <h2 class="home-item-title">Featuring Hairdreams&#174; Extensions</h2>
      <div class="hair-dreams-feature">
        <p class="mb-0 hero-item-body">
          The Laserbeamer NANO System is the most innovative method to create natural fullness and length in a very gentle manner.
          Hairdreams 100% real human hair combined with patented NANO Technology that “invisibly“ integrates into one‘s own hair.
          You can style your hair as you normally do, but have many more styling possibilities than ever before.
          No matter what you are doing (Sports, Sauna, swimming, etc.)
          your Hairdreams hair can withstand any activity and always look perfect!
          <br>
          <br>
          <b-link to="extensions" class="hair-dreams-link">Learn More...</b-link>
          <br>
          <br>
        </p>
        <img src="https://i.lensdump.com/i/WaiiMc.png" width="250" height="332" alt="Hair Dreams Model">
        <img src="https://i.lensdump.com/i/WGawBK.jpg" width="250" height="332" alt="Hair Dreams Model">
      </div>
    </div>

    <!-- Mobile Screen -->
    <!-- <div class="home-item d-md-none">
      <h2 class="home-item-title">Featuring Hairdreams&#174; Extensions</h2>
      <div class="hair-dreams-feature">
        <p class="mb-0 hero-item-body" style="padding: 1em;">
          The Laserbeamer NANO System is the most innovative method to create natural fullness and length in a very gentle manner.
          Hairdreams 100% real human hair combined with patented NANO Technology that “invisibly“ integrates into one‘s own hair.
          You can style your hair as you normally do, but have many more styling possibilities than ever before.
          No matter what you are doing (Sports, Sauna, swimming, etc.)
          your Hairdreams hair can withstand any activity and always look perfect!
          <br>
          <br>
          <b-link to="extensions" class="hair-dreams-link">Learn More...</b-link>
          <br>
          <br>
        </p>
        <div class="hair-dreams-image" id="hdImg2"></div>
      </div>
    </div> -->

  <!-- Services Menu -->
    <div class="home-item home-services">
      <h2 class="home-item-title" style="color:black;">Services</h2>
      <div class="menu-row">
        <div class="menu-item">
          <div class="menu-title">EXTENSIONS</div>
          <div class="menu-body">
            Extensions by Hairdreams&#174;
            <br>NANO Technology
          </div>
          <router-link to="/extensions">
            <button class="menu-button">LEARN MORE</button>
          </router-link>
        </div>
        <div class="menu-item">
          <div class="menu-title">CUTS & STYLING</div>
          <div class="menu-body">
            Women's, Men's, and Children's Cuts
            <br>Updos
            <br>Perms
            <br>Coloring
            <br>And More
          </div>
          <router-link to="/cuts">
            <button class="menu-button">VIEW MENU</button>
          </router-link>
        </div>
        <div class="menu-item">
          <div class="menu-title">MASSAGES</div>
          <div class="menu-body">
            Swedish
            <br>Deep Tissue
            <br>Trigger Point Therapy
            <br>Sports
            <br>And More
          </div>
          <router-link to="/massages">
            <button class="menu-button" to="/massages">VIEW MENU</button>
          </router-link>
        </div>
        <div class="menu-item">
          <div class="menu-title">SPECIAL PACKAGES</div>
          <div class="menu-body">
            Weddings, Proms, and Homecomings
            <br>Mother/Daughter Time
            <br>Spa for Men
          </div>
          <router-link to="/packages">
            <button class="menu-button" to="/packages">LEARN MORE</button>
          </router-link>
        </div>
        <div class="menu-item">
          <div class="menu-title">OTHER SERVICES</div>
          <div class="menu-body">
            Waxing
            <br>Eyebrows
            <br>Eyelashes
            <br>Body Hair Trims
            <br>And More
          </div>
          <router-link to="other_services">
            <button class="menu-button">VIEW MENU</button>
          </router-link>
        </div>
      </div>
    </div>

  <!-- Meet Your Stylist-->
    <div class="home-item">
      <h2 class="home-item-title" style="color:black;">Meet Your Stylist</h2>
      <div class="tiffany-profile">
        <div class="portrait-wrapper">
          <b-img id="tiffany-portrait" fluid src="https://i.lensdump.com/i/i8t3f5.jpg"></b-img>
        </div>
        <div id="tiffany-about">
          <div class="hero-item-body">
             <h2 class="tiffany-about-name">TIFFANY LYONS</h2>
              <a id="tiffany-email" href="mailto: tiffanys.salon@yahoo.com">tiffanys.salon@yahoo.com</a>
          <br>
          <br>
          Tiffany Lyons is a licensed cosmologist and a licensed professional massage therapist.
          With nearly 30-years experience, as a massage therapist and almost two decades as a cosmetologist,
          Tiffany has the skill to customize your salon experience.
          <br>
          <br>
          <b-link to="about" class="hair-dreams-link">Learn More...</b-link>
          <br>
          <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      slide: 0,
      sliding: null,
      dreamPic1: null,
      dreamPic2: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  created: function(){

  }
};
</script>

<style lang="scss" scoped>
@import "../assets/tiffanyStyle.scss";
@import url("https://fonts.googleapis.com/css?family=Satisfy&display=swap");
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.hair-dreams-image {
  width: 100%;
  height: 200px;
  background-repeat:no-repeat;
  background-size: cover;
}

.hero {
  width: 100%;
  margin-top: 65px;
}

.home-item {
  width: 100%;
  padding: 2em;
  box-shadow: 0, 10px, 4px;
}

.home-item-title {
  font-family: "Satisfy", cursive, sans-serif;
  font-size: 4em;
  text-align: center;
  margin-bottom: 40px;
  color: $tiffPink;
}

.hero-item-body {
  font-family: "Montserrat", sans-serif;
  font-size: 1.1em;
  line-height: 188%;
  padding-right: 1.2em;
}

.hair-dreams-feature {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.hair-dreams-link {
  font-weight: bold;
  font-size: 1.1em;
  text-decoration: underline;
  color: $tiffPink;
}

#tiffMedia {
  margin-right: 10px;
}

.home-services {
  background-image: url("../assets/images/pinkbg.png");
}

.menu-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.menu-item {
  font-family: "Montserrat", sans-serif;
  width: 375px;
  height: 375px;
  padding: 25px 37px;
  background-color: white;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3em;
}

.menu-title {
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
}

.menu-body {
  font-size: 1em;
  text-align: center;
  line-height: 230%;
}

.menu-button {
  background-color: $tiffPink;
  color: white;
  font-weight: bold;
  text-align: center;
  width: 100%;
  padding: 10px;
  font-size: 1.1em;
  border: none;
}


.tiffany-profile {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}

.portrait-wrapper {
  width: 300px;
  height: auto;
}

#tiffany-portrait {
  border: 15px solid white;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.15);
}

#tiffany-about {
  font-family: "Montserrat", sans-serif;
  width: 50%;
  padding: 1em;
}

.tiffany-about-name {
  font-size: 2.5em;
  font-weight: bold;
  color: $tiffPink;
}

#tiffany-email {
  font-size: 1.3em;
  text-decoration: underline;
}

#tiffany-email:hover {
  color: black;
}

@media(max-width: 1024px) {
  .hair-dreams-feature {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .home-services {
    padding: 2em 0;
  }

  .menu-row {
    justify-content: center;
  }

  .tiffant-profile {
    flex-wrap: wrap;
  }

}

@media (max-width: 500px) {
  .home-item {
    padding: 2em 0em;
  }

  .home-item-title {
    font-size: 3em;
  }

  .hero-item-body {
    padding: 1em;
  }

  .hair-dreams-feature {
    flex-wrap: wrap;
  }

  .tiffany-profile {
    flex-direction: column-reverse;
    justify-content: center;
  }

  #tiffany-about {
    width: auto;
    padding: 1em 0;
  }

  .portrait-wrapper {
    margin:auto;
  }

  #tiffany-portrait {
    width: 100%;
    border: none;
    box-shadow: none;
  }
}
</style>

