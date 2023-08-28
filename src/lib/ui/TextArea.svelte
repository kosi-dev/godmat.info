<script lang="ts">
	export let value: string;
	export let style: string = '';
	export let onKeyPress: ((e: Event) => void) | undefined = undefined;
</script>

<textarea bind:value on:keyup={onKeyPress} {style} on:click|stopPropagation />

<style>
	textarea {
		padding: 8px 16px;
		border-radius: 8px;
		border-style: solid;
		border-color: lightgray;
		border-width: 1px;
	}
	textarea:focus {
		outline-color: gray;
	}
</style>
