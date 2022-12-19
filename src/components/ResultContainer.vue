<script>
import { store } from '../store'
export default {
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
                <span :class="film.original_language == 'en' ? 'fi fi-us' : 'fi fi-' + film.original_language"></span>
            </p>
            <p>Voto: {{ film.vote_average }} su {{ film.vote_count }} valutazioni</p>
        </div>
        <!-- Risultati per serie tv -->
        <div v-for="series in store.seriesList">
            <img :src="'https://image.tmdb.org/t/p/w342' + series.poster_path" alt="NO POSTER FOUND">
            <p>Titolo della serie: {{ series.name }}</p>
            <p>Titolo originale: {{ series.original_name }}</p>
            <p>
                Lingua originale: {{ series.original_language }}
                <span
                    :class="series.original_language == 'en' ? 'fi fi-us' : 'fi fi-' + series.original_language"></span>
            </p>
            <p>Voto: {{ series.vote_average }} su {{ series.vote_count }} valutazioni</p>
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