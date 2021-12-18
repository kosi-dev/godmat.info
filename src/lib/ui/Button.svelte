<script lang="ts">
    export let text: string = '';
    export let onClick = null;
</script>

<button on:click={onClick}>{text}</button>

<style>
    button {
        box-shadow: 5 5 5 5;
        border-radius: 0.5;
        background-color: blue;
        color: white;
    }
</style>
