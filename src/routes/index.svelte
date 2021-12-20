<script lang="ts">
	import { goto } from '$app/navigation';
	import { Food, FoodTag, FoodTagLabels } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import FoodItem from '$lib/ui/FoodItem.svelte';
	import { onMount } from 'svelte';
	import { signIn, auth } from '$lib/firebase/firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	import Button from '$lib/ui/Button.svelte';
	import TextField from '$lib/ui/TextField.svelte';
	import SwitchButton from '$lib/ui/SwitchButton.svelte';

	let foods: Array<Food> = []
	let user = auth.currentUser;
	let searchString: string = "";
	let selectedTag: FoodTag = null;

	async function addMatvareTabellen() {
		await fetch("/matvaretabellen.json")
			.then((response) => response.json())
			.then(async (json) => {
				for (let foodData of json.foods) {
					let food: Food = new Food(foodData.name, user.uid, "", 0, foodData.nutrition);
					food.addTag(Math.floor(foodData.groupId));
					// await FoodRegister.put(food);
				}
			})
			.catch((error) => console.error(error));
	}

	onMount(async () => {
		foods = await FoodRegister.getAll();
		// addMatvareTabellen();
	});
	
	onAuthStateChanged(auth, async (u) => {
		user = u;
	});

	async function signInButtonOnClick() {
		await signIn();
	}
	
	async function signOutButtonOnClick() {
		auth.signOut();
	}

	async function createFoodButtonOnClick() {
		let food: Food = new Food("Untitled", user.uid);
		await FoodRegister.put(food);
		goto('/food/' + food.getId())
	}

	async function updateFoods(searchString: string, selectedTag: FoodTag) {
		if (searchString.length > 1) {
			foods = await FoodRegister.getMatches(searchString, selectedTag);
		} else {
			foods = await FoodRegister.getAll(selectedTag);
		}
	}

	function updateSelectedTag(tag: FoodTag) {
		selectedTag = tag;
		updateFoods(searchString, selectedTag);
	}

	function onKeyPress(event) {
		if (event.keyCode === 13){
			updateFoods(searchString, selectedTag);
		}
	}
</script>


<h1>Food Register</h1>
{#if !user}
	<Button onClick={signInButtonOnClick} text={'Sign in'}/>
{:else}
	<p>Signed in as {user.displayName}</p>
	<Button onClick={signOutButtonOnClick} text={'Sign out'}/>
	<Button onClick={createFoodButtonOnClick} text={'+ Create new food'}/>
{/if}
<br>
<br>
<h3>Search</h3>
<TextField bind:value={searchString} {onKeyPress} style={'width: 50%'}></TextField>
<br>
<br>
<details>
	<summary>Filter by tag</summary>
	{#each [...FoodTagLabels] as [tag, text]}
		<SwitchButton
			state={tag === selectedTag}
			offText={text}
			switchOff={() => updateSelectedTag(null)}
			switchOn={() => updateSelectedTag(tag)}
		/>
	{/each}
</details>
<br>
{#each foods as food}
	<div on:click={() => goto('/food/' + food.getId())}>
		<FoodItem {food}></FoodItem>
	</div>
{/each}
