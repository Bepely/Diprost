<script>
import Screen from "../details/screen.svelte"
import Button from "../details/button.svelte"

export let fileName = "Название файла"
</script>

<div id="container" class="container">
    <h2>{fileName} </h2>
    <Screen />
    <Button />


</div>


<style>
    @media(min-width: 900px){

        #container{
            

            display: grid;
            place-items: center;
        }

}
</style>