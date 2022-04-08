<script>

import {file_store} from "../../stores/file"


    export let trigger = () => {
      console.log("triggering");
    }

</script>


    <div id="container" class="contaner">
        <button on:click={trigger}><slot></slot></button>
    </div>

<style>
button{
    width: 200px;
    height: 50px;
}

</style>