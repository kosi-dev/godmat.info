<script lang="ts">
	import { goto } from '$app/navigation';
	import { Food } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import FoodItem from '$lib/ui/FoodItem.svelte';
	import { onMount } from 'svelte';
	import { signIn, auth } from '$lib/firebase/firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	import Button from '$lib/ui/Button.svelte';
	import TextField from '$lib/ui/TextField.svelte';

	let foods: Array<Food> = []
	let user = auth.currentUser;
	let searchString: string;

	onMount(async () => {
		foods = await FoodRegister.getAll();
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
		let food: Food = new Food("Untitled");
		await FoodRegister.put(food);
		goto('/food/' + food.getId())
	}

	async function updateFoods(searchString: string) {
		if (searchString) {
			foods = await FoodRegister.getMatches(searchString);
		} else {
			foods = await FoodRegister.getAll();
		}
	}

	$: updateFoods(searchString);

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
<TextField bind:value={searchString} style={'width: 50%'}></TextField>
<br>
<br>
{#each foods as food}
	<div on:click={() => goto('/food/' + food.getId())}>
		<FoodItem {food}></FoodItem>
	</div>
{/each}
