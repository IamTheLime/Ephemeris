<template>
  <!-- Main container -->
  <div class="container">
    <div class="tile">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child">
          <p class="is-size-4">Tiago Lima</p>
          <p class="is-size-4">Software Engineer</p>
          <p class="is-size-4">University of Minho</p>
          <p class="is-size-4">Residing in London, UK</p>
          <p class="is-size-4">twitter</p>
          <p class="is-size-4">github</p>
          <p class="is-size-4">email ⌲</p>
          <button v-on:click="testClick()">
            {{ getColour() }}
          </button>
        </div>
        <div class="tile is-child"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
  text-decoration: underline;
  color: white;
}
</style>
