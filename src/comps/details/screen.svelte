<script>

import {file_store, doer_store} from "../../stores/file"
import { onMount, beforeUpdate, afterUpdate } from 'svelte';

export let user = "main"

export let show_point = "https://thumbs.dreamstime.com/b/wait-handwritten-white-background-wait-169511926.jpg"

    


</script>

    <div id="container" class="contaner" >          
        
            {#if user == "main"}
            Загрузите фото
            {:else}
                {#if user == "doer"}   
                    <img src={show_point} alt="">
                {:else if user == "client"}
                    <img src={$file_store.client.img} alt="Фото заказчика">
                {:else}
                Как так вышло?
                {/if}
                
            {/if}
    </div>
        
    


<style>
#container{
    display: grid;
    place-items: center;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    
}

img{
    max-width: 40vw;
    max-height: 40vh;
    object-fit: cover;
    border-radius: 14px;
}
</style>