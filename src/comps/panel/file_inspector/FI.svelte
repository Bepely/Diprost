<script>
import Input from "../../details/input_file.svelte"
import Instance from "./Point_instance.svelte"
import {doer_store, file_store} from "../../../stores/file"

import Point from "../../../stores/Point"




const chooseFile =()=>{      
    //Функция отвечает за загрузку файла с устройства на сайт

    let counter = 0
    let file_buffer = []

    let set_doer_files = () => {
        $doer_store.points = file_buffer
        $doer_store.current_point = $doer_store.points[0]
        $doer_store.screen_check = true;
        counter = 0;
        console.log("DONE!", $doer_store);}
            
            $doer_store.screen_check = false;
            Array.from($file_store.doer.raw_files).forEach(img => {
                
                const reader = new FileReader()
                reader.readAsDataURL(img)
                reader.onload = () => {
                    let point = new Point(counter, reader.result, "salam")
                    file_buffer.push(point)
                    counter++    
                    if(counter == Array.from($file_store.doer.raw_files).length){
                    set_doer_files();
                    } 
                                    
                }
                
            })
                   
            
       
        }

           




</script>

<div id="FI_root" class="card">
    {#each $doer_store.points as point_inst}
    <div id="point_inst">
        <Instance instance={point_inst}/>
    </div>
        {:else}
        SALAM
    {/each}
    <Input trigger={chooseFile}/>
</div>


<style>
#FI_root{
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5px;

    overflow-y: scroll;
    overflow:auto;
    margin: 5px;
}

#point_inst{
    display: grid;
    place-items: center;
    border: 1px solid black;
    border-radius: 14px;
    width: 5vw;
    height: 5vw;
}
</style>