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
	import { Food, FoodTagLabels } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import FoodItem from '$lib/ui/FoodItem.svelte';
	import ButtonWithDialog from "$lib/ui/ButtonWithDialog.svelte";
	import { onAuthStateChanged } from 'firebase/auth';
	import { auth } from "$lib/firebase/firebase";
	import Button from '$lib/ui/Button.svelte';
	import SwitchButton from '$lib/ui/SwitchButton.svelte';
	import Tag from '$lib/ui/Tag.svelte';

	let user = auth.currentUser;
	
	onAuthStateChanged(auth, async (u) => {
		user = u;
	});

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

<Button onClick={() => goto('../')} text={'Home'}/>

{#if food}
	{#if user != null}
		<Button onClick={editButtonOnClick} text={edit? 'Save' : 'Edit'}/>
	{/if}
	{#if edit}
		<ButtonWithDialog
			text={"Delete " + food.getName()}
			onClick={deleteButtonOnClick}
			dialogText={"Are you sure?"}
		/>
		<h3>Name</h3>
		<div>
			<input bind:value={food.name}>
		</div>
		<h3>Description</h3>
		<div>
			<input bind:value={food.description}>
		</div>
		<h3>Tags</h3>
		{#each [...FoodTagLabels] as [tag, text]}
			<SwitchButton
				state={food.hasTag(tag)}
				offText={text}
				switchOff={() => food.removeTag(tag)}
				switchOn={() => food.addTag(tag)}
			/>
		{/each}
	{:else}
		<h1>{food.getName()}</h1>
		{#each food.getTagNames() as text}
		<Tag {text}/>
		{/each}
		<p>{food.getDescription()}</p>
	{/if}
	
	<h3>Ingredients</h3>
	{#if edit}
		<Button onClick={addIngredientButtonOnClick} text={'Add Ingredient'}/>
	{/if}
	{#each ingredients as ingredient}
		<div on:click={() => gotoIngredient(ingredient)}>
			<FoodItem food={ingredient}></FoodItem>
		</div>
	{/each}
{:else}
	<h2>Undefined food!</h2>
{/if}
