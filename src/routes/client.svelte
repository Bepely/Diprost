<script>

    import {file_store} from "../stores/file"

    import Header from "../comps/parts/header.svelte"
    import Screen from "../comps/details/screen.svelte"
    import Process from "../comps/parts/pocess.svelte"

    import Button from "../comps/details/button.svelte"


    const get_file = () => {
        console.log($file_store);
        $file_store.client.img = $file_store.img
        $file_store.client.name = $file_store.name
    }

    
    </script>
    
    <Process />
    <div id="root">

        <Header />
        <div id="container" class="container">
            <h2>{$file_store.client.name}</h2>
        <Screen user="client"/>
        </div>
        <Button trigger={get_file}> Получить фото</Button>
    </div>
   
    
    
    
    <style>
    :global(body){
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media(min-width: 900px){

#container{
    

    display: grid;
    place-items: center;
}

}
    
    
    </style>