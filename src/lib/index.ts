import { writable } from "svelte/store";

export const navStore = writable({
    defaultNav: [
        {
            title: "Profile",
            url: "/"
        },

        {
            title: "Knowledge",
            url: "/Knowledge"
        },

        {
            title: "Projects",
            url: "/Projects"
        },

        
    ]
})