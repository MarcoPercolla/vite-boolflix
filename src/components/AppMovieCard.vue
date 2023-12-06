<script>
export default {
    name: "AppMovieCard",
    data() {
        return {
            active: true,
        }
    },
    props: {
        film: "",
    }

}
</script>

<template>
    <div class="card" @mouseenter="active = false" @mouseleave="active = true">
        <div class="cardFront">
            <img class="poster" :src="`http://image.tmdb.org/t/p/w500${film.poster_path}`" alt="">

        </div>
        <div class="cardBack" v-if="!active">
            <h1>{{ film.title }}</h1>
            <h5>Lingua:</h5><span>{{ film.original_language }}</span>
            <img class="flag" :src="`../../img/${film.original_language}.svg`" alt="">
            <h3>Titolo originale:</h3><span>{{ film.original_title }}</span>
            <h3>Voto:</h3><span>{{ film.vote_average }}</span>
            <h3>Overview:</h3><span>{{ film.overview }}</span>
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


}

h1 {
    padding: 0.4rem;

}

.cardBack {
    background-color: rgba(255, 0, 0, 0.79);
    position: absolute;
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    top: 0;
    overflow: auto;



}

.flag {
    width: 30%;
    margin: 0.5rem 35%;

}

.poster {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}
</style>
