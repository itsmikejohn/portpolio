<script lang="ts">
    export let name = "btn name";
    export let loader = false;
    export let loader_name = "loadername";
    export let style = "w-full bg-[#84CC16]  p-2 rounded-lg text-black";
    export let title = ""
    export let type: "reset" | "submit" | "button" | null | undefined = "submit";
</script>

<!--@component 
    Default style is "w-full bg-[#84CC16]  p-2 rounded-lg text-black"
-->

<button {type} {title} class="{style} transition-all active:bg-opacity-50 {loader ? "cursor-progress" : ""}" disabled={loader} on:click >
    {#if loader}
        <div class="flex items-center justify-center gap-1 truncate">
            <p>{loader_name}</p>
            <div class="w-4 h-4 border-2 border-b-black rounded-full animate-spin"></div>
        </div>
    {:else}
        <p class="truncate">{name}</p>
    {/if}
</button>