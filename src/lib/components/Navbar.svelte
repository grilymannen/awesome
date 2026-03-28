<script>
	let hideLinks = false;
</script>
<nav class="navbar" class:hide={hideLinks}>
	<a href="/">Home</a>
	<a href="/sort">Sorting</a>
	<a href="/discord">Discord (Clone)</a>
	<a href="/calculator">Calculator</a>

	<button onclick={hideLinks = !hideLinks}>✖</button>
</nav>

<style>
	a {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	.navbar {
		display: flex;
		position: fixed;
		justify-content: space-evenly;
		top: 0;
		left: 0;
		gap: 8px;
		padding: 4px;
		background-color: rgba(0,0,0,0.1);
		color: white;
		transition: left 500ms;
	}
	.navbar.hide {
		left: -280px;
	}
	.navbar * {
		background-color: transparent;
		color: inherit;
		border: none;
		cursor: pointer;
	}
	

</style>