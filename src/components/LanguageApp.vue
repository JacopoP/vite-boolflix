<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            langArr: [
                {
                    ISO: '',
                    UN: '',
                    language: '',
                },
                {
                    ISO: '',
                    UN: '',
                    language: 'None',
                },
                {
                    ISO: 'ar',
                    UN: 'sa',
                    language: 'Arabic',
                },
                {
                    ISO: 'zh',
                    UN: 'cn',
                    language: 'Chinese',
                },
                {
                    ISO: 'de',
                    UN: 'de',
                    language: 'Deutch',
                },
                {
                    ISO: 'en',
                    UN: 'gb',
                    language: 'English',
                },
                {
                    ISO: 'en',
                    UN: 'us',
                    language: 'English',
                },
                {
                    ISO: 'fr',
                    UN: 'fr',
                    language: 'French',
                },
                {
                    ISO: 'hi',
                    UN: 'in',
                    language: 'Hindi',
                },
                {
                    ISO: 'it',
                    UN: 'it',
                    language: 'Italian',
                },
                {
                    ISO: 'ja',
                    UN: 'jp',
                    language: 'Japanese',
                },
                {
                    ISO: 'ko',
                    UN: 'kr',
                    language: 'Korean',
                },
                {
                    ISO: 'pt',
                    UN: 'br',
                    language: 'Portuguese',
                },
                {
                    ISO: 'ru',
                    UN: 'ru',
                    language: 'Russian',
                },
                {
                    ISO: 'es',
                    UN: 'es',
                    language: 'Spanish',
                },
            ],
            opened: false,
        }
    },
    methods: {
        openList: function () {
            this.opened = !this.opened
        },
        changeLanguage: function (lc, nc, index) {
            if (index != 0) {
                store.searchLanguage = lc + '-' + nc;
                this.langArr[0].ISO = lc;
                this.langArr[0].UN = nc;
            }
        }
    }
}
</script>

<template>
    <ul @click="openList">
        <li v-for="(lang, index) in langArr" v-show="opened || index == 0"
            @click="changeLanguage(lang.ISO, lang.UN, index)">
            <span :class="'fi fi-' + lang.UN"></span>&nbsp;
            <span v-if="lang.ISO == ''">{{ lang.language }}</span>
            <span v-else>{{ lang.ISO }}-{{ lang.UN.toUpperCase() }}</span>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    position: relative;
    list-style: none;
    cursor: pointer;
    width: 100px;
    border: 1px solid #888;
    box-shadow: -1px 1px 1px #888;
    border-radius: 3px;
    background-color: #f5f5f5;

    &::after {
        content: '';
        width: 8px;
        height: 8px;
        border-top: 1px solid black;
        border-right: 1px solid black;
        display: block;
        position: absolute;
        top: 5px;
        right: 0;
        transform: translate(-50%) rotate(135deg);
    }

    li {
        padding: 2px 5px;

        &:not(li:first-child):hover {
            background-color: #c5c5c5;
        }

        &:nth-child(2) {
            margin-top: 5px;
        }
    }
}
</style>