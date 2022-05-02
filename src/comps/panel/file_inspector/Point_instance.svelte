<script>
    import {doer_store} from "../../../stores/file"

export let instance

let switchCurrent = () => {
    $doer_store.current_point = instance
    console.log($doer_store);
}
</script>

    <div id="instance" on:click={switchCurrent}>
        {instance.name}
    </div>



<style>
#instance{
    width: 100%;
    height: 100%;
}
</style>