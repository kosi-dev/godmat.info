<script lang="ts">
	import type { Food } from '$lib/food';
	import { onMount } from 'svelte';
	export let food: Food;
	export let onDestroy: Function = undefined;

	let ingredients: Array<Food> = [];
	let price: number = 0;

	onMount(async () => {
		await updateIngredients();
	});

	async function updateIngredients() {
		ingredients = await food.getIngredients();
		price = await food.getPrice();
	}

</script>

<div>
	{#if food}
		<h2>{food.getName()}</h2>
		<p>Id: {food.getId()}</p>
		<p>Category: {food.getCategory()}</p>
		<p>Price: {price}</p>
		<p>Ingredients:</p>
		{#each ingredients as ingredient}
			<p>{ingredient.getName()}</p>
		{/each}
		{#if onDestroy}
			<button on:click={() => onDestroy()}>Delete</button>
		{/if}
	{:else}
		<h2>Undefined food!</h2>
	{/if}
</div>

<style>
	div {
		margin: 5pt;
		padding: 5pt;
		border-color: blueviolet;
		border-width: 1pt;
		border-style: solid;
	}
</style>
