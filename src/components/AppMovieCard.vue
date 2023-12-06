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
        <div class="cardFront" v-if="active">
            <img class="poster" :src="`http://image.tmdb.org/t/p/w500${film.poster_path}`" alt="">

        </div>
        <div class="cardBack" v-if="!active">
            <h1>{{ film.title }}</h1>
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


}

h1 {
    padding: 0.4rem;

}

.cardBack {
    background-color: blue;
    position: absolute;
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    top: 0;



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
