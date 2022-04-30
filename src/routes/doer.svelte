<script>
// @ts-nocheck


    import Header from "../comps/parts/header.svelte"
    import Screen from "../comps/details/screen.svelte"

    import Process from "../comps/parts/pocess.svelte"

    import Button from "../comps/details/button.svelte"
    import File_input from "../comps/details/input_file.svelte"
    import Text_input from "../comps/details/input_text.svelte"

    import LR from "../comps/details/lr.svelte"

    import Point from "../stores/Point"


    import {file_store, doer_store} from "../stores/file"


    let screen_emit = $doer_store.screen_emit

     

    let sendFile = () => {
        $file_store.name = $file_store.doer.name            //Функция отвечает за отправку файла с сайта на сервер
        $file_store.img = $file_store.doer.img
        $file_store.check = true
        console.log($file_store);
    }
	

    let setPoint = () => {              //Функция отвечает за создание и описание поинта в работу
       let point = {
          name: $file_store.doer.name,
          file: $file_store.doer.img,
          desc: $file_store.doer.desc
        }
        $doer_store.points.push(point)

    }



    const chooseFile =()=>{      
    //Функция отвечает за загрузку файла с устройства на сайт

    let counter = 0
    let file_buffer = []

    let set_doer_files = () => {
        $doer_store.points = file_buffer
        $doer_store.current_point = $doer_store.points[0]
        $doer_store.screen_check = true;
        counter = 0;
        console.log("DONE!", $doer_store);}
            
            $doer_store.screen_check = false;
            Array.from($file_store.doer.raw_files).forEach(img => {
                
                const reader = new FileReader()
                reader.readAsDataURL(img)
                reader.onload = () => {
                    let point = new Point(counter, reader.result, "salam")
                    file_buffer.push(point)
                    counter++    
                    if(counter == Array.from($file_store.doer.raw_files).length){
                    set_doer_files();
                    } 
                                    
                }
                
            })
                   
            
       
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
            {#key $doer_store.current_point}
            <Screen 
            show_point = {$doer_store.current_point.file}
            user="doer"/>
            {/key}
            
            <LR/>
            
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