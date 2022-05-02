<script>
import DM from "./desc_maker/DM.svelte"
import DV from "./desc_viewer/DV.svelte"
import FI from "./file_inspector/FI.svelte"
import MV from "./media_viewer/MV.svelte"
import SS from "./save_send/SS.svelte"
</script>


<div id="panel_root">
    <div id="FI" class="panel_slot"> <FI /> </div>
    <div id="DM" class="panel_slot"> <DM /> </div>
    <div id="SS" class="panel_slot"> <SS /> </div>
    <div id="MV" class="panel_slot"> <MV /> </div>
    <div id="DV" class="panel_slot"> <DV /> </div>
</div>


<style>
#panel_root{
    width: 80vw;
    height: 60vh;
    display: grid;
    grid-template-areas: "FI MV"
                         "DM MV"
                         "SS DV";
    grid-gap: 5px;
}

#FI{
    grid-area: FI;
    width: 40vw;
    height: 20vh;
}
#DM{
    grid-area: DM;
    width: 40vw;
    height: 20vh;
}
#SS{
    grid-area: SS;
    width: 40vw;
    height: 20vh;
}
#MV{
    grid-area: MV;
    width: 40vw;
    height: 40vh;
}
#DV{
    grid-area: DV;
    width: 40vw;
    height: 20vh;
}

.panel_slot{
    border: 1px solid black;
    border-radius: 14px;
    display: grid;
    place-items: center;

    width: 85vw;
    height: 60vh;
    
}
</style>