<script>
import Stars from './VoteApp.vue';
export default {
    components: {
        Stars,
    },
    props: ['title', 'originalTitle', 'vote', 'overview', 'poster'],
    data() {
        return {
            imgsLink: 'https://image.tmdb.org/t/p/w342',
        }
    }
}
</script>

<template>
    <div class="card">
        <img :src="this.imgsLink + poster" alt="POSTER NOT FOUND">
        <div class="film-info">
            <b>Title:</b> {{ title }}<br>
            <span v-if="title != originalTitle"><b>Original title:</b> {{ originalTitle }}<br></span>
            <b>Voto:</b>&nbsp;
            <Stars :vote="vote" />
            <p><b>Overview:</b> {{ overview }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    cursor: pointer;
    background-color: #151515;

    img {
        object-fit: cover;
        object-position: center;
        height: 342px;
        width: 100%;
    }

    .film-info {
        display: none;
        background-color: #000;
        color: #fff;
        width: 100%;
        height: 100%;
        padding: 10px 5px 5px;
        font-size: .9rem;
        line-height: 22px;

        p {
            overflow-y: auto;
            height: 225px;
        }
    }

    &:hover {
        .film-info {
            display: block;
        }

        img {
            display: none;
        }
    }
}
</style>