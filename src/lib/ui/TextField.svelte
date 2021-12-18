<script>
    export let value;
</script>

<input type="text" bind:value>

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