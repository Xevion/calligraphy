<template>
    <md-list-item @click="selectFont(font.index)" :style="fontStyle">
        <template v-if="fontReady">{{ font.family }}</template>
        <Skeleton v-else></Skeleton>
    </md-list-item>
</template>
<style lang="scss">
#font-dialog .md-list-item-content {
    font-size: 22px !important;
    span {
        width: 100%;
    }
}
</style>
<script>
import WebFontLoader from 'webfontloader';
import { Skeleton } from 'vue-loading-skeleton';

export default {
    name: 'FontItem',
    components: {
        Skeleton
    },
    data() {
        return {
            fontReady: false
        }
    },
    props: {
        font: {
            type: Object,
            required: true
        }
    },
    computed: {
        fontStyle() {
            return {
                'font-family': `${this.font.family}, ${this.font.category}`
            }
        }
    },
    mounted() {
        WebFontLoader.load({
            google: {
                families: [this.font.family]
            },
            fontactive: function() {
                this.fontReady = true;
            }.bind(this)
        })
    }
}
</script>
