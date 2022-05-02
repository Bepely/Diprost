<script>
    import {doer_store} from "../../../stores/file"
import Screen from "../../details/screen.svelte"
</script>

<div id="MV_root" class="card">
    
    {#key $doer_store.current_point}
            <Screen 
            show_point = {$doer_store.current_point.file}
            user="doer"/>
            {/key}


</div>





<style>
#MV_root{
        width: 100%;
        height: 100%;
    }
</style>