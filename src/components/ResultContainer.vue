<script>
import { store } from '../store'
import Card from './PreviewCard.vue'
import ActorCard from './ActorCard.vue'
export default {
    components: {
        Card,
        ActorCard,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        copyIdM: function (id) {
            store.movieId = id;
        },
        copyIdS: function (id) {
            store.seriesId = id;
        }
    },
}
</script>

<template>
    <div>
        <h2>FILM</h2>
        <div class="container" v-if="store.filmList.length != 0">
            <!-- Risultati per film -->
            <Card v-for="(film, index) in store.filmList" :key="index" :title="film.title"
                :originalTitle="film.original_title" :vote="film.vote_average" :overview="film.overview"
                :language="film.original_language" :poster="film.poster_path"
                @click="copyIdM(film.id); $emit('showcastM');" />
        </div>
        <div v-else class="not-found">No result</div>
        <h3 v-if="store.movieGenres.length != 0" v-for="genre in store.movieGenres">{{ genre.name }}&nbsp;</h3>
        <div class="container" v-if="store.actorMovieList.length != 0">
            <ActorCard v-for="(actor, index) in store.actorMovieList" :name="actor.name" :character="actor.character"
                :poster="actor.profile_path" :index="index" :key="index" />
        </div>

        <h2>SERIES</h2>
        <div class="container" v-if="store.seriesList.length != 0">
            <!-- Risultati per serie tv -->
            <Card v-for="(series, index) in store.seriesList" :key="index" :title="series.name"
                :originalTitle="series.original_name" :vote="series.vote_average" :overview="series.overview"
                :language="series.original_language" :poster="series.poster_path"
                @click="copyIdS(series.id); $emit('showcastS')" />
        </div>
        <div v-else class="not-found">No result</div>
        <h3 v-if="store.seriesGenres.length != 0" v-for="genre in store.seriesGenres">{{ genre.name }}&nbsp;</h3>
        <div class="container" v-if="store.actorSeriesList.length != 0">
            <ActorCard v-for="(actor, index) in store.actorSeriesList" :name="actor.name" :character="actor.character"
                :poster="actor.profile_path" :index="index" :key="index" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    color: red;
    font-size: 1.7rem;
    margin-top: 20px;
    margin-left: 20px;
}

h3 {
    color: #fff;
    display: inline-block;
    margin: 15px 0px 15px 20px;
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

    &>*.card {
        width: calc(100% / 6 - 15px);
        height: 342px;
        flex-shrink: 0;
        margin-left: 15px;
    }
}
</style>