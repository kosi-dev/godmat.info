<script lang="ts">
	import type { Food } from '$lib/food';
	export let food: Food;
	export let onDestroy: Function = undefined;
</script>

<div>
	{#if food}
		<h2>{food.getName()}</h2>
		<p>Id: {food.getId()}</p>
		<p>Category: {food.getCategory()}</p>
		<p>Price: {food.getPrice()}</p>
		<p>Ingredients:</p>
		{#each [...food.getIngredients()] as ingredient}
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
