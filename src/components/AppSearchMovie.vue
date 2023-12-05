<script>
import { store } from "../store.js"
import axios from 'axios';

export default {
    name: "AppSearchMovie",
    data() {
        return {
            store
        }
    },
    methods: {
        getInput() {
            console.log(this.store.searchString);
            this.getMovies()

        },
        getMovies() {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                params: { query: `${this.store.searchString}`, include_adult: 'false', language: 'en-US', page: '1' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmI2Zjg2ZjUyZWUzMjgxODMxNDcwODIyODFhMTU0MyIsInN1YiI6IjY1NmRmMGEzMDg1OWI0MDBhZDM5ZjhjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xe2Vb9urprdUXsWvCYsJcD5yKZmcaCCZ5LUIhgb5qyc'
                },

            };

            axios
                .request(options)
                .then(function (response) {
                    console.log(response.data.results);
                    store.moviesList = response.data.results;
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    }
}
</script>
<template>
    <input type="text" placeholder="cerca..." v-model="store.searchString" @keyup="getInput">
    <button @click="getInput">cerca</button>
</template>
<style scoped></style>