<script lang="ts">
    import firebase from "$lib/Images/Stacks/firebase.svg";
    import go from "$lib/Images/Stacks/Go.svg";
    import js from "$lib/Images/Stacks/js.svg";
    import supabase from "$lib/Images/Stacks/supabase.svg";
    import svelte from "$lib/Images/Stacks/svelte.svg";
    import tailwind from "$lib/Images/Stacks/tailwind.svg";
    import react from "$lib/Images/Stacks/react.svg";
	import { popup, type PopupSettings } from "@skeletonlabs/skeleton";

    /* class="btn variant-filled [&>*]:pointer-events-none" use:popup={popupHover} */

    const javasciptToolTip: PopupSettings = {
        event: 'hover',
        target: 'javasciptToolTip',
        placement: 'top'
    };

    const svelteToolTip: PopupSettings = {
        event: 'hover',
        target: 'svelteToolTip',
        placement: 'top'
    };

    const reactToolTip: PopupSettings = {
        event: 'hover',
        target: 'reactToolTip',
        placement: 'top'
    };

    const goToolTip: PopupSettings = {
        event: 'hover',
        target: 'goToolTip',
        placement: 'top'
    };

    const tailwindToolTip: PopupSettings = {
        event: 'hover',
        target: 'tailwindToolTip',
        placement: 'top'
    };

    const supabaseToolTip: PopupSettings = {
        event: 'hover',
        target: 'supabaseToolTip',
        placement: 'top'
    };

    const firebaseToolTip: PopupSettings = {
        event: 'hover',
        target: 'firebaseToolTip',
        placement: 'top'
    };


  	

</script>


<div class="card p-4 variant-filled-secondary z-10" data-popup="javasciptToolTip">
	<div class="p-2 flex flex-col gap-2 justify-center items-center sm:max-w-xl">
        <h3 class="h3">Javascript</h3>
        <p class="text-center">
            JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
        </p>
    </div>
	<div class="arrow variant-filled-secondary" />
</div>

<div class="card p-4 variant-filled-secondary z-10" data-popup="svelteToolTip">
	<div class="p-2 flex gap-2 justify-center items-center sm:max-w-xl">
        <div class="">
            <h3 class="h3">fast</h3>

            <p>Powered by <b class="text-rose-700">Svelte</b> and <b class="text-rose-700">Vite</b>, speed is baked into every crevice: fast setup, fast dev, fast builds, fast page loads, fast navigation. Did we mention it's fast?</p>
        </div>

        <div class="">
            <h3 class="h3">fun</h3>
            <p>No more wasted days figuring out bundler configuration, routing, SSR, CSP, TypeScript, deployment settings and all the other boring stuff. Code with joy.</p>
        </div>

        <div class="">
            <h3 class="h3">flexibe</h3>
            <p>SPA? MPA? SSR? SSG? Check. SvelteKit gives you the tools to succeed whatever it is you're building. And it runs wherever JavaScript does.</p>
        </div>
    </div>
	<div class="arrow variant-filled-secondary" />
</div>

<div class="card p-4 variant-filled-secondary z-10" data-popup="reactToolTip">
    <div class="p-2 flex flex-col gap-2 justify-center items-center sm:max-w-xl">
        <h3 class="h3 text-center">Create user interfaces from components</h3>
        <p class="text-center">
            React lets you build user interfaces out of individual pieces called components. Create your own React components like <b>Thumbnail</b>, <b>LikeButton</b>, and <b>Video</b>. Then combine them into entire screens, pages, and apps.
        </p>
    </div>

	<div class="arrow variant-filled-secondary" />
</div>

<div class="card p-4 variant-filled-secondary z-10" data-popup="goToolTip">
	<div class="p-2 flex flex-col gap-2 justify-center items-center sm:max-w-xl">
        <h3 class="h3">The Go programming language</h3>
        <p class="text-center">
            Go is expressive, concise, clean, and efficient. Its concurrency mechanisms make it easy to write programs that get the most out of multicore and networked machines, while its novel type system enables flexible and modular program construction. Go compiles quickly to machine code yet has the convenience of garbage collection and the power of run-time reflection. It's a fast, statically typed, compiled language that feels like a dynamically typed, interpreted language.
        </p>
    </div>
	<div class="arrow variant-filled-secondary" />
</div>

<div class="card p-4 variant-filled-secondary z-10" data-popup="tailwindToolTip">
	<div class="p-2 flex flex-col gap-2 justify-center items-center sm:max-w-xl">
        <h3 class="h3 text-center">Tailwind CSS</h3>
        <p class="font-bold text-center">Rapidly build modern websites without ever leaving your HTML.</p>
        <p class="text-center">
            A utility-first CSS framework packed with classes like <b class="text-red-800">flex</b>, <b class="text-red-800">pt-4</b>, <b class="text-red-800">text-center</b> and <b class="text-red-800">rotate-90</b> that can be composed to build any design, directly in your markup.
        </p>
    </div>
	<div class="arrow variant-filled-secondary" />
</div>

<div class="card p-4 variant-filled-secondary z-10" data-popup="supabaseToolTip">
	<div class="p-2 flex flex-col gap-2 justify-center items-center sm:max-w-xl">
        <h3 class="h3 text-center">Supabase</h3>
        <p class="font-bold text-center">Build in a weekend Scale to millions</p>
        <p class="text-center">
            Supabase is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.
        </p>
    </div>
	<div class="arrow variant-filled-secondary" />
</div>

<div class="card p-4 variant-filled-secondary z-10" data-popup="firebaseToolTip">
	<div class="p-2 flex flex-col gap-2 justify-center items-center sm:max-w-xl">
        <h3 class="h3 text-center">Firebase</h3>
        <p class="font-bold text-center">Make your app the best it can be</p>
        <p class="text-center">
            Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.
        </p>
    </div>
	<div class="arrow variant-filled-secondary" />
</div>
					

<footer class="min-h-[20dvh] bg-slate-800 flex justify-center p-5">
    <div class=" flex flex-col md:flex-row gap-2 justify-center items-center w-full">
        
        <div class="w-full flex flex-col gap-5 justify-center items-center ">
            <p class=" text-white opacity-50 truncate">Hover the icons for more details</p>
            <p class="text-center text-white">Focused on SvelteKit, Tailwind CSS, Supabase, and Firebase, I excel in crafting efficient and visually appealing web applications. Bonus proficiency in ReactJS and Go enhances my versatility in development.</p>
            <div class="flex gap-5 mt-5 ">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="transition-all hover:scale-105 [&>*]:pointer-events-none " use:popup={javasciptToolTip}><img loading="lazy" src={js} alt="" class="w-20 [&>*]:pointer-events-none" /></a>
                
                <a href="https://kit.svelte.dev/" class="transition-all hover:scale-105 [&>*]:pointer-events-none " target="_blank" use:popup={svelteToolTip}><img loading="lazy" src={svelte} alt="" class="w-20 [&>*]:pointer-events-none" /></a>
                
                <a href="https://react.dev/" target="_blank" class="transition-all hover:scale-105 [&>*]:pointer-events-none " use:popup={reactToolTip}><img loading="lazy" src={react} alt="" class="w-20 [&>*]:pointer-events-none" /></a>
                
                <a href="https://go.dev/doc/" class="transition-all hover:scale-105 [&>*]:pointer-events-none " target="_blank" use:popup={goToolTip}><img loading="lazy" src={go} alt="" class="w-20 [&>*]:pointer-events-none" /></a>
                
                <a href="https://tailwindcss.com/" class="transition-all hover:scale-105 [&>*]:pointer-events-none " target="_blank" use:popup={tailwindToolTip}><img loading="lazy" src={tailwind} alt="" class="w-20 [&>*]:pointer-events-none" /></a>
                
                <a href="https://supabase.com/" class="transition-all hover:scale-105 [&>*]:pointer-events-none " target="_blank" use:popup={supabaseToolTip}><img loading="lazy" src={supabase} alt="" class="w-20 [&>*]:pointer-events-none" /></a>
                
                <a href="https://firebase.google.com/" class="transition-all hover:scale-105 [&>*]:pointer-events-none " target="_blank" use:popup={firebaseToolTip}><img loading="lazy" src={firebase} alt="" class="w-20 [&>*]:pointer-events-none" /></a>
            </div>
        </div>

    
    </div>
</footer>

