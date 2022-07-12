<template>
    <div class="backdrop" @click.self="closeModal">
        <!-- modal version 1.0 -->
        <!-- <div class="modal" :class="{ sale: theme === 'sale' }">
            <h1>{{ header }}</h1>
            <p>
                {{ text }}
            </p>
        </div> -->

        <!-- modal version 2.0 -->
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <!-- this slots only works as default along with named slot
            if we did not pass any content from app.vue 
            though we did pass right now so this slot 👇 will not applied right now
            but as long as we delete the content from app.vue this slot will apply -->

            <slot>
                <h3>default content</h3>
            </slot>
            <!-- we can also give name of slots. see App.vue for that -->
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // for modal version 1.0
        // props: ["header", "text", "theme"],

        // for modal version .0
        props: ["theme"],

        methods: {
            closeModal() {
                this.$emit("close");
            },
        },
    };
</script>

// style of that template element
<style>
    .modal {
        width: 686px;
        padding: 3rem;
        margin: 5rem auto;
        background: #fff;
        border-radius: 10px;
    }

    .modal p {
        margin: 1rem 0 0 0;
    }

    .modal .actions {
        text-align: center;
        margin: 30px 0 10px 0;
    }

    .modal .actions a {
        color: #333;
        font-size: 1.2rem;
        padding: 8px;
        border: 1px solid #eee;
        text-decoration: none;
        margin: 10px;
    }

    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

    .modal.sale {
        background: red;
        color: #fff;
    }

    .modal .sale h1 {
        color: #fff;
    }

    .modal.sale .actions {
        color: #fff;
    }

    .modal.sale .actions a {
        color: #fff;
    }
</style>
