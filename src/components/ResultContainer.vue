<script>
import { store } from '../store'
import Stars from './VoteApp.vue'
export default {
    components: {
        Stars,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div id="container">
        <!-- Risultati per film -->
        <div v-for="film in store.filmList">
            <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" alt="NO POSTER FOUND">
            <p>Titolo del film: {{ film.title }}</p>
            <p>Titolo originale: {{ film.original_title }}</p>
            <p>
                Lingua originale: {{ film.original_language }}
                <span class="fi fi-us" v-if="film.original_language == 'en'"></span>
                <span class="fi fi-jp" v-else-if="film.original_language == 'ja'"></span>
                <span class="fi fi-cn" v-else-if="film.original_language == 'zh'"></span>
                <span v-else :class="'fi fi-' + film.original_language"></span>
            </p>
            <Stars :vote="film.vote_average" />
        </div>
        <!-- Risultati per serie tv -->
        <div v-for="series in store.seriesList">
            <img :src="'https://image.tmdb.org/t/p/w342' + series.poster_path" alt="NO POSTER FOUND">
            <p>Titolo della serie: {{ series.name }}</p>
            <p>Titolo originale: {{ series.original_name }}</p>
            <p>
                Lingua originale: {{ series.original_language }}
                <span class="fi fi-us" v-if="series.original_language == 'en'"></span>
                <span class="fi fi-jp" v-else-if="series.original_language == 'ja'"></span>
                <span class="fi fi-cn" v-else-if="series.original_language == 'zh'"></span>
            </p>
            <Stars :vote="series.vote_average" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
#container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;

    &>* {
        width: 225px;

        img {
            max-width: 100%;
        }
    }
}
</style>