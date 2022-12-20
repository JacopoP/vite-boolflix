<script>
import Search from './SearchApp.vue'
export default {
    components: {
        Search,
    }
}
</script>

<template>
    <header>
        <h1>BOOLFIX</h1>
        <Search @searchStart="$emit('searchStart')" />
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 100px;
    width: 100%;
    background: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 75px;

    h1 {
        color: red;
    }
}
</style>