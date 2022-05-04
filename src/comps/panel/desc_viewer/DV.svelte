<script>
import {doer_store} from "../../../stores/file"
</script>

<div id="DV_root" class="card">
    <div id="fields_container">
        <h2 id="name">{$doer_store.current_point.name}</h2>
        <p id="desc">{$doer_store.current_point.desc}</p>
    </div>
</div>


<style>
    #DV_root{
        width: 100%;
        height: 100%;
    }

    #fields_container{
        display: grid;
        place-items: center;
        grid-template-rows: 1fr 3fr;
    }

</style>