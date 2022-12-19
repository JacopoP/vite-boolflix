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
        <div v-for="film in store.filmList">
            <p>Titolo del film: {{ film.title }}</p>
            <p>Titolo originale: {{ film.original_title }}</p>
            <p>Lingua originale: {{ film.original_language }}</p>
            <p>Voto: {{ film.vote_average }} su {{ film.vote_count }} valutazioni</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;

    * {
        width: 225px;
    }
}
</style>