<script>
import {doer_store} from "../../../stores/file"
import Text_input from "../../details/input_text.svelte"


let setName = (t) => {
    $doer_store.current_point.name = t
}
let setDesc = (t) => {
    $doer_store.current_point.desc = t
}
</script>

<div id="DM_root" class="card">
    <div id="texts">
        <h3>Опишите файл</h3>
    </div>
    <div id="inputs_holder">
    <Text_input fn={setName} target={$doer_store.current_point.name} textholder="Название файла">Имя файла</Text_input>
    <Text_input fn={setDesc} target={$doer_store.current_point.desc} textholder="Описание файла">Описание</Text_input>
    </div>
</div>


<style>
#DM_root{
        width: 100%;
        height: 100%;

        display: grid;
        place-items: center;
        grid-template-rows: 1fr 3fr;
    }
</style>