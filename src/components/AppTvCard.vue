<script>
import { store } from "../store.js";
export default {
    name: "AppTvCard",
    data() {
        return {
            store
        }
    },
    props: {
        serie: "",
    }
}
</script>

<template>
    <div class="card">
        <div class="cardFront">
            <img v-if="serie.poster_path" class="poster" :src="`http://image.tmdb.org/t/p/w500${serie.poster_path}`" alt="">
            <img v-else class="poster" src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif" alt="">

        </div>
        <div class="cardBack">
            <h1>{{ serie.name }}</h1>
            <h5>Lingua:</h5>
            <span v-if="!this.store.lingue.includes(serie.original_language)">{{ serie.original_language }}</span>
            <img class="flag" :src="`../../img/${serie.original_language}.svg`" alt="">
            <h3>Titolo originale:</h3><span>{{ serie.original_name }}</span>
            <h3>Voto:{{ serie.popularity }}</h3>
            <h3>Overview:</h3><span>{{ serie.overview }}</span>

        </div>

    </div>
</template>

<style lang="scss" scoped>
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
    padding: 0.3rem;
    background-color: rgba(255, 0, 0, 0.79);
    position: absolute;
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    top: 0;
    overflow: auto;
    opacity: 0;

    &:hover {
        transition: 1s;
        opacity: 1;
    }


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
