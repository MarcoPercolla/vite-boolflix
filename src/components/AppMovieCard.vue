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
        <h1>{{ film.title }}</h1>
        <h5>{{ film.original_language }}</h5>
        <img :src="`../../img/${film.original_language}.svg`" alt="">
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

img {
    width: 10%;

}
</style>
