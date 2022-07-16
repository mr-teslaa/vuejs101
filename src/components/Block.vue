<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        <h3>click me again</h3>
    </div>
</template>

<script>
export default {
    props: ["delay"],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
        };
    },

    // when this block in injected to the DOM
    mounted() {
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer();
        }, this.delay);
    },

    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10);
        },

        stopTimer() {
            clearInterval(this.timer);
            console.log(this.reactionTime);
            this.$emit("end", this.reactionTime);
        },
    },

    // after injected to the DOM if you want to do something you can do that with updated() {}
    // updated() {},

    // when we are done with the the block and no longer need that we can remove them from DOM with unmounted(){}
    // unmounted() {},
};
</script>

<style scoped>
.block {
    width: 30rem;
    padding: 3rem;
    margin: 1rem auto;
    background: #0faf87;
    color: #fff;
    border-radius: 0.7rem;
}
</style>
