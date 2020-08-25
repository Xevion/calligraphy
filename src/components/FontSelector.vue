<template>
    <div>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>Preferences</md-dialog-title>

            <md-tabs md-dynamic-height>
                <md-tab md-label="General">
                </md-tab>

                <md-tab md-label="Activity">
                </md-tab>

                <md-tab md-label="Account">
                </md-tab>
            </md-tabs>

            <md-dialog-actions>
                <md-button class="md-primary" @click="showDialog = false">Close</md-button>
                <md-button class="md-primary" @click="showDialog = false">Save</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
export default {
    name: "FontSelector",
    data: () => ({})
}
</script>

<style scoped>

</style>
