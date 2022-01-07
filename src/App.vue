<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>Salam from {{ boo }}</h2>
    <hr />
    <input type="text" ref="name" />
    <button @click="handleClick">Change the input</button>
    <Modal />
</template>

<script>
// importing the Modal.vue file
import Modal from "./components/Modal.vue";

export default {
    name: "App",
    components: { Modal },
    data() {
        return {
            boo: "vue.js",
        };
    },

    methods: {
        handleClick() {
            // syntex of accessing the refs
            console.log(this.$refs.name);
            this.$refs.name.classList.add("active");
            this.$refs.name.focus();
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
