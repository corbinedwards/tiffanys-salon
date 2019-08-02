<template>
    <div id="page-not-found">
        <h1 id="error-message">Error 404: Page Not Found</h1>
        <br>
        <b-link id="return-link" to="/">Return to home >>></b-link>
    </div>
</template>

<script>
export default {
    name: "error404"
}
</script>

<style lang="scss" scoped>
@import "../assets/tiffanyStyle.scss";
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

#page-not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
}

#error-message {
    margin-top: 100px;
    color: $tiffPink;
    font-size: 2em;
    text-align: center;
    font-size: 3em;
    font-weight: bold;
}

#return-link {
    font-size: 1.5em;
}


</style>
