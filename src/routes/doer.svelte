<script>
// @ts-nocheck


    import Header from "../comps/parts/header.svelte"
    import Screen from "../comps/details/screen.svelte"

    import Process from "../comps/parts/pocess.svelte"

    import Button from "../comps/details/button.svelte"
    import File_input from "../comps/details/input_file.svelte"
    import Text_input from "../comps/details/input_text.svelte"


    import {file_store} from "../stores/file"

    let  files, name;
   

    let sendFile = () => {
        $file_store.name = $file_store.doer.name            //Функция отвечает за отправку файла с сайта на сервер
        $file_store.img = $file_store.doer.img
        $file_store.check = true
        console.log($file_store);
    }
	



	const chooseFile =(e)=>{
            let image = e.target.files[0];                //Функция отвечает за загрузку файла с устройства на сайт
            let reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {$file_store.doer.img = e.target.result};
        }


    const removeFile = () => {
        $file_store.img = ""
        $file_store.name = ""
        $file_store.doer.name = ""
        $file_store.doer.img = ""
        $file_store.client.img = ""
        $file_store.client.name = ""
    }

    const setName = (t) => {
        
        $file_store.doer.name = t
    }
   
</script>



<Process />
<div id="root">
    <Header />
    <div id="main_part" class="container holder">
        <div id="left">
            <div id="file_holder">
                <File_input trigger={chooseFile}/>
                <Text_input fn={setName} target={$file_store.doer.name} textholder="название файла"/>
            </div>
            

            <Button trigger={sendFile}>Отправить фото</Button>
            <Button trigger={removeFile}>Удалить фото</Button>
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
        border: 1px solid black;

    }

    #left{
        display: grid;
        place-items: center;

        grid-template-rows: 1fr 1fr;        
        width: 100%;
        height: 50%;
    }

    #file_holder{
        display: grid;
        place-items: center;

        grid-template-columns: 1fr 1fr;
        width: 100%;
    }
    


   
    
</style>