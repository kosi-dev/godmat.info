<script lang="ts">
	import { goto } from '$app/navigation';
	import { Food } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import FoodUI from '$lib/FoodUI.svelte';
	import { onMount } from 'svelte';

	let foods: Array<Food> = []

	onMount(async () => {
		await updateFoods();
	});

	async function updateFoods() {
		foods = await FoodRegister.getAll();
	}

	async function newFood() {
		console.log('Click!');
		await FoodRegister.register(new Food("Banana"));
		updateFoods();
	}
</script>


<h1>Food Register</h1>

{#each foods as food}
	<div on:click={() => goto('/food/' + food.getId())}>
		<FoodUI {food}></FoodUI>
	</div>
{/each}

<button on:click={newFood}>New Food</button>
