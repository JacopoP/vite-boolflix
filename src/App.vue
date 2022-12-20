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
    }
  },
  methods: {
    getFromApi: function () {
      let myURLMovie = store.apiURLMovie;
      let myURLSeries = store.apiURLSeries;
      if (store.searchText != '') {
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
        axios
          .get(myURLMovie)
          .then(res => {
            store.filmList = res.data.results;
          })
          .catch(err => {
            console.log('Errori: ', err);
          });
        axios
          .get(myURLSeries)
          .then(res => {
            store.seriesList = res.data.results;
          })
          .catch(err => {
            console.log('Errori: ', err);
          });
      }
    }
  },
}
</script>

<template>
  <Header @searchStart="getFromApi" />
  <main>
    <ResultsShow />
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
