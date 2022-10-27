<script lang="ts">
	export let text: string = '';
</script>

<span>
	{text}
</span>

<style>
	span {
		padding: 0.5em 1em;

		border-radius: 0.6em;
		border: 1.5px solid gray;
		color: black;

		height: min-content;
		margin: 0.5em;
	}
</style>
