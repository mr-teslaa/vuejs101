<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>Salam from {{ boo }}</h2>
    <hr />
    <input type="text" ref="name" />
    <button @click="handleClick">Change the input</button>

    <!-- modal version 1.0 -->
    <!-- <div v-if="showModal">
        <Modal
            :header="header"
            :text="text"
            theme="sale"
            @close="toggleModal"
        />
    </div> -->

    <!-- modal version 2.0 -->
    <div v-if="showModal">
        <Modal theme="sale" @close="toggleModal">
            <!-- whatever template passing inside the MODAL tag is called slots -->

            <!-- we can give name of slot -->
            <template v-slot:links>
                <a href="#">Take the offer</a>

                <a href="#">Explore more giveaway</a>
            </template>

            <!-- if we delete this the default slot will work -->
            <!-- <h1>Special Offer</h1>
            <p>Grab your ninja swag for free 🎉</p> -->
        </Modal>
    </div>
    <br />
    <br />

    <button @click.alt="toggleModal">Open Modal (alt+click)</button>
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
                header: "Signup for the giveway",
                text: "Grab your ninja swag fro half price",
                showModal: false,
            };
        },

        methods: {
            handleClick() {
                // syntex of accessing the refs
                console.log(this.$refs.name);
                this.$refs.name.classList.add("active");
                this.$refs.name.focus();
            },
            toggleModal() {
                this.showModal = !this.showModal;
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
