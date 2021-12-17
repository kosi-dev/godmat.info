<script lang="ts">
	import { goto } from '$app/navigation';
	import { Food } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import FoodUI from '$lib/ui/FoodUI.svelte';
	import { onMount } from 'svelte';
	import { signIn, auth } from '$lib/firebase/firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	
	let foods: Array<Food> = []
	let user = auth.currentUser;

	onMount(async () => {
		await updateFoods();
	});

	async function updateFoods() {
		foods = await FoodRegister.getAll();
	}

	async function newFood() {
		await FoodRegister.register(new Food("Banana"));
		updateFoods();
	}

	async function signInButtonOnClick() {
		await signIn();
	}

	async function signOutButtonOnClick() {
		auth.signOut();
	}

	onAuthStateChanged(auth, async (u) => {
		user = u;
	});
</script>


<h1>Food Register</h1>

{#if !user}
	<button on:click={signInButtonOnClick}>Sign in</button>
{:else}
	<p>Signed in as {user.displayName}</p>
	<button on:click={signOutButtonOnClick}>Sign out</button>
{/if}

{#each foods as food}
	<div on:click={() => goto('/food/' + food.getId())}>
		<FoodUI {food}></FoodUI>
	</div>
{/each}

<button on:click={newFood}>New Food</button>
