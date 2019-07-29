<template>
    <div class="menu">
        <div class="menu-desc">{{ menu.desc }}</div>
        <div class="menu-items">
            <div class="section-block" v-for="item in menu.items">
                <span class="section-title">{{item.title}}</span>
                <br>
                <p class="section-desc">{{ item.itemDesc }}</p>
                <ul class="section-products" v-for="prod in item.prices">
                    <li class="product">
                        <span class="product-title">{{ prod.product }}</span>
                        <span style="float:right;">{{ prod.price }}</span>
                        <br>
                        <span style="font-size:0.8em;font-style:italic;">{{prod.productDesc}}</span>
                    </li>
                </ul>
                <div class="section-footer">{{item.itemFooter}}</div>
            </div>
        </div>
        <div class="menu-footer">{{ menu.footer }}</div>
    </div>
</template>

<script>
export default {
  name: "menu",
  props: ["menu"]
};
</script>

<style lang="scss" scoped>
@import "../assets/tiffanyStyle.scss";
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.menu {
    font-family: "Montserrat", sans-serif;
    padding: 2em 2em;
}

.menu-desc, .menu-footer {
    line-height: 188%;
    font-size: 1.1em;
}

.menu-items {
    padding: 2em 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.section-block {
    padding: 1em 2em;
    border-left: 2px solid #ffc2d5;
    flex: 1 0 33%;
}

.section-title {
    font-family: "Satisfy", cursive, sans-serif;
    color: black;
    font-size: 2.2em;
    text-align: center;
}

.section-desc {
    margin-top: 5px;
    line-height: 188%;
}

.section-products {
    padding: 0;
    list-style-type: none;
}

.product {
    font-size: 1.1em;
}

.product-title {
    color: $tiffPink;
    /* text dec underline */
}

@media(max-width: 768px) {
    .section-block {
        flex: 1 0 50%;
    }
}

@media (max-width: 500px) {
    .menu {
        padding: 2em 1em;
    }
    .menu-items {
        flex-direction: column;
        padding: 2em 0;
    }

    .section-block {
        border-left: 0;
        border-bottom: 2px solid #ffc2d5;
        padding: 1em 0;
    }
}

</style>
