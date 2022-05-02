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
    font-size: 1em;
    font-weight: 700;
    color: #000204;
    background-color: #baccdc;
    display: grid;
    width: 80%;
    height: 80%;
    place-items: center;
    border-radius: 14px;
    border: 2px solid black;
    text-align: center;
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: #baccdc;
    border: 3px solid #000204;
}

#upload_file_button{
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;
}
       
</style>