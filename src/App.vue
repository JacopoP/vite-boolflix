<script>
import { store } from './store';
import axios from 'axios';
import Header from './components/HeaderApp.vue'
import ResultsShow from './components/ResultContainer.vue'
export default {
  components: {
    Header,
    ResultsShow,
  },
  data() {
    return {
      store,
      loadingF: false,
      loadingS: false,
    }
  },
  methods: {
    getFromApi: function () {
      let myURLMovie;
      let myURLSeries;
      store.movieGenres = [];
      store.seriesGenres = [];
      store.actorMovieList = [];
      store.actorSeriesList = [];
      if (store.searchText != '') {
        myURLMovie = store.apiCall + store.apiSearchMovie;
        myURLSeries = store.apiCall + store.apiSearchSeries;
        let titleSearch = store.searchText;
        myURLMovie += '&query=' + titleSearch;
        myURLSeries += '&query=' + titleSearch;
        if (store.searchLanguage != '') {
          myURLMovie += '&language=' + store.searchLanguage;
          myURLSeries += '&language=' + store.searchLanguage;
        }
        // sostituire gli spazi con + per la ricerca nell'API
        let aux = true;
        while (aux) {
          if (myURLMovie.includes(' ')) {
            myURLMovie = myURLMovie.replace(' ', '+');
            myURLSeries = myURLSeries.replace(' ', '+');
          }
          else {
            aux = false;
          }
        }
      }
      else {
        myURLMovie = store.apiCall + store.apiTrendingMovie;
        myURLSeries = store.apiCall + store.apiTrendingSeries;
      }
      axios
        .get(myURLMovie)
        .then(res => {
          store.filmList = res.data.results;
          this.loadingF = true;
        })
        .catch(err => {
          console.log('Errori: ', err);
        });
      axios
        .get(myURLSeries)
        .then(res => {
          store.seriesList = res.data.results;
          this.loadingS = true;
        })
        .catch(err => {
          console.log('Errori: ', err);
        });
    },
    getActorsM: function () {
      if (store.movieId != '') {
        const myURLAc = store.apiCall + 'movie/' + store.movieId + store.apiActors;
        const myURLGen = store.apiCall + 'movie/' + store.movieId + store.apiKey;
        axios
          .get(myURLAc)
          .then(res => {
            store.actorMovieList = res.data.cast;
          })
          .catch(() => {
            console.log('cast not found');
          });
        axios
          .get(myURLGen)
          .then(res => {
            store.movieGenres = res.data.genres;
          })
          .catch(() => {
            console.log('genre not found');
          });
      }
    },
    getActorsS: function () {
      if (store.seriesId != '') {
        const myURLAc = store.apiCall + 'tv/' + store.seriesId + store.apiActors;
        const myURLGen = store.apiCall + 'tv/' + store.seriesId + store.apiKey;
        axios
          .get(myURLAc)
          .then(res => {
            store.actorSeriesList = res.data.cast;
          })
          .catch(() => {
            console.log('cast not found');
          });
        axios
          .get(myURLGen)
          .then(res => {
            store.seriesGenres = res.data.genres;
          })
          .catch(() => {
            console.log('genre not found');
          });
      }
    }
  },
  mounted() {
    this.getFromApi();
  }
}
</script>

<template>
  <Header @searchStart="getFromApi" />
  <main v-if="loadingF && loadingS">
    <ResultsShow @showcastM="getActorsM" @showcastS="getActorsS" />
  </main>
</template>

<style lang="scss">
@use './style/mainStyle.scss';

header {
  height: 100px;
}

main {
  height: calc(100vh - 100px);
  overflow-y: auto;
  padding-bottom: 15px;
}
</style>
