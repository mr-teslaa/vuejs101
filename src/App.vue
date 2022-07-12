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
    <teleport to=".modals" v-if="showModal">
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
    </teleport>
    <br />
    <br />

    <!-- modal 2 -->
    <teleport to=".modals" v-if="showModalTwo">
        <Modal @close="toggleModalTwo">
            <h1>Modal 2</h1>
            <a href="#">Signup for the news letter</a>
            <a href="#">More news</a>
        </Modal>
    </teleport>

    <button @click.alt="toggleModal">Open Modal (alt+click)</button>
    <button @click="toggleModalTwo">Open Modal 2</button>
</template>

<script>
    // challange
    // -   create an extra button to open different modal
    // -   use the same modal component but pass in a different template (slot)
    // -   use a different method (e.g toggleModalTwo) and data (e.g. showModalTwo)

    // importing the Modal.vue file
    import Modal from "./components/Modal.vue";

    export default {
        name: "App",
        components: { Modal },
        data() {
            return {
                boo: "vue.js",
                showModal: false,
                showModalTwo: false,
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
            toggleModalTwo() {
                this.showModalTwo = !this.showModalTwo;
            },
        },
    };
</script>

<style></style>
