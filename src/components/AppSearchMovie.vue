<script>
import { store } from "../store.js"


export default {
    name: "AppSearchMovie",
    emits: ["searchfilm"],
    data() {
        return {
            store
        }
    },
    methods: {
        getInput() {
            this.$emit("searchfilm");
        },

    }
}
</script>
<template>
    <header>
        <img id="logo" src="https://m.media-amazon.com/images/I/31JfJ6dXD9L.png" alt="">
        <input type="text" placeholder="cerca..." v-model="store.searchString" @keyup="getInput">
    </header>
</template>
<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: black;
}

#logo {
    height: 4rem;
}
</style>