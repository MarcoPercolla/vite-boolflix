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
    <select name="lng" id="lng" v-model="store.currentLng">
        <option value="all">all</option>
        <option value="en">En</option>
        <option value="it">it</option>
        <option value="ch">ch</option>
        <option value="sp">sp</option>
    </select>
</template>
<style scoped></style>