<template>
    <h1>
        Raction Timer with
        <img
            src="./assets/logo.png"
            height="50"
            width="50"
            styles="margin-top: 1rem"
        />
    </h1>

    <button @click="start" :disabled="isPlaying">Play</button>

    <!-- we can also use hardcoding v-bind:delay="delay" instead of :delay="dealy" -->
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />

    <Results v-if="showResults" :score="score" />
</template>

<script>
import Results from "./components/Results.vue";
import Block from "./components/Block.vue";

export default {
    name: "App",
    components: { Block, Results },
    data() {
        return {
            isPlaying: false,
            delay: null,
            score: null,
            showResults: false,
        };
    },
    methods: {
        start() {
            this.delay = 2000 + Math.random() * 5000;
            this.isPlaying = true;
            this.showResults = false;
        },
        endGame(reactionTime) {
            this.score = reactionTime;
            this.isPlaying = false;
            this.showResults = true;
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
