<script lang="ts">
	export let style: string = '';
</script>

<div class="row" {style}>
	<slot />
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
