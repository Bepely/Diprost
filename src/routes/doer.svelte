<script>
    import Header from "../comps/parts/header.svelte"
    import Display from "../comps/parts/main_display.svelte"


    import {file_store} from "../stores/file"
    let files


    $: if (files) {

        file_store.file = files

        console.log(file_store);

    }
</script>

<div id="root">
    <Header />
    <div id="main_part" class="container holder">
        <div id="left">
            <h4>Название файла<input type="text"></h4>
            <input
                accept="image/png, image/jpeg"
                bind:files
                id="files"
                name="files"
                type="file"
/>
        </div>

        <div id="right">
            <Display />
        </div>
        
        
    </div>
    
    <h1>ИСПОЛНИТЕЛЬ</h1>
</div>



<style>

:global(body){
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #main_part{
        display: grid;
        place-items: center;

        grid-template-columns: 1fr 2fr;


    }

    #left{
        display: grid;
        place-items: center;

        grid-template-rows: 1fr 1fr;        
        width: 100%;
        height: 50%;
    }

    
</style>