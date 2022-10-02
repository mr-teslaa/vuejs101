<template>
	<div class="home">
		<h1>home page</h1>
		<h3 ref="texted">Hi {{ name }}, you are {{ age }} years old now</h3>
		<button @click="handleclick">Click me</button>
	</div>
</template>

<script>
import { ref } from "vue";
import { CLOSING } from "ws";
export default {
	name: "Home",
	setup() {
		console.log("setup done");
		let name = "tesla";
		let age = 40;
		const texted = ref(null);

		const handleclick = () => {
			console.log(texted);
			console.log("------------");
			console.log(texted.value);
		};

		return { name, age, handleclick, texted };
	},
};
</script>
