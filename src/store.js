import { reactive } from 'vue'
export const store = reactive({
    moviesList: [],
    seriesList: [],
    castList: [],
    searchString: "",
    lingue: ["cn", "it", "ja", "en"],

});