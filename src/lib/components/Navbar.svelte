<script>
    let menuOpen = false;
</script>

<nav class:hidden={menuOpen}>
	<div class="nav-links" >
		<a href="/">Home</a>
	</div>
	<button onclick={() => menuOpen = !menuOpen} aria-label="Toggle Navigation Bar">
		<svg class:flipped={menuOpen} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8 10l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	</button>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		backdrop-filter: blur(10px);
		background-color: rgba(0, 0, 0, 0.2);
		position: relative;
		transition: bottom 0.3s ease-in-out;
		bottom: 0;
	}
	button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		margin: 0;
	}
	.nav-links {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		
		margin: 1rem 0;
	}
	.hidden {
		bottom: 3rem;
	}
	.flipped {
		transform: rotate(180deg);
	}
	button svg {
		transition: transform 0.3s ease-in-out;
	}
</style>
