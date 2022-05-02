import { writable, derived} from 'svelte/store';




export let doer_store = writable({
    points: [],
    current_point: {},
    current_point_counter: 0,

    screen_check: false,
    screen_emit: 0

})

export let client_store = writable({

})


export let file_store = writable({
    files: [],
    name: "",
    img: "",

    doer:{
        raw_files: [],
        imgs: [],
        name: "",
        img: "",
        desc: "",

        current: 0,
        
        check: false
    },
    client:{
        
        name: "",
        img: "",
        check: false
    }
}) 