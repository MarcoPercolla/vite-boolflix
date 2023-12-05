<script>
import { store } from "../store.js"


export default {
    name: "AppSearchMovie",
    emits: ["searchFilm"],
    data() {
        return {
            store
        }
    },
    methods: {
        getInput() {
            this.$emit("searchFilm");
        },

    }
}
</script>
<template>
    <input type="text" placeholder="cerca..." v-model="store.searchString" @keyup="getInput">
    <button @click="getInput">cerca</button>
</template>
<style scoped></style>