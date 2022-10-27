<script lang="ts">
	import Button from './Button.svelte';
	import Dialog from './Dialog.svelte';

	export let text: string;
	export let dialogText: string = '';
	export let onClick: () => void;

	let showDialog = false;

	function buttonOnClick() {
		showDialog = true;
	}

	function rightButtonOnClick() {
		onClick();
		showDialog = false;
	}

	function leftButtonOnClick() {
		showDialog = false;
	}
</script>

<Button onClick={buttonOnClick} {text} />

{#if showDialog}
	<Dialog text={dialogText} {leftButtonOnClick} {rightButtonOnClick} />
{/if}
