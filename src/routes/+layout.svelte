<script lang="ts">
	import Header from '$lib/components/basic/Header.svelte'
	import Footer from '$lib/components/basic/Footer.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';

	import '@skeletonlabs/skeleton/themes/theme-crimson.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'
</script>

<svelte:head>
	<title>Enterprise</title>
	<link rel="icon" href="https://fav.farm/🔥" />
</svelte:head>








<AppShell>

	<svelte:fragment slot="header">
		<header>
			<Header />
		</header>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="footer">
		<footer>
			<Footer />
		</footer>
		
	</svelte:fragment>
</AppShell>
