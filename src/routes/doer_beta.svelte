<script>
import Panel from "../comps/panel/Panel.svelte"
import Header from "../comps/parts/header.svelte"



</script>


<div id="root">
    <Header />
    <div id="Panel"> <Panel /> </div>
   
</div>


<style>
#Panel{
    display: grid;
    place-items: center;
}
    
</style>