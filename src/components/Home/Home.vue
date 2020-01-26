<template>
    <!-- Main container -->
    <div class="container">
        <div class="tile">
            <div class="tile is-vertical is-parent">
                <div class="tile is-child padding-top">
                    <p class="is-size-4">software engineer</p>
                    <p class="is-size-4">university of minho</p>
                    <p class="is-size-4">london, uk&nbsp;</p>
                    <p class="is-size-4 social-media clickable">
                        <font-awesome-icon
                            :icon="['fab', 'twitter']"
                        />&nbsp;twitter
                    </p>
                    <p class="is-size-4 social-media clickable">
                        <font-awesome-icon
                            :icon="['fab', 'github']"
                        />&nbsp;github
                    </p>
                    <p class="is-size-4 social-media clickable">
                        <font-awesome-icon :icon="['fas', 'at']" />&nbsp;email
                    </p>
                    <button v-on:click="testClick()">{{ colour }}</button>
                </div>
                <div class="tile is-child"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Home.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.padding-top {
    padding-top: 20px;
}
</style>
