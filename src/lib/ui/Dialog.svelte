<script lang="ts">
    import Button from "./Button.svelte";

    export let text: string = "";
    export let leftButtonText = "Cancel";
    export let rightButtonText = "Confirm";
    export let leftButtonOnClick = null;
    export let rightButtonOnClick = null;
</script>

<div class="wrapper">
    <div class="dialog">
        <div class="row" style="flex-grow: 3">
            <p>{text}</p>
        </div>
        <div class="row" style="flex-grow: 1">
            <Button onClick={leftButtonOnClick} text={leftButtonText}></Button>
            <Button onClick={rightButtonOnClick} text={rightButtonText}></Button>
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
        min-width: 300px;
        max-width: 50%;
        min-height: 200px;

        background-color: aqua;
        border-radius: 16px;
        padding: 16px;

        display: flex;
        flex-direction: column;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>
