<script>
import {file_store, doer_store} from "../../stores/file"
import {beforeUpdate, afterUpdate} from "svelte"

import Button from "./button.svelte"






let right = (user_store) => {
    if (user_store.current_point_counter < user_store.points.length - 1) {
        user_store.current_point_counter = user_store.current_point_counter + 1
        user_store.current_point = user_store.points[user_store.current_point_counter]
        user_store.screen_emit = user_store.screen_emit++
        console.log("right 1", $doer_store.current_point_counter, "of", $doer_store.points.length - 1);
    } else if (user_store.current_point_counter >= user_store.points.length - 1){
        user_store.current_point_counter = 0
        user_store.current_point = user_store.points[user_store.current_point_counter]
        user_store.screen_emit = 0
        console.log("right 2", user_store.current_point_counter, "of", user_store.points.length - 1);
    }
    $doer_store = user_store
    console.log($doer_store, "CHANGE DONE")
}

let left = (user_store) => {
    if (user_store.current_point_counter < user_store.points.length - 1) {
        user_store.current_point_counter = user_store.points.length - 1
        user_store.current_point = user_store.points[user_store.current_point_counter]
        console.log("left 1", $doer_store.current_point_counter, "of", $doer_store.points.length - 1);
    } else if (user_store.current_point_counter >= user_store.points.length - 1){
        user_store.current_point_counter = user_store.current_point_counter - 1
        user_store.current_point = user_store.points[user_store.current_point_counter]
        console.log("left 2", user_store.current_point_counter, "of", user_store.points.length - 1);
    }
    
    $doer_store = user_store
    console.log($doer_store, "CHANGE DONE")
}
</script>



<div>
<Button trigger = {()=>{left($doer_store)}}>Предыдущее фото</Button>
<Button trigger = {()=>{right($doer_store)}}>Следующее фото</Button>
</div>



<style>

</style>