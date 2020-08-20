import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueHighlightJS from 'vue-highlightjs'
import VueMaterial from 'vue-material'
import json from 'highlight.js/lib/languages/css';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'highlight.js/styles/default.css';

Vue.use(VueHighlightJS, {languages: {json}})
Vue.use(VueMaterial)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')