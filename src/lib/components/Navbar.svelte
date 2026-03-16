<script>
	let hideLinks = false;
</script>
<nav class="navbar" class:hide={hideLinks}>
	<a href="/">Home</a>
	<a href="/sort">Sorting</a>
	<a href="/discord">Discord (Clone)</a>
	<a href="/calculator">Calculator</a>

	<button onclick={hideLinks = !hideLinks}>X</button>
</nav>

<style>
	a {
		margin: 0px 5px;
	}
	.hide a {
		display: none;
	}
	.navbar {
		display: flex;
		position: fixed;
		justify-content: space-evenly;
		top:0;
		left:0;
		padding: 0 5px;
		background-color: rgba(0,0,0,0.1);
		color: white;
	}
	.navbar * {
		background-color: rgba(0,0,0,0.1);
		color: inherit;
		border: none;
		cursor: pointer;
	}

</style>