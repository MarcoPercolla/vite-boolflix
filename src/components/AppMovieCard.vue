<script>
import { store } from "../store.js";
export default {
    name: "AppMovieCard",
    data() {
        return {
            active: true,
            store
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
            <img v-if="film.poster_path" class="poster" :src="`http://image.tmdb.org/t/p/w500${film.poster_path}`" alt="">
            <img v-else class="poster" src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif" alt="">

        </div>
        <div class="cardBack" v-if="!active">
            <h1>{{ film.title }}</h1>
            <h5>Lingua:</h5>
            <span v-if="!this.store.lingue.includes(film.original_language)">{{ film.original_language }}</span>
            <img class="flag" :src="`../../img/${film.original_language}.svg`" alt="">
            <h3>Titolo originale:</h3><span>{{ film.original_title }}</span>
            <h3>Voto: </h3>
            <span v-for="n in Math.ceil(0.1 + film.vote_average / 2)">
                <font-awesome-icon class="yellow" icon="fa-solid fa-star" />
            </span>
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

h1 {
    text-align: center;
    padding: 0.4rem;
}

h3 {
    margin-top: 0.5rem;
}

.cardFront {
    height: 100%;


}


.yellow {
    color: yellow;
}


.cardBack {
    background-color: rgba(255, 0, 0, 0.79);
    padding: 0.3rem;
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
