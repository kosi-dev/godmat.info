<script lang="ts">
	import Button from './Button.svelte';

	export let text: string = '';
	export let leftButtonText = 'No';
	export let rightButtonText = 'Yes';
	export let leftButtonOnClick = null;
	export let rightButtonOnClick = null;
</script>

<div class="wrapper">
	<div class="dialog">
		<div class="row" style="flex-grow: 3">
			<p>{text}</p>
		</div>
		<div class="row" style="flex-grow: 1">
			<Button onClick={leftButtonOnClick} text={leftButtonText} />
			<Button onClick={rightButtonOnClick} text={rightButtonText} />
		</div>
	</div>
</div>

<style>
	.wrapper {
		position: fixed;
		width: 100%;
	}
	.dialog {
		position: relative;
		margin: auto;
		margin-top: 100px;

		min-width: 300px;
		max-width: 50%;
		min-height: 200px;

		background-color: white;
		border-radius: 16px;
		padding: 16px;
		box-shadow: 0px 16px 32px 0px rgba(128, 128, 128, 0.5);

		display: flex;
		flex-direction: column;
	}
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
</style>
