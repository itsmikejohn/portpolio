<script lang="ts">
	import Footer from '$lib/Components/Footer.svelte';
	import Nav from '$lib/Components/Nav.svelte';
	import '../app.postcss';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
			
			
	import { Drawer, LightSwitch } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();

</script>



<div class="fixed right-0 m-4 z-10">
	<LightSwitch />
</div>

<Nav />

<div class="min-h-[100dvh] p-2">
	<slot />
</div>

<Footer />
