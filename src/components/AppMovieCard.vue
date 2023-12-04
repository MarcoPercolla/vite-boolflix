<script>
export default {
    name: "AppMovieCard",
    props: {
        film: "",
    }
}
</script>

<template>
    {{ film.title }}
</template>

<style scoped></style>
