<template>
    <div id="app">
        <div class="md-layout md-center md-alignment-center-center">
            <div class="md-layout-item md-size-50">
                <md-field>
                    <label for="fonturl">Font URL</label>
                    <md-input id="fonturl" v-model="fontURL"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item md-size-20">
                <md-button class="md-raised md-primary" v-on:click="loadFile(fontURL)">Load Font</md-button>
            </div>
            <div class="md-layout-item md-size-20">
                <md-button class="md-raised md-primary" v-on:click="createPDF">Save PDF</md-button>
            </div>
            <div class="md-layout-item md-size-100">
                <md-card style="padding: 0.10em 0.3em;">
                    <pre v-highlightjs="JSON.stringify({'data': fontData})"><code class="json"></code></pre>
                </md-card>
            </div>
        </div>
    </div>
</template>

<style lang="css">
#app {
    width: 50%;
    margin: 60px auto;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.hljs {
    background-color: transparent !important;
}

pre {
 white-space: pre-wrap;       /* css-3 */
 white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
 white-space: -pre-wrap;      /* Opera 4-6 */
 white-space: -o-pre-wrap;    /* Opera 7 */
 word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>

<script>
import jsPDF from 'jspdf'
import axios from 'axios';

export default {
    name: 'App',
    components: {},
    data() {
        return {
            fontURL: "https://themes.googleusercontent.com/static/fonts/anonymouspro/v3/WDf5lZYgdmmKhO8E1AQud--Cz_5MeePnXDAcLNWyBME.ttf",
            fontData: null,
            directAxios: axios.create({baseURL: ''}),
        }
    },
    methods: {
        createPDF() {
            var doc = new jsPDF();

            if(!this.fontData)
                this.loadFile(this.fontURL)

            doc.addFileToVFS('antic.ttf', this.fontURL);
            doc.addFont('antic.ttf', 'Antic', 'regular')
            doc.setFont('Antic', 'regular');
            // doc.setFontType("regular");
            doc.setFontSize(15);
            doc.text("Some Text with Google Fonts", 0, 10);
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
