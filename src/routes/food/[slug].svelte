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
	import { Food } from '$lib/food';
	import FoodUI from '$lib/FoodUI.svelte';
	import { onMount } from 'svelte';
	import { register } from '$lib/food-register';
	import { goto } from '$app/navigation';

	let edit: boolean = false;
	let food: Food;

	onMount(() => {
		food = register.get(slug);
		food = food;
	});

	function newIngredient() {
		let ingredient: Food = new Food('Pear');
		register.register(ingredient)
		food.addIngredient(ingredient);
		food = food;
	}

	function gotoIngredient(ingredient: Food) {
		goto('/food/' + ingredient.getId()).then(() => {
			food = register.get(slug);
			food = food;
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
	<button on:click={newIngredient}>Add Food</button>
	{#each [...food.getIngredients()] as ingredient}
		<div on:click={() => gotoIngredient(ingredient)}>
			<FoodUI food={ingredient}></FoodUI>
		</div>
	{/each}
{:else}
	<h2>Undefined foodGroup!</h2>
{/if}
