<script>export default {
    props: ['vote'],
    methods: {
        getNumberStars: function (n) {
            return Math.round(Math.round(n) / 2);
        }
    },
}
</script>

<template>
    <font-awesome-icon icon="fa-solid fa-star" v-for="index in getNumberStars(vote)" />
    <font-awesome-icon icon="fa-regular fa-star" v-for="index in (5 - getNumberStars(vote))" />
</template>

<style lang="scss" scoped>

</style>