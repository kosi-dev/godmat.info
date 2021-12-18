<script lang="ts">
	import type { Food } from '$lib/core/food';
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import Tag from './Tag.svelte';
	
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
		<p>
			<span>Price: {price}</span>
			<span>Ingredients:
				{#each ingredients as ingredient}
					<span>{ingredient.getName() + ', '}</span>
				{/each}
			</span>
			{#each food.getTagNames() as text}
				<Tag {text}/>
			{/each}
		</p>
		{#if onDestroy}
			<Button on:click={() => onDestroy()}>Delete</Button>
		{/if}
	{:else}
		<h3>Undefined food!</h3>
	{/if}
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
