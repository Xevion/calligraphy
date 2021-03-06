<template>
    <div>
        <md-dialog id="font-dialog" :md-active.sync="visible">
            <div v-if="fonts !== null">
                <md-content>
                    <div>
                        <md-field>
                            <label>Font Family</label>
                            <md-input v-model="search"></md-input>
                            <span class="md-suffix">{{ animatedResults }}</span>
                        </md-field>
                        <md-field>
                            <label for="sort">Sort by</label>
                            <md-select v-model="sort" name="sort" id="sort">
                                <md-option value="alpha">Alphabetically</md-option>
                                <md-option value="date">Date Updated</md-option>
                                <md-option value="popularity">Popularity</md-option>
                                <md-option value="style">Styles</md-option>
                                <md-option value="trending">Trending</md-option>
                            </md-select>
                        </md-field>
                    </div>
                    <md-list>
                        <vue-custom-scrollbar :distance="10"
                                              :settings="{suppressScrollX: true,  suppressScrollY: false}"
                                              class="scroll-area">
                            <FontItem v-for="font in shown" :key="font.index" @select-font="selectFont" :selected="selectedFont !== null && selectedFont.index === font.index" :font="font"></FontItem>
                            <infinite-loading :identifier="search + sort" force-use-infinite-wrapper=".scroll-area"
                                              @infinite="infiniteHandler">
                                <div slot="spinner"></div>
                                <div slot="no-more"></div>
                                <div slot="no-results"></div>
                            </infinite-loading>
                        </vue-custom-scrollbar>
                    </md-list>
                </md-content>
                <md-dialog-actions>
                    <md-button class="md-primary" @click="toggle">Close</md-button>
                    <md-button class="md-primary" @click="toggle">Save</md-button>
                </md-dialog-actions>
            </div>
            <div v-else id="spinner-box" :style="[fonts !== null ? 'display: none' : null]">
                <md-progress-spinner :md-stroke="5" :md-diameter="45" md-mode="indeterminate"></md-progress-spinner>
            </div>
        </md-dialog>
    </div>
</template>

<style lang="scss">
#font-dialog {
    .md-content > div {
        margin: 0 1em
    }

    #spinner-box {
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    &.md-dialog > .md-dialog-container {
        min-height: 15em;
    }

    .md-progress-spinner {
        align-content: center;
    }

    .md-list {
        max-height: 15em;
    }

    .scroll-area {
        position: relative;
    }

    .md-field {
        margin-top: 0.75em;
    }
}

.md-menu-content {
    z-index: 11 !important;
}
</style>

<script>
import axios from 'axios';
import FontItem from "@/components/FontItem";
import InfiniteLoading from 'vue-infinite-loading';
import vueCustomScrollbar from 'vue-custom-scrollbar'
import {gsap} from "gsap";

axios.baseURL = '';

export default {
    name: "FontSelector",
    components: {
        vueCustomScrollbar,
        InfiniteLoading,
        FontItem
    },
    data: () => ({
        fonts: null,
        visible: false,
        shown: [],
        search: "",
        selectedFont: null,
        tweenedResults: 0,
        sort: 'popularity',
    }),
    methods: {
        toggle() {
            this.visible = !this.visible;
            // If showing font menu and fonts have not been fetched before
            if (this.visible && this.fonts === null)
                this.getFonts();
        },
        infiniteHandler($state) {
            // Calculate the number of items left to load
            let left = this.results.length - this.shown.length;

            if (left > 0) {
                // Add up to 5 new fonts to the 'shown' list
                let slice = this.results.slice(this.shown.length, this.shown.length + Math.min(left, 5) + 1)
                this.shown = this.shown.concat(slice)
                // Mark as completed if the final n items were loaded.
                left <= 5 ? $state.complete() : $state.loaded()
            } else {
                // No items left, mark as completed.
                $state.complete()
            }
        },
        getFonts() {
            axios.get(
                `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.VUE_APP_FONT_API_KEY}&sort=${this.sort}`
            ).then((res) => {
                this.fonts = res.data;
                this.fonts.items.forEach((font, index) => font.index = index)
                this.shown = this.results.slice(0, 5);
            })
        },
        selectFont(fontIndex) {
            this.selectedFont = this.fonts.items[fontIndex];
        },
    },
    computed: {
        results() {
            if (this.fonts !== null)
                if (this.search.length > 0)
                    return this.fonts.items.filter(font => font.family.includes(this.search));
                else
                    return this.fonts.items
            else
                return []
        },
        animatedResults() {
            return this.tweenedResults.toFixed(0);
        }
    },
    watch: {
        sort: function() {
            this.getFonts();
        },
        search: function (newSearch, oldSearch) {
            if (newSearch.length !== oldSearch.length)
                if (newSearch.length > oldSearch.length)
                    // More precise results needed. Simply re-apply filter.
                    this.shown = this.shown.filter(font => font.family.includes(this.search));
                else if (newSearch.length < oldSearch.length) {
                    // Broader results are possible, rebuild results instead.
                    let min = this.shown.length;
                    this.shown = this.results.slice(0, Math.min(min, 5) + 1);
                }
        },
        results: function (newValue) {
            gsap.to(this.$data, {duration: 0.4, tweenedResults: newValue.length, ease: "power4"});
        }
    }
}
</script>
