<script>
import { store } from '../store'
import Card from './PreviewCard.vue'
export default {
    components: {
        Card,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <h2>FILM</h2>
    <div class="container" v-if="store.filmList.length != 0">
        <!-- Risultati per film -->
        <Card v-for="(film, index) in store.filmList" :key="index" :title="film.title"
            :originalTitle="film.original_title" :vote="film.vote_average" :overview="film.overview"
            :language="film.original_language" :poster="film.poster_path" />
    </div>
    <div v-else class="not-found">No result</div>
    <h2>SERIES</h2>
    <div class="container" v-if="store.seriesList.length != 0">
        <!-- Risultati per serie tv -->
        <Card v-for="(series, index) in store.seriesList" :key="index" :title="series.name"
            :originalTitle="series.original_name" :vote="series.vote_average" :overview="series.overview"
            :language="series.original_language" :poster="series.poster_path" />
    </div>
    <div v-else class="not-found">No result</div>
</template>

<style lang="scss" scoped>
h2 {
    color: red;
    font-size: 1.7rem;
    margin-top: 20px;
    margin-left: 20px;
}

.not-found {
    font-size: 5rem;
    color: #fff;
    text-align: center;
    margin: 25px 0;
}

.container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 20px 10px;
    align-items: flex-start;

    &>* {
        width: calc(100% / 6 - 15px);
        height: 342px;
        flex-shrink: 0;
        margin-left: 15px;
    }
}
</style>