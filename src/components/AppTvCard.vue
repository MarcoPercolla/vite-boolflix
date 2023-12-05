<script>
export default {
    name: "AppTvCard",
    props: {
        serie: "",
    }
}
</script>

<template>
    <div class="card2">
        <h1>{{ serie.name }}</h1>
        <h5>{{ serie.original_language }}</h5>
        <img :src="`../../img/${serie.original_language}.svg`" alt="">
        <h3>{{ serie.original_name }}</h3>
        <p>{{ serie.popularity }}</p>

    </div>
</template>

<style scoped>
.card2 {
    width: 23%;
    height: 90%;
    margin: 0.5rem;
    background-color: red;
    flex-shrink: 0;
    overflow-y: auto;
}

img {
    width: 10%;

}
</style>
