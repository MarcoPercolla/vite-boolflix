<script>
import AppMovieCard from "./components/AppMovieCard.vue";
import AppTvCard from "./components/AppTvCard.vue";
import AppSearchMovie from "./components/AppSearchMovie.vue";
import axios from 'axios';
import { store } from "./store.js";

export default {
  components: {
    AppTvCard,
    AppMovieCard,
    AppSearchMovie,


  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovies() {

      if (this.store.searchString) {
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/search/movie',
          params: { query: `${this.store.searchString}`, include_adult: 'false', language: 'en-US', page: '1', api_key: "dfb6f86f52ee328183147082281a1543" },
          headers: {
            accept: 'application/json',
            // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmI2Zjg2ZjUyZWUzMjgxODMxNDcwODIyODFhMTU0MyIsInN1YiI6IjY1NmRmMGEzMDg1OWI0MDBhZDM5ZjhjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xe2Vb9urprdUXsWvCYsJcD5yKZmcaCCZ5LUIhgb5qyc'
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



        const optionsTv = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/search/tv',
          params: { query: `${this.store.searchString}`, include_adult: 'false', language: 'en-US', page: '1', api_key: "dfb6f86f52ee328183147082281a1543" },
          headers: {
            accept: 'application/json',
            // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmI2Zjg2ZjUyZWUzMjgxODMxNDcwODIyODFhMTU0MyIsInN1YiI6IjY1NmRmMGEzMDg1OWI0MDBhZDM5ZjhjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xe2Vb9urprdUXsWvCYsJcD5yKZmcaCCZ5LUIhgb5qyc'
          }
        };

        axios
          .request(optionsTv)
          .then(function (response) {
            console.log(response.data.results);
            store.seriesList = response.data.results;
          })
          .catch(function (error) {
            console.error(error);
          });


      } else {
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/search/movie',
          params: { query: `transformers`, include_adult: 'false', language: 'en-US', page: '1', api_key: "dfb6f86f52ee328183147082281a1543" },
          headers: {
            accept: 'application/json',
            // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmI2Zjg2ZjUyZWUzMjgxODMxNDcwODIyODFhMTU0MyIsInN1YiI6IjY1NmRmMGEzMDg1OWI0MDBhZDM5ZjhjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xe2Vb9urprdUXsWvCYsJcD5yKZmcaCCZ5LUIhgb5qyc'
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

        const optionsTv = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/search/tv',
          params: { query: `transformers`, include_adult: 'false', language: 'en-US', page: '1', api_key: "dfb6f86f52ee328183147082281a1543" },
          headers: {
            accept: 'application/json',
            // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmI2Zjg2ZjUyZWUzMjgxODMxNDcwODIyODFhMTU0MyIsInN1YiI6IjY1NmRmMGEzMDg1OWI0MDBhZDM5ZjhjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xe2Vb9urprdUXsWvCYsJcD5yKZmcaCCZ5LUIhgb5qyc'
          }
        };

        axios
          .request(optionsTv)
          .then(function (response) {
            console.log(response.data.results);
            store.seriesList = response.data.results;

          })
          .catch(function (error) {
            console.error(error);
          });

      }

    }
  },
  mounted() {
    this.getMovies()
  }
}
</script>

<template>
  <main>
    <AppSearchMovie @searchfilm="getMovies" />
    <section class="container">
      <AppMovieCard v-for="movie in store.moviesList" :film="movie" />
    </section>
    <section class="container">
      <AppTvCard v-for="series in store.seriesList" :serie="series" />
    </section>
  </main>
</template>

<style scoped>
.container {
  width: 80%;
  height: 60vh;
  margin: 2rem auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: auto;
}
</style>



