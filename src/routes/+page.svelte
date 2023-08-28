<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { signIn, auth } from '$lib/firebase/firebase';
	import { Food, FoodTag, FoodTagLabels } from '$lib/core/food';
	import { FoodRegister } from '$lib/core/food-register';
	import Button from '$lib/ui/Button.svelte';
	import FoodItem from '$lib/ui/FoodItem.svelte';
	import TextField from '$lib/ui/TextField.svelte';
	import SwitchButton from '$lib/ui/SwitchButton.svelte';
	import { onAuthStateChanged, type User } from 'firebase/auth';
	import Row from '$lib/ui/Row.svelte';
	import { foodId } from '$lib/stores/foodStore';
	import { nanoid } from 'nanoid';

	let foods: Food[] | null = null;
	let user: User | null = null;
	let searchString: string = '';
	let selectedTag: FoodTag | null = null;
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
		foodId.set(nanoid(12));
		goto('/food');
	}

	function addFood(food: Food) {
		if (!foods) {
			foods = [];
		}
		foods.push(food);
		foods = foods;
	}

	async function updateFoods() {
		foods = null;
		if (selectedUserFoods && user) {
			await FoodRegister.getFoods(addFood, searchString, selectedTag, user.uid);
		} else {
			await FoodRegister.getFoods(addFood, searchString, selectedTag);
		}
		if (foods === null) {
			foods = [];
		}
	}

	function selectTag(tag: FoodTag | null) {
		selectedTag = tag;
		updateFoods();
	}

	function selectUserFoods(select: boolean) {
		selectedUserFoods = select;
		updateFoods();
	}

	function onKeyPress(event: KeyboardEvent) {
		if (event.code === 'Enter') {
			updateFoods();
			(document.activeElement as HTMLElement).blur();
		}
	}
</script>

<Row style="justify-content: space-between">
	<div>
		<h1>godmat.info</h1>
		<span>- God info om god mat!</span>
	</div>
	<div>
		{#if !user}
			<Button onClick={signInButtonOnClick} text={'Logg inn med Google'} />
		{:else}
			<details>
				<summary>
					Innlogget som {user.displayName} ✔️
				</summary>
				<Button onClick={signOutButtonOnClick} text={'Logg ut'} />
			</details>
		{/if}
	</div>
</Row>
<br />
<h3>Søk</h3>
<Row style="justify-content: space-between">
	<TextField bind:value={searchString} {onKeyPress} style={'width: 50%'} />
	{#if user}
		<Button onClick={createFoodButtonOnClick} text={'+ Lag ny oppskrift'} />
	{/if}
</Row>

<br />
<br />
{#if user}
	<SwitchButton
		state={selectedUserFoods}
		offText={'Mine oppskrifter'}
		switchOff={() => selectUserFoods(false)}
		switchOn={() => selectUserFoods(true)}
	/>
{/if}
{#each [...FoodTagLabels] as [tag, text]}
	<SwitchButton
		state={tag === selectedTag}
		offText={text}
		switchOff={() => selectTag(null)}
		switchOn={() => selectTag(tag)}
	/>
{/each}
<br />
<br />
{#if foods !== null}
	{#if foods.length === 0}
		<p>Ingen resultater :(</p>
	{:else}
		{#each foods as food}
			<div
				on:click={() => {
					foodId.set(food.getId());
					goto('/food');
				}}
			>
				<FoodItem {food} />
			</div>
		{/each}
	{/if}
{:else}
	<p>Loading..</p>
{/if}
