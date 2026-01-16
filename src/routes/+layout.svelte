<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Theme from '$lib/components/Theme.svelte';
</script>

<Navbar />
<Theme />
<main>
	<slot />
</main>

<style>
	:global(body) {
		margin: 0;
		min-height: 100vh;
		background-color: #17181a;
		color: #e5e7eb;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}
</style>

