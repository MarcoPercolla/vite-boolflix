<script>
export default {
    name: "AppMovieCard",
    props: {
        film: "",
    }
}
</script>

<template>
    <div class="card">
        <div class="cardFront">
            <img class="poster" :src="`http://image.tmdb.org/t/p/w500${film.poster_path}`" alt="">
            <h1>{{ film.title }}</h1>
        </div>
        <div class="cardBack">

            <h5>{{ film.original_language }}</h5>
            <img class="flag" :src="`../../img/${film.original_language}.svg`" alt="">
            <h3>{{ film.original_title }}</h3>
            <p>{{ film.vote_average }}</p>
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
