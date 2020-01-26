<template>
    <!-- Main container -->
    <nav class="columns">
        <!-- Left side -->
        <div class="column columns">
            <p class="column is-size-5 clickable">Tiago Lima</p>
            <div class="column display-mobile">
                <p class="is-size-5 display-mobile">
                    <font-awesome-icon :icon="['fas', 'hamburger']" />
                </p>
            </div>
        </div>

        <!-- Right side -->
        <div class="column is-four-fifths columns display-desktop">
            <p class="column is-size-5 clickable">blog</p>
            <p class="column is-size-5 clickable">about</p>

            <p @click="toggleColourMode" class="column clickable">
                <font-awesome-icon v-if="colour === ColourMode.DARK" :icon="['fas', 'sun']" />
                <font-awesome-icon v-if="colour === ColourMode.LIGHT" :icon="['fas', 'moon']" />
            </p>
        </div>
        <div
            class="level is-vertical display-mobile fixed_position"
            v-bind:class="{ display: !displayHamburguerMenu }"
        >
            <p class="is-size-5 clickable level-right">blog</p>
            <p class="is-size-5 clickable level-right">about</p>

            <p @click="toggleColourMode" class="is-size-5 clickable level-right">
                <font-awesome-icon v-if="colour === ColourMode.DARK" :icon="['fas', 'sun']" />
                <font-awesome-icon v-if="colour === ColourMode.LIGHT" :icon="['fas', 'moon']" />
            </p>
        </div>
    </nav>
</template>

<script lang="ts" src="./NavBar"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
    text-decoration: underline;
    color: white;
}

.level-left {
    padding-left: 12px;
}

.display {
    display: none;
}

.level-right {
    margin-left: auto;
}

.fixed_position {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 2;
    height: 100%;
    width: 100%;
    padding-right: 40px;
    background-color: var(--main-background-colour-light);
}

@media only screen and (max-width: 768px) {
    .display-desktop {
        display: none;
    }
}

@media only screen and (min-width: 769px) {
    .display-mobile {
        display: none;
    }
}
</style>
