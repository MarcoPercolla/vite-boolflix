<script>
import { store } from "../store.js"

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <input type="text" placeholder="cerca..." v-model="store.searchInput">
</template>
<style scoped></style>