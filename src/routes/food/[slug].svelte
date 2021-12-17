<script context="module" lang="ts">
	let slug: string;

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		slug = page.params.slug;
		return { props: { } };
	}
</script>

<script lang="ts">
	import { Food } from '$lib/core/food';
	import FoodUI from '$lib/FoodUI.svelte';
	import { onMount } from 'svelte';
	import { FoodRegister } from '$lib/core/food-register';
	import { goto } from '$app/navigation';

	let edit: boolean = false;
	let food: Food;
	let ingredients: Array<Food> = [];

	onMount(async () => {
		await updateFood();
	});

	async function updateFood() {
		food = await FoodRegister.get(slug);
		ingredients = await food.getIngredients();
	}

	async function newIngredient() {
		let ingredient: Food = new Food('Pear');
		await food.addIngredient(ingredient);
		await FoodRegister.register(ingredient);
		await FoodRegister.register(food);
		await updateFood();
	}

	async function gotoIngredient(ingredient: Food) {
		goto('/food/' + ingredient.getId()).then(async () => {
			updateFood();
		});
	}
</script>

<button on:click={() => goto('../')}>
	Home
</button>

{#if food}
	{#if edit}
		<input bind:value={food.name}>
		<input bind:value={food.description}>
	{:else}
		<h1>{food.getName()}</h1>
		<p>{food.getDescription()}</p>
	{/if}
	<button on:click={() => edit = !edit}>{!edit? 'Edit' : 'Save'}</button>
	<button on:click={newIngredient}>Add Ingredient</button>
	{#each ingredients as ingredient}
		<div on:click={() => gotoIngredient(ingredient)}>
			<FoodUI food={ingredient}></FoodUI>
		</div>
	{/each}
{:else}
	<h2>Undefined foodGroup!</h2>
{/if}
