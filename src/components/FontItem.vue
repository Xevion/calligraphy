<template>
    <md-list-item @click="selectFont" :style="fontStyle">
            <span v-if="fontReady" class="md-list-item-text">{{ font.family }}</span>
            <Skeleton v-else></Skeleton>
            <md-list v-if="selected" slot="md-expand">
                <md-list-item class="md-inset" v-for="(variant, index) in font.variants" :key="index">{{ variant }}</md-list-item>
            </md-list>
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
// import {Skeleton} from 'vue-loading-skeleton';

export default {
    name: 'FontItem',
    components: {
        // Skeleton
    },
    data() {
        return {
            fontReady: false
        }
    },
    props: {
        font: {
            type: Object,
            required: true,
        },
        selected: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    methods: {
        selectFont() {
            this.$emit('select-font', this.font.index)
        }
    },
    computed: {
        fontStyle() {
            return {
                'font-family': `'${this.font.family}', ${this.font.category}`
            }
        },
        fontSelection() {
            // Preferred font variants (in order0
            let order = ["regular", "500", "300", "600", "700", "italic", "500italic", "600italic", "700italic", "800",
                "800italic", "200", "200italic", "100", "100italic", "300italic", "900", "900italic"]

            // Iterate over all weights possible, return first available
            for (let variant of order)
                if (this.font.variants.includes(variant))
                    return variant;

            // Otherwise return first variant (? should not occur naturally)
            return this.font.variants[0];
        },
    },
    mounted() {
        WebFontLoader.load({
            google: {
                families: [`${this.font.family}:${this.fontSelection}`]
            },
            fontactive: function () {
                this.fontReady = true;
            }.bind(this)
        })
    }
}
</script>
