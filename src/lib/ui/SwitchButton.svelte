<script lang="ts">
	import Button from '$lib/ui/Button.svelte';

	export let state: boolean = false;
	export let offText;
	export let onText = offText;
	export let switchOn;
	export let switchOff;

	function onStateOnClick() {
		switchOff();
		state = false;
	}

	function offStateOnClick() {
		switchOn();
		state = true;
	}
</script>

{#if state}
	<Button onClick={onStateOnClick} text={onText} style={'border-color: blue'} />
{:else}
	<Button onClick={offStateOnClick} text={offText} />
{/if}
