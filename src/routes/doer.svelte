<script>
// @ts-nocheck

    import Header from "../comps/parts/header.svelte"
    import Screen from "../comps/details/screen.svelte"

    import Process from "../comps/parts/pocess.svelte"

    import Button from "../comps/details/button.svelte"


    import {file_store} from "../stores/file"

    let  files, name;
   

    let sendFile = () => {
        $file_store.name = $file_store.doer.name            //Функция отвечает за отправку файла с сайта на сервер
        $file_store.img = $file_store.doer.img
        $file_store.check = true
    }
	



	const onFileSelected =(e)=>{
            let image = e.target.files[0];                //Функция отвечает за загрузку файла с устройства на сайт
            let reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {$file_store.doer.img = e.target.result};
        }
   
</script>



<Process />
<div id="root">
    <Header />
    <div id="main_part" class="container holder">
        <div id="left">
            <h4>Название файла<input bind:value={name} on:input={$file_store.doer.name = name} type="text"></h4>
            <input
                accept=".jpg, .jpeg, .png"
                bind:files
                id="files"
                name="files"
                type="file"
                on:change= {(e)=>onFileSelected(e)}/>

            <Button trigger={sendFile}> Отправить фото</Button>
        </div>

        <div id="right">
            <h2>{$file_store.name} </h2>
            <Screen 
            user="doer"/>
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