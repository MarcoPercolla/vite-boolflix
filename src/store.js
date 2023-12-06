import { reactive } from 'vue'
export const store = reactive({
    moviesList: [],
    seriesList: [],
    searchString: "",
    lingue: ["cn", "it", "ja", "en"],

});