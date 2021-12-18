<script lang="ts">
	import type { Food } from '$lib/core/food';
	import { onMount } from 'svelte';
	
	export let food: Food;
	export let onDestroy: Function = undefined;

	// Some variables are explicit because their getters are async.
	let ingredients: Array<Food> = [];
	let price: number = 0;

	onMount(async () => {
		if (food != null) {
			ingredients = await food.getIngredients();
			price = await food.getPrice();
		}
	});
</script>

<div>
	{#if food}
		<h3>{food.getName()}</h3>
		<p>Category: {food.getCategory()}</p>
		<p>Price: {price}</p>
		<p>Ingredients:
			{#each ingredients as ingredient}
				<span>{ingredient.getName() + ', '}</span>
			{/each}
		</p>

		{#if onDestroy}
			<button on:click={() => onDestroy()}>Delete</button>
		{/if}
	{:else}
		<h3>Undefined food!</h3>
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
