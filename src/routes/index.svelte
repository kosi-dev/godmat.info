<script lang="ts">
	import { goto } from '$app/navigation';
	import { Food } from '$lib/food';
	import { register } from '$lib/food-register';
	import FoodUI from '$lib/FoodUI.svelte';

	function newFood() {
		register.register(new Food('Banana'));
		register.foods = register.foods
	}
</script>


<h1>Food Register</h1>

{#each [...register.foods.values()] as food}
	<div on:click={() => goto('/food/' + food.getId())}>
		<FoodUI {food}></FoodUI>
	</div>
{/each}

<button on:click={newFood}>New Food</button>
