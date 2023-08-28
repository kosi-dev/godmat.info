<script lang="ts">
	export let text: string = '';
	export let onClick: ((e: Event) => void) | null = null;
	export let style = '';
	export let className = '';
</script>

<button on:click|stopPropagation={onClick} {style} class={className}>{text}</button>

<style>
	button {
		padding: 0.5em 1em;
		margin: 0.2em;

		border: 1.5px solid rgb(24, 68, 126);
		border-radius: 0.5em;

		color: white;
		background-color: rgb(56, 127, 207);

		cursor: pointer;
	}

	button:hover {
		background-color: rgb(40, 144, 235);
	}

	button:active {
		border-color: rgba(255, 255, 255, 0);
		background-color: rgb(24, 68, 126);
	}
</style>
