<script>
// @ts-nocheck

    import { file_store } from "../../stores/file";

    export let trigger = (e) => {console.log("file input trigger")}
</script>


<div id="upload_file_button">
<input 
    type="file" 
    name="file"
     bind:files={$file_store.doer.raw_files}
     multiple id="file" class="inputfile"
     accept=".jpg, .jpeg, .png"
     on:change={(e)=>trigger(e)}
/>
<label for="file">Выберите файл</label>
</div>




<style>
    .inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

.inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: #000204;
    background-color: #baccdc;
    display: grid;
    width: 200px;
    height: 50px;
    place-items: center;
    border-radius: 5px;
    border: 0px;
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: #baccdc;
    border: 3px solid #000204;
}
       
</style>