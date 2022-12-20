import { reactive } from "vue";

export const store = reactive({
    apiCall: 'https://api.themoviedb.org/3/',
    apiActors: '/credits?api_key=658ef80ca5cc95d18a982e72e9855913',
    apiKey: '?api_key=658ef80ca5cc95d18a982e72e9855913',

    apiSearchMovie: 'search/movie?api_key=658ef80ca5cc95d18a982e72e9855913',
    apiTrendingMovie: 'trending/movie/day?api_key=658ef80ca5cc95d18a982e72e9855913',
    movieId: '',
    movieGenres: [],
    actorMovieList: [],

    apiSearchSeries: 'search/tv?api_key=658ef80ca5cc95d18a982e72e9855913',
    apiTrendingSeries: 'trending/tv/day?api_key=658ef80ca5cc95d18a982e72e9855913',
    seriesId: '',
    seriesGenres: [],
    actorSeriesList: [],

    filmList: [],
    seriesList: [],
    searchText: '',
    searchLanguage: '',
})