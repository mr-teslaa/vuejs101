<template>
    <div class="block">
        <h4 class="score">Your Reaction Time: {{ score }} miliseconds</h4>
        <h3 class="rank">{{ rank }}</h3>
    </div>
</template>

<script>
export default {
    props: ["score"],
    data() {
        return {
            rank: null,
        };
    },
    mounted() {
        if (this.score < 250) {
            this.rank = "Ninja Fingers 😲";
        } else if (this.score < 400) {
            this.rank = "Rapid Reflexs... 😊";
        } else {
            this.rank = "Snail pace... 🥱";
        }
    },
};
</script>

<style>
.score {
    margin-top: 0.8rem;
}

.rank {
    margin-top: 0.7rem;
    font-size: 1.4rem;
    color: #0faf87;
    font-weight: 600;
}
</style>
