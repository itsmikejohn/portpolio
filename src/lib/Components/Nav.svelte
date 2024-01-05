<script lang="ts">
    import { navStore } from "$lib";

    let showMobile = false;

</script>

<nav class="w-full bg-[#00000050] p-2 flex justify-center">
    <div class="w-full p-2 md:max-w-[70dvw]">
        <h3 class="h3 opacity-50">My Portpolio ...</h3>
    </div>
    <!-- <button class="flex flex-col gap-1 p-2 md:hidden" on:click={() => showMobile = true}>
        <div class="w-6 border-b-2 border-white"></div>
        <div class="w-6 border-b-2 border-white"></div>
        <div class="w-6 border-b-2 border-white"></div>
    </button>

    <div class="hidden md:flex mr-5 gap-5">
        {#each $navStore.defaultNav as selection }
            <a title="Navigate to my {selection.title}." href={selection.url} class="p-2 font-bold text-white text-xl">{selection.title}</a>
        {/each}
    </div> -->
</nav>

<!-- {#if showMobile}
    <menu class="fixed left-0 right-0 top-0 bottom-0 bg-[#00000050] md:hidden">
        <div class="flex flex-col gap-2 items-center p-2 bg-slate-500 dark:bg-slate-900">
            <div class="flex justify-end w-full">
                <button class="flex flex-col gap-1 px-2 py-4" on:click={() => showMobile = false}>
                    <div class="w-6 border-b-2 border-white rotate-45 absolute"></div>
                    <div class="w-6 border-b-2 border-white rotate-[-45deg]"></div>
                </button>
            </div>

            <div class="flex flex-col py-10 gap-2 justify-start items-center">
                {#each $navStore.defaultNav as selection }
                    <a href={selection.url} class="p-2 font-bold text-white text-xl">{selection.title}</a>
                {/each}
            </div>
        </div>
    </menu>
{/if} -->