<template>
    <h2>Salam forom {{ framework }}</h2>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            framework: "vue.js",
        };
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
