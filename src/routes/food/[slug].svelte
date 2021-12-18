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
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { Food } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import FoodItem from '$lib/ui/FoodItem.svelte';
	import ButtonWithDialog from "$lib/ui/ButtonWithDialog.svelte";

	let edit: boolean = false;
	let food: Food;
	let ingredients: Array<Food> = [];

	onMount(async () => {
		await readFood();
	});

	async function readFood() {
		food = await FoodRegister.get(slug);
		ingredients = await food.getIngredients();
	}
	
	async function gotoIngredient(ingredient: Food) {
		goto('/food/' + ingredient.getId()).then(async () => {
			readFood();
		});
	}

	async function editButtonOnClick() {
		if (edit) {
			await FoodRegister.put(food);
		}
		edit = !edit
	}

	async function addIngredientButtonOnClick() {
		let ingredient: Food = new Food('Untitled');
		await food.addIngredient(ingredient);
		await FoodRegister.put(ingredient);
		await FoodRegister.put(food);
		await readFood();
	}

	async function deleteButtonOnClick() {
		await FoodRegister.remove(food);
		goto('../')
	}
</script>

<button on:click={() => goto('../')}>
	Home
</button>


{#if food}
	{#if edit}
		<input bind:value={food.name}>
		<input bind:value={food.description}>
		<ButtonWithDialog
			text={"Delete"}
			onClick={deleteButtonOnClick}
			dialogText={"Are you sure?"}
		/>
		<button on:click={addIngredientButtonOnClick}>Add Ingredient</button>
	{:else}
		<h1>{food.getName()}</h1>
		<p>{food.getDescription()}</p>
	{/if}

	<button on:click={editButtonOnClick}>{edit? 'Save' : 'Edit'}</button>

	{#each ingredients as ingredient}
		<div on:click={() => gotoIngredient(ingredient)}>
			<FoodItem food={ingredient}></FoodItem>
		</div>
	{/each}
{:else}
	<h2>Undefined food!</h2>
{/if}
