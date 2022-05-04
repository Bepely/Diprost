<script>
export let textholder = "текст"
export let target = ""
export let fn = console.log("FN is not assigned");


</script>


<div id="upload_text_box">
    <label for="text"><slot></slot></label><input name="text" id="text" on:change={fn(target)} bind:value={target} type="text" placeholder="Введите {textholder}">
</div>


<style>
#text{
    width: 300px;
    height: 30px;

    text-align: center;

    border-radius: 5px;
    border: 1px solid ;
}
</style>