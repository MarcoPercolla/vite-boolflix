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
    width: 22%;
    min-height: 20rem;
    background-color: grey;
    margin: 0.5rem;
    border-radius: 0.3rem;
}
</style>
