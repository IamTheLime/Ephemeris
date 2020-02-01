<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
    <div id="app" v-bind:class="{ light: !colour, dark: colour }">
        <div class="width-wrapper">
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
            />
            <NavBar></NavBar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="css"></style>
