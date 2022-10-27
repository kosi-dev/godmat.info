<script lang="ts">
	import Button from '$lib/ui/Button.svelte';

	export let state: boolean = false;
	export let offText: string;
	export let onText = offText;
	export let switchOn: () => void;
	export let switchOff: () => void;

	function onStateOnClick() {
		switchOff();
		state = false;
	}

	function offStateOnClick() {
		switchOn();
		state = true;
	}
</script>

<span class="parent">
	{#if state}
		<Button onClick={onStateOnClick} text={onText} className={'selected'} />
	{:else}
		<Button onClick={offStateOnClick} text={offText} />
	{/if}
</span>

<style>
	.parent > :global(button):not(.selected) {
		background-color: lightgrey !important;
		border-color: grey;
		color: black;
	}
</style>
