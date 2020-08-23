<template>
    <div>
        <md-dialog :md-active.sync="visible">
            <md-content v-if="fonts !== null">
                <div style="margin: 0 1em">
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
            <md-progress-spinner v-else md-mode="indeterminate"></md-progress-spinner>
            <md-dialog-actions>
                <md-button class="md-primary" @click="toggle">Close</md-button>
                <md-button class="md-primary" @click="toggle">Save</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<style lang="scss">
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
