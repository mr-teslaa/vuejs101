<script>
export default {
	// data() {
	// 	return {
	// 		id: this.$route.params.slug,
	// 	};
	// },

	// since we can also use props, we no long need this ☝️
	// instead we can do this

	props: ["id"],
};
</script>

<template>
	<h1>Job Details</h1>
	<h3>your job id is {{ id }}</h3>
</template>

<style></style>
