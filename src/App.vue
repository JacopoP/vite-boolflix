<script>
import { store } from './store';
import axios from 'axios';
export default {
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
        // sostituire gli spazi con + per la ricerca nell'API
        let aux = true;
        while (aux) {
          if (titleSearch.includes(' ')) {
            titleSearch = titleSearch.replace(' ', '+')
          }
          else {
            aux = false;
          }
        }

        myURL += titleSearch;
        axios
          .get(myURL)
          .then(res => {
            this.store.filmList = res.results;
            console.log('ok');
          })
          .catch(err => {
            console.log('Errori: ', err);
          })
      }
    }
  },
  mounted() {
    this.getFromApi();
  }
}
</script>

<template>

</template>

<style lang="scss">

</style>
