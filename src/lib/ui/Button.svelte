<script lang="ts">
	export let text: string = '';
	export let onClick = null;
	export let style = '';
</script>

<span>
	<button on:click|stopPropagation={onClick} {style}>{text}</button>
</span>

<style>
	button {
		padding: 4px 12px;

		border-style: solid;
		border-radius: 16px;
		border-width: 1px;

		color: black;
		background-color: lightgray;
		border-color: gray;
	}
	button:hover {
		background-color: rgb(172, 172, 172);
	}
	button:active {
		border-color: lightgray;
		background-color: lightgray;
	}
</style>
