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
        <h3>{{ film.original_title }}</h3>
        <p>{{ film.vote_average }}</p>

    </div>
</template>

<style scoped>
.card {
    width: 23%;
    margin: 0.5rem;
    background-color: blue;

}
</style>
