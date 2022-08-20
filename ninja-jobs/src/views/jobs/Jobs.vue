<script>
export default {
	data() {
		return {
			jobs: [
				{ id: 1, title: "Web Developer", detaiils: "lorem" },
				{ id: 2, title: "SEO Expert", detaiils: "lorem" },
				{ id: 3, title: "Cybersecurity Expert", detaiils: "lorem" },
			],
		};
	},
};
</script>

<template>
	<h1>Jobs</h1>
	<div class="jobs" v-for="job in jobs" :key="job.id">
		<router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
			<h2>{{ job.title }}</h2>
		</router-link>
	</div>
</template>

<style scoped>
.jobs h2 {
	background: #f4f4f4;
	padding: 20px;
	border-radius: 10px;
	margin: 10px auto;
	max-width: 600px;
	cursor: pointer;
	color: #444;
}

.jobs h2:hover {
	background: #ddd;
}

.job a {
	text-decoration: none;
}
</style>
