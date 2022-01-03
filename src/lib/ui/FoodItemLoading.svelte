<script lang="ts">
	import type { Food } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import Button from './Button.svelte';
	import Tag from './Tag.svelte';
	import TextField from './TextField.svelte';
</script>

<div>
	<h3>Loading..</h3>
</div>

<style>
	div {
		margin: 8px 0px;
		background-color: white;
		border-radius: 16px;
		border-width: 3px;
		border-style: solid;
		border-color: white;
		padding: 4px 16px;
		box-shadow: 0px 16px 32px 0px rgba(128, 128, 128, 0.5);
	}
	div:hover {
		border-color: lightgray;
	}
	div:active {
		background-color: lightgray;
	}
</style>
