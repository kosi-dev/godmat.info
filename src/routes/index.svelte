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

	let foods: Array<Food> = null;
	let user = null;
	let searchString: string = '';
	let selectedTag: FoodTag = null;
	let selectedUserFoods: boolean = false;

	onMount(async () => {
		await FoodRegister.init();
		await updateFoods();
		onAuthStateChanged(auth, async (u) => {
			user = u;
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

	function addFood(food) {
		if (!foods) {
			foods = [];
		}
		foods.push(food);
		foods = foods;
	}

	async function updateFoods() {
		foods = null;
		if (selectedUserFoods) {
			await FoodRegister.getFoods(
				addFood, searchString, selectedTag, user.uid);
		} else {
			await FoodRegister.getFoods(addFood, searchString, selectedTag);
		}
		if (foods === null) {
			foods = [];
		}
	}

	function selectTag(tag: FoodTag) {
		selectedTag = tag;
		updateFoods();
	}

	function selectUserFoods(select: boolean) {
		selectedUserFoods = select;
		updateFoods();	
	}

	function onKeyPress(event) {
		if (event.keyCode === 13) {
			updateFoods();
			(document.activeElement as HTMLElement).blur();
		}
	}
</script>

<h1>godmat.info</h1>
<p>- God info om god mat!</p>
{#if !user}
	<Button onClick={signInButtonOnClick} text={'Logg in med Google'} />
{:else}
	<p>Innlogget som {user.displayName} ✔️</p>
	<Button onClick={signOutButtonOnClick} text={'Logg ut'} />
	<Button onClick={createFoodButtonOnClick} text={'+ Lag ny oppskrift'} />
{/if}
<br />
<br />
<h3>Søk</h3>
<TextField bind:value={searchString} {onKeyPress} style={'width: 50%'} />
<br />
<br />
<details>
	<summary>Filtrer</summary>
	<br>
	{#if user}
		<SwitchButton
			state={selectedUserFoods}
			offText={"Mine oppskrifter"}
			switchOff={() => selectUserFoods(false)}
			switchOn={() => selectUserFoods(true)}
		/>
		<br>
		<br>
	{/if}
	{#each [...FoodTagLabels] as [tag, text]}
		<SwitchButton
			state={tag === selectedTag}
			offText={text}
			switchOff={() => selectTag(null)}
			switchOn={() => selectTag(tag)}
		/>
	{/each}
</details>
<br />
{#if foods !== null}
	{#if foods.length === 0}
		<p>Ingen resultater :(</p>
	{:else}
		{#each foods as food}
			<div on:click={() => goto('/food/' + food.getId())}>
				<FoodItem {food} />
			</div>
		{/each}
	{/if}
{:else}
	<p>Loading..</p>
{/if}