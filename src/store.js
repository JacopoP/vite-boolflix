import { reactive } from "vue";

export const store = reactive({
    apiSearchMovie: 'https://api.themoviedb.org/3/search/movie?api_key=658ef80ca5cc95d18a982e72e9855913',
    apiTrendingMovie: 'https://api.themoviedb.org/3/trending/movie/day?api_key=658ef80ca5cc95d18a982e72e9855913',
    apiSearchSeries: 'https://api.themoviedb.org/3/search/tv?api_key=658ef80ca5cc95d18a982e72e9855913',
    apiTrendingSeries: 'https://api.themoviedb.org/3/trending/tv/day?api_key=658ef80ca5cc95d18a982e72e9855913',
    filmList: [],
    seriesList: [],
    searchText: '',
    searchLanguage: '',
})