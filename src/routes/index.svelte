<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { signIn, auth } from '$lib/firebase/firebase';
	import { Food, FoodTag, FoodTagLabels } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import { nanoid } from 'nanoid';
	import Button from '$lib/ui/Button.svelte';
	import FoodItem from '$lib/ui/FoodItem.svelte';
	import TextField from '$lib/ui/TextField.svelte';
	import SwitchButton from '$lib/ui/SwitchButton.svelte';
	import { onAuthStateChanged } from 'firebase/auth';

	let foods: Array<Food> = [];
	let user = null;
	let searchString: string = '';
	let selectedTag: FoodTag = null;

	async function addMatvareTabellen() {
		await fetch('/matvaretabellen.json')
			.then((response) => response.json())
			.then(async (json) => {
				for (let foodData of json.foods) {
					let food: Food = new Food(foodData.name, user.uid, foodData.slug, foodData.nutrition);
					food.addTag(foodData.groupId);
					await FoodRegister.put(food);
				}
			})
			.catch((error) => console.error(error));
	}

	onMount(async () => {
		foods = await FoodRegister.getAll();
		onAuthStateChanged(auth, async (u) => {
			user = u;
			if (user) {
				// await addMatvareTabellen();
			}
		});
	});

	async function signInButtonOnClick() {
		await signIn(auth);
	}

	async function signOutButtonOnClick() {
		auth.signOut();
	}

	async function createFoodButtonOnClick() {
		goto('/food/' + nanoid(12)); // TODO: Might not be okay
	}

	async function updateFoods(searchString: string, selectedTag: FoodTag) {
		if (searchString.length > 1) {
			foods = await FoodRegister.getMatches(searchString); //, selectedTag);
		} else {
			foods = await FoodRegister.getAll(selectedTag);
		}
	}

	function updateSelectedTag(tag: FoodTag) {
		selectedTag = tag;
		updateFoods(searchString, selectedTag);
	}

	function onKeyPress(event) {
		if (event.keyCode === 13) {
			updateFoods(searchString, selectedTag);
			(document.activeElement as HTMLElement).blur();
		}
	}
</script>

<h1>godmat.info</h1>
<p>- God info om god mat!</p>
{#if !user}
	<Button onClick={signInButtonOnClick} text={'Sign in'} />
{:else}
	<p>Signed in as {user.displayName}</p>
	<Button onClick={signOutButtonOnClick} text={'Sign out'} />
	<Button onClick={createFoodButtonOnClick} text={'+ Create new food'} />
{/if}
<br />
<br />
<h3>Search</h3>
<TextField bind:value={searchString} {onKeyPress} style={'width: 50%'} />
<br />
<br />
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
<br />
{#each foods as food}
	<div on:click={() => goto('/food/' + food.getId())}>
		<FoodItem {food} />
	</div>
{/each}
