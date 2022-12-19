<script>
import { store } from '../store'
export default {
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
    <div>
        <input type="text" placeholder="What are you looking for?" v-model="store.searchText"
            @keyup.enter="$emit('searchStart')">
        <input type="submit" @click.prevent="$emit('searchStart')">
    </div>
</template>

<style lang="scss" scoped>

</style>