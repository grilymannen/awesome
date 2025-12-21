<script>
	import { page } from '$app/stores';
</script>

<nav>
	<div class="nav-container">
		<a href="/" class="logo">Awesome</a>

		<a href="/" class:active={$page.url.pathname === '/'}>Home</a>

		<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>

	</div>
</nav>

<main>
	<slot />
</main>

