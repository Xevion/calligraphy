<template>
    <md-list-item @click="selectFont(font.index)" :style="fontStyle">
        {{ font.family }}
    </md-list-item>
</template>
<style lang="css">
#font-dialog .md-list-item-content {
    font-size: 22px !important;
}
</style>
<script>
import WebFontLoader from 'webfontloader';

export default {
    name: 'FontItem',
    props: {
        font: {
            type: Object,
            required: true
        }
    },
    computed: {
        fontStyle() {
            return {
                'font-family': this.font.family
            }
        }
    },
    mounted() {
        WebFontLoader.load({
            google: {
                families: [this.font.family]
            }
        })
    }
}
</script>
