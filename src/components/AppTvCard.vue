<script>
export default {
    name: "AppTvCard",
    props: {
        serie: "",
    }
}
</script>

<template>
    <div class="card2">
        <img class="poster" :src="`http://image.tmdb.org/t/p/w500${serie.poster_path}`" alt="">
    </div>
    <div class="cardBack">
        <h1>{{ serie.name }}</h1>
        <h5>{{ serie.original_language }}</h5>
        <img class="flag" :src="`../../img/${serie.original_language}.svg`" alt="">
        <h3>{{ serie.original_name }}</h3>
        <p>{{ serie.popularity }}</p>

    </div>
</template>

<style scoped>
.card2 {
    width: 18rem;
    height: 100%;
    margin: 0 0.5rem;
    flex-shrink: 0;

}

.cardBack {
    background-color: red;
    display: none;
}

.flag {
    width: 10%;

}

.poster {

    height: 100%;
    width: 100%;
}
</style>
