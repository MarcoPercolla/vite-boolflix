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
        <img class="poster" :src="`http://image.tmdb.org/t/p/w500${film.poster_path}`" alt="">
        <h1>{{ film.title }}</h1>
        <h5>{{ film.original_language }}</h5>
        <img class="flag" :src="`../../img/${film.original_language}.svg`" alt="">
        <h3>{{ film.original_title }}</h3>
        <p>{{ film.vote_average }}</p>

    </div>
</template>

<style scoped>
.card {
    width: 23%;
    height: 90%;
    margin: 0.5rem;
    background-color: blue;
    flex-shrink: 0;
    overflow-x: auto;

}

.flag {
    width: 10%;
    margin: 0.5rem 42.5%;

}

.poster {
    width: 100%
}
</style>
