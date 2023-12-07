<script>
import { store } from "../store.js";
import axios from 'axios';
export default {
    name: "AppMovieCard",
    data() {
        return {
            active: true,
            castToggle: false,
            store
        }
    },
    methods: {
        getCast() {
            // https://api.themoviedb.org/3/movie/{movie_id}/credits link per cast?
            // let movieid = this.film.id;
            // const options3 = {
            //     method: 'GET',
            //     url: `'https://api.themoviedb.org/3/movie/${movieid}/credits'`,
            //     params: { language: 'en-US', api_key: "dfb6f86f52ee328183147082281a1543" },
            //     headers: {
            //         accept: 'application/json',


            //         // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmI2Zjg2ZjUyZWUzMjgxODMxNDcwODIyODFhMTU0MyIsInN1YiI6IjY1NmRmMGEzMDg1OWI0MDBhZDM5ZjhjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xe2Vb9urprdUXsWvCYsJcD5yKZmcaCCZ5LUIhgb5qyc'
            //     },

            // };

            // axios
            //     .request(options3)
            //     .then(function (response) {
            //         console.log(response);
            //         store.castList = response.cast;

            //     })
            //     .catch(function (error) {
            //         console.error(error);
            //     });


            let movieid = this.film.id
            this.castToggle = !this.castToggle
            const options3 = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${movieid}/credits`,
                params: { language: 'en-US' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmI2Zjg2ZjUyZWUzMjgxODMxNDcwODIyODFhMTU0MyIsInN1YiI6IjY1NmRmMGEzMDg1OWI0MDBhZDM5ZjhjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xe2Vb9urprdUXsWvCYsJcD5yKZmcaCCZ5LUIhgb5qyc'
                }
            };

            axios
                .request(options3)
                .then(function (response) {
                    console.log(response.data);
                    store.castList = response.data.cast
                })
                .catch(function (error) {
                    console.error(error);
                });


        },

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
            <div class="btn" @click="getCast">Show Cast</div>
            <div class="castList" v-if="this.castToggle">
                <p v-for="membro in store.castList.slice(0, 5)">{{ membro.name }}</p>
            </div>

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

.btn {
    width: 6rem;
    height: 2rem;
    border-radius: 0.4rem;
    margin: 1rem auto;
    background-color: rgb(1, 46, 89);
    text-align: center;
    line-height: 2rem;
    color: white;
}

.cardFront {
    height: 100%;


}

.castList {
    background-color: rgba(0, 52, 91, 0.954);
    width: 90%;
    margin: 0.2rem auto;
    padding: 0.5rem;
    color: white;
    border-radius: 0.3rem;

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
    padding-bottom: 3rem;



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
