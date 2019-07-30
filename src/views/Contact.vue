<template>
    <div class="contact">
        <PageHeader title="Contact" />
        <div class="contact-container">
            <div class="contact-block map">
                <iframe id="map" width="500" height="500" frameborder="0" style="border:0; float:right;" src="https://www.google.com/maps/embed/v1/place?q=place_id:EjFGaW5hbmNpYWwgQ2VudHJlIFBrd3ksIExpdHRsZSBSb2NrLCBBUiA3MjIxMSwgVVNBIi4qLAoUChIJH0DQV7Sm0ocRjnS4a1D6Vx0SFAoSCZtWH6E0odKHERdb8w0Q9QU0&key=AIzaSyC9wm-VVyDvT7BreM841jhSowabQ95iYvY" allowfullscreen></iframe>
            </div>
            <div class="contact-block contact-info">
                <img id="logo" src="../assets/images/logo render.png" style="margin-bottom: 30px;">
                <hr>
                <div class="contact-segment">
                    Financial Centre Pkwy
                    <br>Little Rock, Arkansas 72211
                </div>
                <hr />
                <div class="contact-segment">501-744-0406</div>
                <div class="contact-segment">tiffanys.salon@yahoo.com</div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
export default {
    name: "contact",
    components: {
        PageHeader
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/tiffanyStyle.scss";
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

hr {
    color: $tiffPink;
}

.contact-container {
    padding: 2em 4em;
    display: flex;
    flex-direction: row;
    align-content: center;
}

.contact-block {
    margin-right: 40px;
    width: 50%;
}

.contact-segment {
    font-family: "Montserrat", sans-serif;
    font-size: 1.3em;
    line-height: 200%;
}

#logo {
        width: 100%;
        height: auto;
    }

@media (max-width: 500px) {
    .contact-container {
        flex-direction: column-reverse;
        align-content: flex-start;
        padding: 2em 0.5em;
    }
    .contact-block {
        width: 100%;
    }
    #map {
        width: 100%;
    }
    
}
</style>
