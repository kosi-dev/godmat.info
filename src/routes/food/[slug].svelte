<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Food, FoodTagLabels } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import { auth } from '$lib/firebase/firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	import Button from '$lib/ui/Button.svelte';
	import FoodItem from '$lib/ui/FoodItem.svelte';
	import ButtonWithDialog from '$lib/ui/ButtonWithDialog.svelte';
	import SwitchButton from '$lib/ui/SwitchButton.svelte';
	import Tag from '$lib/ui/Tag.svelte';
	import TextField from '$lib/ui/TextField.svelte';
	import TextArea from '$lib/ui/TextArea.svelte';
	import NutritionDiagram from '$lib/ui/NutritionDiagram.svelte';
	import Row from '$lib/ui/Row.svelte';

	let edit: boolean = false;
	let user = null;
	let food: Food = undefined;
	let ingredients: Array<Food> = [];
	let nutrition = null;
	let name: string = '';
	let description: string = '';
	let searchString: string = '';
	let searchResults: Array<Food> = [];
	let foodWeight = 0;

	async function onLoad(slug: string) {
		await FoodRegister.init();
		await readFood();
		onAuthStateChanged(auth, async (u) => {
			user = u;
			if (user) {
				if (food == null) {
					food = new Food('Untitled', user.uid, slug);
					edit = true;
				}
			}
		});
	}

	$: onLoad($page.params.slug);

	function addIngredientCallback(ingredient: Food) {
		ingredients.push(ingredient);
		foodWeight += food.getIngredientWeight(ingredient);
		ingredients = ingredients;
	}

	async function readFood() {
		foodWeight = 0;
		food = await FoodRegister.getFood($page.params.slug);
		if (food !== null) {
			ingredients = [];
			name = food.getName();
			description = food.getDescription();
			await food.getIngredients(addIngredientCallback);
			nutrition = await food.getNutrition(ingredients);
		}
	}

	async function writeFood() {
		food.setDescription(description);
		food.setName(name);
		await FoodRegister.putFood(food);
	}

	async function gotoFood(food: Food) {
		goto('/food/' + food.getId());
	}

	async function editButtonOnClick() {
		if (edit) {
			await writeFood();
			nutrition = await food.getNutrition();
		}
		edit = !edit;
	}

	async function cancelEdit() {
		edit = false;
		await readFood();
		if (food == null) {
			goto('../');
		}
	}

	async function addIngredient(ingredient: Food) {
		searchString = '';
		searchResults = [];
		if (await food.addIngredient(ingredient)) {
			await writeFood();
			await readFood();
		} else {
			alert('Could not add ingredient!');
		}
	}

	async function removeIngredient(ingredient: Food) {
		food.removeIngredient(ingredient);
		await writeFood();
		await readFood();
	}

	async function onDelete() {
		await readFood();
		if (food != null) {
			await FoodRegister.removeFood(food);
		}
		goto('../');
	}

	function addSearchResult(food: Food) {
		searchResults.push(food);
		searchResults = searchResults;
	}

	async function onKeyPress(event: { keyCode: number }) {
		if (event.keyCode === 8) {
			searchResults = [];
		} else if (event.keyCode === 13) {
			searchResults = [];
			FoodRegister.getFoods(addSearchResult, searchString);
			(document.activeElement as HTMLElement).blur();
		}
	}
</script>

{#if food === undefined}
	<h2>Loading..</h2>
{:else if food === null}
	<h2>Undefined food!</h2>
{:else if edit}
	<Button onClick={editButtonOnClick} text={'Lagre'} />
	<ButtonWithDialog
		text={'Avbryt'}
		onClick={cancelEdit}
		dialogText={'Er du sikker på at du vil forkaste endringene dine?'}
	/>
	<ButtonWithDialog
		text={'Slett ' + name}
		onClick={onDelete}
		dialogText={`Er du sikker på at du vil slette ${name}?`}
	/>
	<h3>Navn</h3>
	<div>
		<TextField bind:value={name} />
	</div>
	<h3>Beskrivelse</h3>
	<div>
		<TextArea bind:value={description} />
	</div>
	<h3>Etiketter</h3>
	{#each [...FoodTagLabels] as [tag, text]}
		<SwitchButton
			state={food.hasTag(tag)}
			offText={text}
			switchOff={() => food.removeTag(tag)}
			switchOn={() => food.addTag(tag)}
		/>
	{/each}
	<h3>Ingredienser</h3>
	<TextField bind:value={searchString} {onKeyPress} style={'width: 50%'} />
	<br />

	{#if searchResults.length}
		<div class="searchResultsContainer">
			{#each searchResults as ingredient}
				<div on:click={() => addIngredient(ingredient)}>
					<FoodItem food={ingredient} />
				</div>
			{/each}
		</div>
	{/if}
	{#each ingredients as ingredient}
		<FoodItem
			food={ingredient}
			onDestroy={() => removeIngredient(ingredient)}
			onChangeWeight={(weight) => food.setIngredientWeight(ingredient, weight)}
			weight={food.getIngredientWeight(ingredient)}
		/>
	{/each}
{:else}
	<Button onClick={() => goto('../')} text={'Hjem'} />
	{#if user && user.uid === food.getAuthor()}
		<Button onClick={editButtonOnClick} text={edit ? 'Lagre' : 'Rediger'} />
	{/if}
	<Row style="justify-content: space-between;">
		<h1>{food.getName()}</h1>
		<div>
			{#each food.getTagNames() as text}
				<Tag {text} />
			{/each}
		</div>
	</Row>
	<p>{food.getTime().split(' ')[0]}</p>
	<p>{food.getDescription()}</p>
	{#if foodWeight !== 0}
		<p>Totalvekt: {foodWeight} gram.</p>
	{/if}
	{#if ingredients.length}
		<h3>Ingredienser</h3>
		{#each ingredients as ingredient}
			<div on:click={() => gotoFood(ingredient)}>
				<FoodItem food={ingredient} weight={food.getIngredientWeight(ingredient)} />
			</div>
		{/each}
	{/if}

	{#if nutrition !== null}
		<br />
		<NutritionDiagram {nutrition} {foodWeight} />
	{/if}
{/if}

<style>
	.searchResultsContainer {
		position: absolute;
		height: 400px;
		width: 50%;
		overflow: auto;
		background-color: rgb(200, 200, 200, 0.5);
	}
</style>
