<script lang="ts">
	import { goto } from '$app/navigation';
	import { Food } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import FoodItem from '$lib/ui/FoodItem.svelte';
	import { onMount } from 'svelte';
	import { signIn, auth } from '$lib/firebase/firebase';
	import { onAuthStateChanged } from 'firebase/auth';

	let foods: Array<Food> = []
	let user = auth.currentUser;

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
</script>


<h1>Food Register</h1>

{#if !user}
	<button on:click={signInButtonOnClick}>Sign in</button>
{:else}
	<p>Signed in as {user.displayName}</p>
	<button on:click={signOutButtonOnClick}>Sign out</button>
	<button on:click={createFoodButtonOnClick}>Create new food</button>
{/if}

{#each foods as food}
	<div on:click={() => goto('/food/' + food.getId())}>
		<FoodItem {food}></FoodItem>
	</div>
{/each}
