<script>
import {file_store} from "../../stores/file"

export let user = "main"


</script>

    <div id="container" class="contaner" >

        {#if user == "main"}
        Загрузите фото
        {:else}
            {#if user == "doer"}
            <img src={$file_store.doer.img} alt="Фото исполнгителя">
            {:else if user == "client"}
            <img src={$file_store.client.img} alt="Фото заказчика">
            {:else}
            Как так вышло?
            {/if}
        {/if}
    </div>
        
    


<style>
#container{
    width: 720px;
    height: 480px;

    border: 1px solid black;
    
}

img{
    width: 100%;
    height: 100%;
}
</style>