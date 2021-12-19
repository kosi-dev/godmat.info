<script lang="ts">
    export let value: string;
    export let style: string = '';
</script>

<input type="text" bind:value {style}>

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