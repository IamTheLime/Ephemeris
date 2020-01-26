<template>
    <!-- Main container -->
    <nav class="level">
        <!-- Left side -->
        <div class="level-left">
            <p class="is-size-5 clickable">Tiago Lima</p>
        </div>

        <!-- Right side -->
        <div class="level-right">
            <p class="level-item is-size-5 clickable">blog</p>
            <p class="level-item is-size-5 clickable">about</p>

            <p @click="toggleColourMode" class="level-item clickable">
                <font-awesome-icon v-if="colour===ColourMode.LIGHT" :icon="['fas', 'sun']" />
                <font-awesome-icon v-if="colour===ColourMode.DARK" :icon="['fas', 'moon']" />
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
</style>
