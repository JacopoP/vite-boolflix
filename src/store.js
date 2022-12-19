import { reactive } from "vue";

export const store = reactive({
    apiURLMovie: 'https://api.themoviedb.org/3/search/movie?api_key=658ef80ca5cc95d18a982e72e9855913',
    apiURLSeries: 'https://api.themoviedb.org/3/search/tv?api_key=658ef80ca5cc95d18a982e72e9855913',
    filmList: [],
    seriesList: [],
    searchText: '',
    searchLanguage: '',
})