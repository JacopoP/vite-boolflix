<script>
import { store } from '../store'
// import SelectLang from './LanguageApp.vue'
export default {
    components: {
        // SelectLang,
    },
    data() {
        return {
            store,
            searchString: '',
        }
    },
    methods: {
        copyInStore: function () {
            store.searchText = this.searchString;
        }
    }
}
</script>

<template>
    <div id="container">
        <input type="text" placeholder="Search" v-model="store.searchText" @keyup.enter="$emit('searchStart')">
        <!-- <SelectLang /> -->
        <button @click.prevent="$emit('searchStart')"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
    </div>
</template>

<style lang="scss" scoped>
#container {
    display: flex;
    gap: 20px;
    margin: 30px;
    align-items: center;

    input[type='text'] {
        background: transparent;
        color: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 25px;
        padding: 3px 10px;
        width: 300px;
    }

    button {
        cursor: pointer;
        background: #000;
        border: none;
        padding: 5px;
        color: #c5c5c5;
        font-size: 1.3rem;

        &:hover {
            color: #fff;
        }
    }
}
</style>