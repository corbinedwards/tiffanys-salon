<template>
    <div class="extensions">
        <PageHeader title="Extensions by Hairdreams" />
        <b-img src="https://i.lensdump.com/i/WGhg8T.jpg" fluid center style="margin-bottom: 20px; margin-top:40px;"></b-img>
        <div class="extensions-container">
            <div class="hd-desc">
                <div class="hd-desc-text">
                    Hairdreams uses patented <span class="hd-highlight">NANO technology</span> to invisibly integrate 100% real human hair into your own hair. 
                    <br>
                    <br>
                    Gentle on your hair and installed in a fraction of the time of normal extensions, the result is a <span class="hd-highlight">natural look</span> that transforms your appearance.  
                    <br>
                    <br>
                    Your new hair will be <span class="hd-highlight">longer</span>, <span class="hd-highlight">thicker</span> more <span class="hd-highlight">luxurious</span> and can be <span class="hd-highlight">styled</span>, <span class="hd-highlight">colored</span>, and will <span class="hd-highlight">withstand the rigors of an active lifestyle</span> including fitness and sports.
                    <br>
                    <br>
                    <span class="hd-highlight">Top stylists worldwide use Hairdreams</span> for their celebrity clients like Jennifer Lopez, Kim Kardashian, Reese Witherspoon, and many more, including Victoria Secret models. 
                    <br>
                    <br>
                    Hairdreams NANO extensions are <span class="hd-highlight">ethically sourced</span>, of the <span class="hd-highlight">highest quality</span> and <span class="hd-highlight">stronger</span> than normal extensions.
                    <div class="hd-feature">
                        <p id="hd-action">See the Transformative Effect of Hairdreams NANO</p>
                        <div class="hd-video">
                            <b-embed
                                type="iframe"
                                src="https://www.youtube.com/embed/1Inv2CVlQBw"
                                allowfullscreen
                            >
                            </b-embed>
                        </div>
                    </div>
                </div>
                <div class="feature-media">
                    <div class="image-wrapper">
                        <b-img class="feature-images" src="https://i.lensdump.com/i/WGhjIC.jpg" fluid-grow></b-img>
                    </div>
                    <div class="image-wrapper">
                        <b-img class="feature-images" src="https://i.lensdump.com/i/WGh0B5.jpg" fluid-grow></b-img>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

import PageHeader from "../components/PageHeader.vue";

export default {
  name: "extensions",
  components: {
      PageHeader
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/tiffanyStyle.scss";

.extensions-container{
    font-family: "Montserrat", sans-serif;
    font-size: 1.2em;
    width: 100%;
}

.hd-desc {
    display: flex;
    flex-wrap: wrap;
}

.hd-desc-text {
    margin-bottom: 50px;
    padding: 2em 4em;
    width: 60%;
}

.hd-highlight {
    color: $tiffPink;
    font-weight: bold;
}

.feature-media {
    display: flex;
    flex-direction: column;
    padding-top: 2em;
    width: 40%;
}

.image-wrapper {
    width: 70%;
    margin:auto;
}

.feature-images {
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.15);
    margin: auto;
}

.hd-video {
    width: 100%;
}

.hd-feature {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
}

#hd-action {
    color: $tiffPink;
    font-family: "Satisfy", cursive, sans-serif;
    font-size: 2.0em;
}

@media (max-width: 768px) {
    .hd-desc-text {
        margin-bottom: 50px;
        padding: 2em 1em;
    }

    .feature-media {
        justify-content: flex-start;
    }

    .image-wrapper {
        width: 90%;
    }
}

@media (max-width: 500px) {
    .extensions-container {
        padding: 1em 0.5em;
    }

    .hd-desc-text {
        width: 100%;
        padding: 1em 0.5em;
    }

    .feature-media {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .feature-images {
        width: 90%;
        margin: auto;
    }

    #hd-action {
        font-size: 1.8em;
    }

    .hd-video {
        width: 100%;
        height: auto;
    }
}
</style>
