<template>
    <div>
        <md-dialog id="font-dialog" :md-active.sync="visible">
            <div v-if="fonts !== null">
                <md-content>
                    <div>
                        <md-field>
                            <label>Font Family</label>
                            <md-input v-model="search"></md-input>
                            <span class="md-suffix">{{ results.length }}</span>
                        </md-field>
                    </div>
                    <md-list>
                        <vue-custom-scrollbar :settings="{suppressScrollX: true,  suppressScrollY: false}" class="scroll-area">
                            <md-list-item v-for="font in results" @click="selectFont(font.index)" :key="font.family">
                                {{ font.family }}
                            </md-list-item>
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
        //overflow: auto;
    }

    .scroll-area {
        position: relative;
    }
}

.md-menu-content {
    z-index: 11 !important;
}
</style>

<script>
import axios from 'axios';
import vueCustomScrollbar from 'vue-custom-scrollbar'

axios.baseURL = '';

export default {
    name: "FontSelector",
    components: {
        vueCustomScrollbar
    },
    data: () => ({
        fonts: null,
        visible: false,
        search: "",
        selectedFont: null
    }),
    methods: {
        toggle() {
            this.visible = !this.visible;
            // If showing font menu and fonts have not been fetched before
            if (this.visible && this.fonts === null)
                this.getFonts();
        },
        getFonts() {
            axios.get(
                `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.VUE_APP_FONT_API_KEY}`
            ).then((res) => {
                this.fonts = res.data;
                this.fonts.items.forEach((font, index) => font.index = index)
            })
        },
        selectFont(fontIndex) {
            this.selectedFont = this.fonts.items[fontIndex];
        }
    },
    computed: {
        results() {
            return this.fonts !== null ? this.fonts.items.filter(font => font.family.includes(this.search)) : [];
        }
    }
}
</script>
