<script lang="ts">
	export let style: string = '';
</script>

<div class="column" {style}>
	<slot />
</div>

<style>
	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
