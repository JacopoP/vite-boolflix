<script>
export default {
    props: ['name', 'character', 'poster', 'index'],
    data() {
        return {
            imgsLink: 'https://image.tmdb.org/t/p/w500',
        }
    },
}
</script>

<template>
    <div v-if="index < 5" class="actor-card">
        <img :src="imgsLink + poster" alt="">
        <br>
        {{ name }}
        <br>
        as
        <br>
        {{ character }}
    </div>
</template>

<style lang="scss" scoped>
.actor-card {
    margin-left: 20px;
    text-align: center;
    color: #fff;

    img {
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
        width: 200px;
        height: 250px;
    }
}
</style>