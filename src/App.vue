<template>
    <div id="app">
        <div class="md-layout md-center md-alignment-center-space-between">
            <div class="md-layout-item md-size-50">
                <md-field>
                    <label for="fonturl">Font URL</label>
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
    </div>
</template>

<style lang="css">
body, html {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#app {
    width: 50%;
    margin: 60px auto;
    color: #2c3e50;
}

.hljs {
    background-color: transparent !important;
}

#font-data {
    padding: 0 2em;
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>

<script>
import jsPDF from 'jspdf'
import axios from 'axios';

export default {
    name: 'App',
    components: {
    },
    data() {
        return {
            fontURL: "https://themes.googleusercontent.com/static/fonts/anonymouspro/v3/WDf5lZYgdmmKhO8E1AQud--Cz_5MeePnXDAcLNWyBME.ttf",
            fontData: null,
            directAxios: axios.create({baseURL: ''}),
        }
    },
    methods: {
        getFonts() {
            this.directAxios.get({
                url: `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.FONT_API_KEY}`
            })
        },
        createPDF() {
            var doc = new jsPDF();

            if (!this.fontData)
                this.loadFile(this.fontURL)

            console.log(this.fontData)

            doc.addFileToVFS('antic.ttf', this.fontData);
            doc.addFont('antic.ttf', 'Antic', 'regular')
            doc.setFont('Antic', 'regular');
            doc.setFontSize(15);
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
