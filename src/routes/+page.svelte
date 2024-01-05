<script lang="ts">
	import Button from "$lib/Components/Button.svelte";
	import myProfile from "$lib/Images/myprofile.jpg";
	import yt from "$lib/Images/yt.svg";
	import gh from "$lib/Images/gh.svg";
	import linkIn from "$lib/Images/in.svg";
	import fb from "$lib/Images/fb.svg";
	import folder from "$lib/Images/folder.svg";
	import Projects from "./Projects.svelte";

    import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
    import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';

    const drawerStore = getDrawerStore();

    const drawerSettings: DrawerSettings = {
        id: 'example-1',
        meta: { foo: 'bar', fizz: 'buzz', age: 40 }
    };

	
	

</script>

<div class="mx-auto md:max-w-[70dvw] flex flex-col min-h-[100dvh] items-center justify-center my-[20dvh] md:my-0">
	<div class="">
		

		<div class="flex flex-col md:flex-row gap-10 justify-center items-center">
			
			<div class="">
				<img loading="lazy" src={myProfile} alt="MikePicture" class="w-[300px] rounded-full" />
			</div>
		
			<div class="w-full flex flex-col gap-5">
				<h1 class="h1 ">Hi! I'm Mike John, an aspiring web developer.</h1>
				<p>
					As a passionate and curious individual, I have always been fascinated by the logic behind computers. This interest has led me to develop a strong foundation in web development, and I am constantly seeking to expand my knowledge and skills in this field. With my enthusiasm and dedication, I am confident that I can make a valuable contribution to any team.
				</p>

				<p>
					I am confident that web development is a field with a bright future, and I am excited to be a part of it. In addition to my studies, I have also gained experience in making websites through my personal projects. I have built websites for my friends, family, and community organizations. I have also built websites for businesses and startups.
				</p>
			</div>
			
		</div>

		<div class="flex flex-col xl:flex-row xl:justify-end mt-[5dvh]">
			<div class="flex flex-col items-center xl:flex-row gap-4">
				<button title="Click, to see my created projects." class="flex items-center gap-2 underline text-xl transition-all hover:text-red-500 active:scale-95"
				on:click={ () => drawerStore.open(drawerSettings) }
				><img loading="lazy" src={folder} alt="" class="w-6 " /> Created Projects </button>

				<a title="Click, to see my linkedin profile." target="_blank" href="https://www.linkedin.com/in/mike-john-eviota-4443a6288/" class="flex items-center gap-2 underline text-xl transition-all hover:text-red-500 active:scale-95"><img loading="lazy" src={linkIn} alt="" class="w-6 dark:bg-white rounded-full" /> LinkedIn </a>
				
				<a title="Click, to see my github account." target="_blank" href="https://github.com/itsmikejohn" class="flex items-center gap-2 underline text-xl transition-all hover:text-red-500 active:scale-95"><img loading="lazy" src={gh} alt="" class="w-6 dark:bg-white rounded-full" /> Github Link </a>
				
				<a title="Click, to see my facebook profile." target="_blank" href="https://www.facebook.com/mike.eviota/" class="flex items-center gap-2 underline text-xl transition-all hover:text-red-500 active:scale-95"><img loading="lazy" src={fb} alt="" class="w-6 dark:bg-white rounded-full" /> Facebook </a>
				
				<a title="Click, to see my youtube channel." target="_blank" href="https://www.youtube.com/@mikeSharesCode" class="flex items-center gap-2 underline text-xl transition-all hover:text-red-500 active:scale-95"><img loading="lazy" src={yt} alt="" class="w-6" /> Youtube Channel </a>
			</div>
		</div>

		<Drawer>
			{#if $drawerStore.id === 'example-1'}
				<Projects />
			{:else if $drawerStore.id === 'example-2'}
				asd
			{:else}
				<!-- (fallback contents) -->
			{/if}
		</Drawer>
		
	</div>
	
</div>