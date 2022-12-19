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
        <input type="text" placeholder="What are you looking for?" v-model="store.searchText"
            @keyup.enter="$emit('searchStart')">
        <!-- <SelectLang /> -->
        <input type="submit" @click.prevent="$emit('searchStart')">
    </div>
</template>

<style lang="scss" scoped>
#container {
    display: flex;
    gap: 20px;
    margin: 30px;
    align-items: flex-start;
}
</style>