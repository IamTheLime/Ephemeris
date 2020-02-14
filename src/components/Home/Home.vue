<template>
    <!-- Main container -->
    <div class="container">
        <div class="tile">
            <div class="tile is-vertical is-parent">
                <div class="tile is-child padding-top">
                    <p class="is-size-5">software engineer</p>
                    <p class="is-size-5">university of minho</p>
                    <p class="is-size-5">london, uk&nbsp;</p>
                    <p class="is-size-5 social-media clickable">
                        <a href="https://www.twitter.com/TheMrLime" target="_blank">
                            <font-awesome-icon :icon="['fab', 'twitter']" />&nbsp;twitter
                        </a>
                    </p>
                    <p class="is-size-5 social-media clickable">
                        <a href="https://www.github.com/IamTheLime" target="_blank">
                            <font-awesome-icon :icon="['fab', 'github']" />&nbsp;github
                        </a>
                    </p>
                    <p class="is-size-5 social-media clickable">
                        <a href="mailto:tafl.tiagolima@gmail.com" target="_blank">
                            <font-awesome-icon :icon="['fas', 'at']" />&nbsp;email
                        </a>
                    </p>
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
