<template>
    <div>
        <md-dialog id="font-dialog" :md-active.sync="visible">
            <div v-if="fonts !== null">
                <md-content>
                    <div>
                        <md-field>
                            <label>Font Family</label>
                            <md-input v-model="search"></md-input>
                        </md-field>
                    </div>
                    <md-list class="md-scrollbar">
                        <md-list-item v-for="font in results" @click="selectFont(font.index)" :key="font.family">
                            {{ font.family }}
                        </md-list-item>
                    </md-list>
                </md-content>

                <md-dialog-actions>
                    <md-button class="md-primary" @click="toggle">Close</md-button>
                    <md-button class="md-primary" @click="toggle">Save</md-button>
                </md-dialog-actions>
            </div>
            <div v-else id="spinner-box" :style="[fonts !== null ? 'display: none' : null]">
                <md-progress-spinner md-stroke=5 md-diameter=45 md-mode="indeterminate"></md-progress-spinner>
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
}

#font-dialog.md-dialog > .md-dialog-container {
    min-height: 9em;
}

#font-dialog .md-progress-spinner {
    align-content: center;
}

.md-menu-content {
    z-index: 11 !important;
}
</style>

<script>
import axios from 'axios';

axios.baseURL = '';

export default {
    name: "FontSelector",
    data: () => ({
        fonts: null,
        visible: false,
        search: null,
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
