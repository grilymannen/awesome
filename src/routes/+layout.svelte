<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<slot />

<style>
	:global(body) {
		color: white;
		margin: 0;
	}
</style>

