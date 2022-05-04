<script>
import {doer_store} from "../../../stores/file"
import Button from "../../details/button.svelte"


let send = () => {
    console.log("SENDING ", $doer_store);
}
let mainpage = () => {
    location.href = "http://localhost:3000"
}
</script>

<div id="SS_root" class="card">
    <Button trigger={mainpage}>На главную</Button>
    <Button trigger={send}>Отправить работу</Button>
</div>


<style>
#SS_root{
        width: 100%;
        height: 100%;
    }
</style>