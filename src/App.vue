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
    <Block v-if="isPlaying" :delay="delay" />
</template>

<script>
import Results from "./components/Results.vue";
import Block from "./components/Block.vue";

export default {
    name: "App",
    components: { Block },
    data() {
        return {
            isPlaying: false,
            delay: null,
        };
    },
    methods: {
        start() {
            this.delay = 2000 + Math.random() * 5000;
            this.isPlaying = true;
            console.log(this.delay);
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
