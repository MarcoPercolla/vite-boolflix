<script>
export default {
    name: "AppTvCard",
    props: {
        serie: "",
    }
}
</script>

<template>
    <div class="card">
        <div class="cardFront">
            <img class="poster" :src="`http://image.tmdb.org/t/p/w500${serie.poster_path}`" alt="">
            <h1>{{ serie.name }}</h1>
        </div>
        <div class="cardBack">
            <h5>{{ serie.original_language }}</h5>
            <img class="flag" :src="`../../img/${serie.original_language}.svg`" alt="">
            <h3>{{ serie.original_name }}</h3>
            <p>{{ serie.popularity }}</p>

        </div>

    </div>
</template>

<style scoped>
.card {
    width: 18rem;
    height: 50vh;
    margin: 0 0.5rem;


    flex-shrink: 0;
    position: relative;
}

.cardFront {
    height: 100%;
    position: relative;

}

h1 {
    position: absolute;
    bottom: 0;
    background-color: rgba(240, 248, 255, 0.28);
    width: 100%;
    border-radius: 0 0 1rem 1rem;
    padding-bottom: 0.2rem;

}

.cardBack {
    background-color: blue;
    position: absolute;
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    top: 0;
    display: none;

}

.flag {
    width: 10%;
    margin: 0.5rem 42.5%;

}

.poster {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}
</style>
