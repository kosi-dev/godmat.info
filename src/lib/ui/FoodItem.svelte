<script lang="ts">
	import type { Food } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import Button from './Button.svelte';
	import Row from './Row.svelte';
	import Tag from './Tag.svelte';
	import TextField from './TextField.svelte';

	export let food: Food;
	export let weight: number = undefined;
	export let onChangeWeight: (weight: number) => void = undefined;
	export let onDestroy: Function = undefined;

	let ingredientNames: Array<string> = [];

	async function updateAttributes(food: Food) {
		if (food != null) {
			ingredientNames = [];
			FoodRegister.getNamesFromKeys(food.getIngredientIds(), (name: string) =>
				ingredientNames.push(name)
			);
			ingredientNames = ingredientNames;
		}
	}

	$: updateAttributes(food);
	$: if (onChangeWeight !== undefined) {
		onChangeWeight(weight);
	}
	$: name = food.getName();
</script>

<div class="card">
	{#if !food}
		<h3>Undefined food!</h3>
	{:else}
		<Row style="justify-content: space-between;">
			<div>
				{#if weight}
					<h3>{weight}g {name.length ? name : 'Uten navn'}</h3>
				{:else}
					<h3>{name.length ? name : 'Uten navn'}</h3>
				{/if}
				<p>
					{#if ingredientNames.length}
						<span>{ingredientNames.length} ingredienser. </span>
					{:else}
						<span>Basisvare. </span>
					{/if}
				</p>
			</div>
			<div>
				{#each food.getTagNames() as text}
					<Tag {text} />
				{/each}
			</div>
		</Row>

		{#if onDestroy !== undefined}
			<Button text={'Delete'} onClick={onDestroy} />
		{/if}
		{#if weight !== undefined}
			{#if onChangeWeight !== undefined}
				<span>Vekt: </span>
				<TextField bind:value={weight} type={'number'} />
			{/if}
		{/if}
	{/if}
</div>

<style>
	.card {
		margin: 8px 0px;
		background-color: white;
		border-radius: 16px;
		border-width: 3px;
		border-style: solid;
		border-color: white;
		padding: 4px 16px;
		box-shadow: 0px 16px 32px 0px rgba(128, 128, 128, 0.5);
		cursor: pointer;
	}

	.card:hover {
		border-color: lightgray;
	}

	.card:active {
		background-color: lightgray;
	}
</style>
