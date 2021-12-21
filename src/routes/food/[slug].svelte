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
	import { goto } from '$app/navigation';
	import { Food, FoodTagLabels } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import FoodItem from '$lib/ui/FoodItem.svelte';
	import ButtonWithDialog from "$lib/ui/ButtonWithDialog.svelte";
	import { onAuthStateChanged } from '@firebase/auth';
	import { auth } from "$lib/firebase/firebase";
	import Button from '$lib/ui/Button.svelte';
	import SwitchButton from '$lib/ui/SwitchButton.svelte';
	import Tag from '$lib/ui/Tag.svelte';
	import TextField from '$lib/ui/TextField.svelte';
	import { onMount } from 'svelte';
	import TextArea from '$lib/ui/TextArea.svelte';
	import NutritionDiagram from '$lib/ui/NutritionDiagram.svelte';

	let edit: boolean = false;
	let user = null;
	let food: Food;
	let ingredients: Array<Food> = [];
	let name: string = '';
	let description: string = '';
	let searchString: string = '';
	let searchResults: Array<Food> = [];
	
	onMount(async () => {
		await FoodRegister.init();
		await readFood();
		onAuthStateChanged(auth, async (u) => {
			user = u;
			if (user) {
				if (food == null) {
					food = new Food("Untitled", user.uid, slug);
					edit = true;
				}
			}
		});
	})

	async function readFood() {
		food = await FoodRegister.get(slug);
		if (food != null) {
			ingredients = await food.getIngredients();
			name = food.getName();
			description = food.getDescription();
		}
	}
	
	async function writeFood() {
		food.setDescription(description);
		food.setName(name);
		await FoodRegister.put(food);
	}

	async function gotoFood(food: Food) {
		goto('/food/' + food.getId()).then(async () => {
			readFood();
		});
	}

	async function editButtonOnClick() {
		if (edit) {
			await writeFood();
			await readFood();
		}
		edit = !edit
	}

	async function cancelEdit() {
		edit = false;
		await readFood();
		if (food == null) {
			goto('../')
		}
	}

	async function addIngredient(ingredient: Food) {
		searchString = '';
		searchResults = [];
		if (await food.addIngredient(ingredient)) {
			await writeFood();
			await readFood();
		} else {
			alert("Could not add ingredient!");
		}
	}

	async function removeIngredient(ingredient: Food) {
		food.removeIngredient(ingredient);
		await writeFood();
		await readFood();
	}

	async function deleteButtonOnClick() {
		await FoodRegister.remove(food);
		goto('../')
	}

	async function onKeyPress(event) {
		if (event.keyCode === 8) {
			searchResults = [];
		} else if (event.keyCode === 13) {
			searchResults = await FoodRegister.getMatches(searchString);
			(document.activeElement as HTMLElement).blur();
		}
	}
</script>

<Button onClick={() => goto('../')} text={'Home'}/>

{#if food === undefined}
	<h2>Loading..</h2>
{:else}
	{#if user && user.uid === food.getAuthor()}
		<Button onClick={editButtonOnClick} text={edit? 'Save' : 'Edit'}/>
	{/if}
	{#if edit}
		<ButtonWithDialog
			text={"Cancel"}
			onClick={cancelEdit}
			dialogText={"Are you sure you want to discard your changes?"}
		/>
		<ButtonWithDialog
			text={"Delete " + food.getName()}
			onClick={deleteButtonOnClick}
			dialogText={`Are you sure you want to delete ${food.getName()}?`}
		/>
		<h3>Name</h3>
		<div>
			<TextField bind:value={name}/>
		</div>
		<h3>Description</h3>
		<div>
			<TextArea bind:value={description}/>
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
		<h3>Ingredients</h3>
		<TextField bind:value={searchString} {onKeyPress} style={'width: 50%'}/>
		<br>
		{#each searchResults as ingredient}
			<div on:click={() => addIngredient(ingredient)}>
				<FoodItem food={ingredient}></FoodItem>
			</div>
		{/each}
		{#each ingredients as ingredient}
			<div on:click={() => gotoFood(ingredient)}>
				<FoodItem food={ingredient} onDestroy={() => removeIngredient(ingredient)}></FoodItem>
			</div>
		{/each}
	{:else}
		<h1>{food.getName()}</h1>
		{#each food.getTagNames() as text}
			<Tag {text}/>
		{/each}
		<p>{food.getTime().split(" ")[0]}</p>
		<p>{food.getDescription()}</p>

		
		{#if ingredients.length}
			<h3>Ingredients</h3>
			{#each ingredients as ingredient}
			<div on:click={() => gotoFood(ingredient)}>
				<FoodItem food={ingredient}></FoodItem>
			</div>
			{/each}
		{/if}

		{#if food.getNutrition()}
			<NutritionDiagram nutrition={food.getNutrition()}/>
		{/if}
	{/if}
{/if}
