<script lang="ts">
	export let value: number | string;
	export let style: string = '';
	export let onKeyPress = undefined;
	export let type: string = 'text';
</script>

{#if type === 'text'}
	<input type="text" bind:value on:keyup={onKeyPress} {style} on:click|stopPropagation />
{:else if type === 'number'}
	<input type="number" bind:value on:keyup={onKeyPress} {style} on:click|stopPropagation />
{/if}

<style>
	input {
		padding: 8px 16px;
		border-radius: 8px;
		border-style: solid;
		border-color: lightgray;
		border-width: 1px;
	}
	input:focus {
		outline-color: gray;
	}
</style>
