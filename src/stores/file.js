import { writable } from 'svelte/store';



export let file_store = writable({
    files: [],
    name: "",
    img: "",

    doer:{
        name: "",
        img: "",
        check: false
    },
    client:{
        name: "",
        img: "",
        check: false
    }
}) 