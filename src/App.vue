<script>
import { store } from './store';
import axios from 'axios';
import SearchBar from './components/SearchApp.vue'
import ResultsShow from './components/ResultContainer.vue'
export default {
  components: {
    SearchBar,
    ResultsShow,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFromApi: function () {
      let myURL = store.apiURL;
      if (store.searchText != '') {
        let titleSearch = store.searchText;
        myURL += '&query=' + titleSearch;
        if (store.searchLanguage != '') {
          myURL += '&language=' + store.searchLanguage;
        }
        // sostituire gli spazi con + per la ricerca nell'API
        let aux = true;
        while (aux) {
          if (myURL.includes(' ')) {
            myURL = myURL.replace(' ', '+')
          }
          else {
            aux = false;
          }
        }
        axios
          .get(myURL)
          .then(res => {
            store.filmList = res.data.results;
          })
          .catch(err => {
            console.log('Errori: ', err);
          })
      }
    }
  },
}
</script>

<template>
  <SearchBar @searchStart="getFromApi" />
  <ResultsShow />
</template>

<style lang="scss">
@use './style/mainStyle.scss';
</style>
