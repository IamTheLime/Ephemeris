<template>
    <!-- Main container -->
    <nav class="columns is-mobile">
        <div class="column">
            <p class="clickable navbar-text me">
                <router-link class="green" to="/home">Tiago Lima</router-link>
                <span class="caret"></span>
            </p>
        </div>
        <div class="row display-mobile">
            <p class="is-size-4 display-mobile is-narrow">
                <font-awesome-icon :icon="['fas', 'hamburger']" />
            </p>
        </div>

        <!-- Right side -->
        <div class="display-desktop column columns is-mobile is-narrow">
            <p class="column is-size-5 clickable is-narrow navbar-text">
                <router-link to="/blog">blog</router-link>
            </p>

            <p @click="toggleColourMode" class="column clickable is-narrow">
                <font-awesome-icon
                    v-if="colour === ColourMode.DARK"
                    :icon="['fas', 'sun']"
                />
                <font-awesome-icon
                    v-if="colour === ColourMode.LIGHT"
                    :icon="['fas', 'moon']"
                />
            </p>
        </div>
        <div
            class="level is-vertical display-mobile fixed_position"
            v-bind:class="{ display: !displayHamburguerMenu }"
        >
            <p class="is-size-5 clickable level-right">
                <router-link to="/blog">blog</router-link>
            </p>

            <p
                @click="toggleColourMode"
                class="is-size-5 clickable level-right"
            >
                <font-awesome-icon
                    v-if="colour === ColourMode.DARK"
                    :icon="['fas', 'sun']"
                />
                <font-awesome-icon
                    v-if="colour === ColourMode.LIGHT"
                    :icon="['fas', 'moon']"
                />
            </p>
        </div>
    </nav>
</template>

<script lang="ts" src="./NavBar"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.me:hover {
    position: relative;
    z-index: 1;
    text-decoration: none;
}

.green:hover::after {
    left: 0;
    z-index: -1;
    position: absolute;
    background-color: var(--caret-colour);
    color: var(--caret-colour);
    content: 'Tiago Lima';
    animation: highlightAnim 200ms 1 forwards;
    animation-timing-function: cubic-bezier(0.72, -0.03, 0.4, 1.57);
    transform-origin: 100%;
    opacity: 0.9;
}

@keyframes highlightAnim {
    from {
        transform: translate(7px, 0px) scale(0, 0.6);
    }
    to {
        transform: translate(7px, 0px) scale(1.1, 0.6);
    }
}

.green:hover ~ .caret {
    animation: disappearAnim 50ms 1 forwards;
    animation-timing-function: ease-out;
    transform-origin: 0%;
    opacity: 0.9;
}

@keyframes disappearAnim {
    from {
        z-index: -1;
        transform: translate(-5px, 0px) scale(1, 1);
    }
    to {
        z-index: -1;
        transform: translate(-5px, 0px) scale(0, 1);
    }
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
    background-color: inherit;
}

@media only screen and (max-width: 768px) {
    .display-desktop.is-mobile {
        display: none;
    }
}

@media only screen and (min-width: 769px) {
    .display-mobile {
        display: none;
    }
}
</style>
