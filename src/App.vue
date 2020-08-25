<template>
    <div id="app">
        <div class="page-container md-layout-row">
            <md-app>
                <md-app-toolbar class="md-primary">
                    <span class="md-title">Calligraphy</span>
                </md-app-toolbar>

                <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini" md-permanent="clipped">
                    <md-list>
                        <md-list-item @click="$refs.fontSelector.toggle()" title="Show PDF Preview">
                            <md-icon>visibility</md-icon>
                        </md-list-item>

                        <md-list-item @click="showSettings" title="Show PDF Settings">
                            <md-icon>create</md-icon>
                        </md-list-item>

                        <md-list-item @click="showStylizer" title="Show PDF Style Settings">
                            <md-icon>colorize</md-icon>
                        </md-list-item>

                        <md-list-item @click="showAbout" title="About this App" style="margin-top: auto">
                            <md-icon>help</md-icon>
                        </md-list-item>
                    </md-list>
                </md-app-drawer>

                <md-app-content>
                    <div class="md-layout md-center md-alignment-center-space-between">
                        <div class="md-layout-item md-size-50">
                            <md-field>
                                <label>Font URL</label>
                                <md-input id="fonturl" v-model="fontURL"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-size-30 md-layout md-alignment-center-right">
                            <div class="md-layout-item">
                                <md-button class="md-raised md-primary" v-on:click="loadFile(fontURL)">
                                    Load Font
                                    <md-icon>cached</md-icon>
                                </md-button>
                            </div>
                            <div class="md-layout-item">
                                <md-button class="md-raised md-primary" v-on:click="createPDF">
                                    Save PDF
                                    <md-icon class="md-size-1x">get_app</md-icon>
                                </md-button>
                            </div>
                        </div>
                        <div class="md-layout-item md-size-100">
                            <md-card style="padding: 1.5em 1.5em 1.8em;">
                                <span id="font-data">{{ fontData }}</span>
                            </md-card>
                        </div>
                    </div>
                    <FontSelector ref="fontSelector"></FontSelector>
                </md-app-content>
            </md-app>
        </div>
    </div>
</template>

<style lang="css">
body, html {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

body, #app, .page-container, .md-app, .md-list {
    height: 100%;
}

.hljs {
    background-color: transparent !important;
}

.md-list-item-content > .md-icon:last-child {
    margin-left: 0 !important;
}
</style>

<script>
import jsPDF from 'jspdf'
import axios from 'axios';
import FontSelector from "./components/FontSelector";

export default {
    name: 'App',
    components: {FontSelector},
    data() {
        return {
            fontURL: "https://themes.googleusercontent.com/static/fonts/anonymouspro/v3/WDf5lZYgdmmKhO8E1AQud--Cz_5MeePnXDAcLNWyBME.ttf",
            fontData: null,
            directAxios: axios.create({baseURL: ''}),
            menuVisible: false,
        }
    },
    methods: {
        showSettings() {},
        showStylizer() {},
        showAbout() {},
        createPDF() {
            var doc = new jsPDF();

            // Load font if not already
            if (!this.fontData)
                this.loadFile(this.fontURL)

            // Adding font
            doc.addFileToVFS('antic.ttf', this.fontData);
            doc.addFont('antic.ttf', 'Antic', 'regular')
            doc.setFont('Antic', 'regular');
            doc.setFontSize(15);

            // Add text
            doc.text("Some Text with Google Fonts", 5, 10);
            doc.save('test.pdf');
        },

        loadFile(fontURL) {
            this.directAxios.get(fontURL, {
                responseType: "blob"
            })
                .then((res) => {
                    var reader = new FileReader();
                    reader.readAsDataURL(res.data);
                    reader.onload = e => {
                        console.log(this);
                        this.fontData = e.target.result.substring(21);
                    }
                })
        }
    }
}
</script>
