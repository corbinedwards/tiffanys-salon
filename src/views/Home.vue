<template>
  <div class="home">
    <!-- Hero carousel -->
    <div class="hero">
      <b-carousel
        class="d-none d-md-block"
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="400"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-src="https://i.imgur.com/R20P93U.png"></b-carousel-slide>

        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>
      <b-img
        class="d-md-none"
        src="https://i.imgur.com/0u1VUU5.png"
        fluid-grow
        alt="Tiffany's Salon"
      ></b-img>
    </div>

    <!-- Hair Dreams Feature -->

    <!-- Desktop Screen -->
    <div class="home-item d-none d-md-block">
      <h2 class="home-item-title">Featuring Hair Dreams Extensions</h2>
      <div class="hair-dreams-feature">
        <p class="mb-0 hero-item-body" style="padding-right: 1.2em;">
          The Laserbeamer NANO System is the most innovative method to create natural fullness and length in a very gentle manner.
          Hairdreams 100% real human hair combined with patented NANO Technology that “invisibly“ integrates into one‘s own hair.
          You can style your hair as you normally do, but have much more styling possibilities than ever before.
          No matter what you are doing (Sports, Sauna, swimming, etc.)
          your Hairdreams hair can withstand any activity and always look perfect!
          <br>
          <br>
          <b-link href="#" class="hair-dreams-link">Learn More...</b-link>
          <br>
          <br>
        </p>
        <img id="tiffMedia" src="../assets/images/extensions 1.jpeg" width="250" alt="placeholder"></b-img>
        <img slot="aside" src="../assets/images/extensions 2.jpeg" width="250" alt="placeholder"></b-img>
      </div>
    </div>

    <!-- Mobile Screen -->
    <div class="home-item d-md-none">
      <h2 class="home-item-title">Featuring Hair Dreams Extensions</h2>
        <div class="hair-dreams-image" id="hdImg1"></div>
        <p class="mb-0 hero-item-body" style="padding: 1em;">
          The Laserbeamer NANO System is the most innovative method to create natural fullness and length in a very gentle manner.
          Hairdreams 100% real human hair combined with patented NANO Technology that “invisibly“ integrates into one‘s own hair.
          You can style your hair as you normally do, but have much more styling possibilities than ever before.
          No matter what you are doing (Sports, Sauna, swimming, etc.)
          your Hairdreams hair can withstand any activity and always look perfect!
          <br>
          <br>
          <b-link href="#" class="hair-dreams-link">Learn More...</b-link>
          <br>
          <br>
        </p>
        <div class="hair-dreams-image" id="hdImg2"></div>
      </b-media>
    </div>

    <!-- Services Menu -->
    <div class="home-item home-services">
      <h2 class="home-item-title" style="color:black;">Services</h2>
      <div class="menu-row">
        <div class="menu-item">
          <div class="menu-title">EXTENSIONS</div>
          <div class="menu-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <button class="menu-button">LEARN MORE</button>
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
            Private Massages
            <br>Deep Tissue Massages
            <br>Trigger Point Therapy
            <br>Sports Massages
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
        <img id="tiffany-portrait" src="../assets/images/tiffanyPortrait.png" />
        <div id="tiffany-about">
          <h2 id="tiffany-about-name">TIFFANY LYONS</h2>
          <h3 style="font-size: 1.7em;">tiffanymlyons@yahoo.com</h3>
          <br>
          <p class="hero-item-body">
          Tiffany Lyons is a licensed cosmologist and a licensed professional massage therapist.
          With nearly 30-years experience, as a massage therapist and almost two decades as a cosmologist,
          Tiffany has the skill to customize your salon experience.
          <br>
          <br>
          <b-link to="about" class="hair-dreams-link">Learn More...</b-link>
          <br>
          <br>
          </p>
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

.hair-dreams-image {
  width: 100%;
  height: 200px;
  background-repeat:no-repeat;
  background-size: cover;
}

#hdImg1 {
  background-image: url('../assets/images/extensions 1.jpeg');
  background-position: 0px -70px;
}

#hdImg2 {
  background-image: url('../assets/images/extensions 2.jpeg');

}

.hero {
  width: 100%;
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
  font-size: 1em;
  line-height: 188%;
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
  align-content: space-between;
  margin-bottom: 3em;
}

.menu-title {
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
  margin: auto;
}

.menu-body {
  font-size: 1em;
  text-align: center;
  margin: auto;
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
  margin: auto;
}

.tiffany-profile {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
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

#tiffany-about-name {
  font-size: 2.5em;
  font-weight: bold;
}

@media(max-width: 768px) {
  .hair-dreams-feature {
    flex-wrap: wrap;
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

  #tiffany-about {
    width: auto
  }
}

@media (max-width: 500px) {
  .home-item {
    padding: 2em 0 0 0;
  }

  .home-item-title {
    font-size: 3em;
  }

  .tiffany-profile {
    flex-wrap: wrap;
  }

  #tiffany-about {
    width: auto;
  }

  #tiffany-portrait {
    width: 100%;
    border: none;
    box-shadow: none;
  }
}
</style>

