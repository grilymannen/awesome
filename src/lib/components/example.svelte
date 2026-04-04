<script>
	import Counter from './Counter.svelte';

	let counters = $state([]);
	let id = 0;

	function addCounter() {
		counters = [...counters, { id: id++ }];
	}

	function removeCounter() {
		counters = counters.slice(0, -1);
	}
</script>

<button onclick={addCounter}>Add counter</button>
<button onclick={removeCounter}>Remove counter</button>

{#each counters as counter (counter.id)}
	<Counter />
{/each}