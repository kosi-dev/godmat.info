<script lang="ts">
	import type { Food } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import Button from './Button.svelte';
	import Tag from './Tag.svelte';
	import TextField from './TextField.svelte';

	export let food: Food;
	export let weight: number = undefined;
	export let onChangeWeight: (weight: number) => void = undefined;
	export let onDestroy: Function = undefined;

	let ingredientNames: Array<Food> = [];

	async function updateAttributes(food) {
		if (food != null) {
			ingredientNames = [];
			FoodRegister.getNames(food.getIngredientIds(), (name) =>
				ingredientNames.push(name)
			);
			ingredientNames = ingredientNames;
		}
	}

	$: updateAttributes(food);
	$: if (onChangeWeight !== undefined) { onChangeWeight(weight) };
</script>

<div>
	{#if !food}
		<h3>Undefined food!</h3>
	{:else}
		<h3>{food.getName()}</h3>
		{#each food.getTagNames() as text}
			<Tag {text} />
		{/each}
		<p>
			{#if ingredientNames.length}
				<span
					>Ingredienser:
					{#each ingredientNames as name}
						<span>{name + ', '}</span>
					{/each}
				</span>
			{/if}
		</p>
		{#if onDestroy !== undefined}
			<Button text={'Delete'} onClick={onDestroy} />
		{/if}
		{#if weight !== undefined}
			{#if onChangeWeight !== undefined}
				<span>Weight: </span>
				<TextField bind:value={weight} type={"number"}></TextField>
			{:else} 
				<span>Weight: {weight}</span>
				<br>
				<br>
			{/if}
		{/if}
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
