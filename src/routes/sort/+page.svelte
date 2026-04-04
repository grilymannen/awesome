<script>
    import { fly } from 'svelte/transition';
    let array = $state([]);

    // Static complexity data
    const algorithmComplexities = {
        bubble: { best: 'O(n)', average: 'O(n²)', worst: 'O(n²)' },
        quick: { best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n²)' },
        selection: { best: 'O(n²)', average: 'O(n²)', worst: 'O(n²)' },
        merge: { best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n log n)' }
    };

    let sortState = $state({
        // Current sorting session state
        session: {
            isSorting: false,
            comparisonCount: 0,
            switchCount: 0,
            timeElapsed: 0,
            startTime: null,
            comparing: { i: -1, j: -1, pivot: -1 }
        },
        // User-configurable settings
        settings: {
            delay: 50,
            algorithm: 'bubble',
            autoShuffle: false,
            partyMode: false
        },
        // Historical data
        history: {
            results: []
        }
    });

    $effect(() => {
        if (sortState.session.isSorting) {
            updateTimeElapsed();
        }
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function fillArray(amount = 10) {
        for (let i = 0; i < amount; i++) {
            array.push(i + 1);
        }
    }

    async function shuffleArray() {
        // Fisher-Yates shuffle
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            if (sortState.settings.delay > 0) {
                await pause(sortState.settings.delay);
            }
        }
    }

    function updateArrayLength(newLength) {
        newLength = parseInt(newLength) || 0;
        while (array.length < newLength) {
            array.push(array.length + 1);
        }
        while (array.length > newLength) {
            array.pop();
        }
    }

    function pause(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function bubbleSort(arr = array) {
        for (let i = 0; i < arr.length - 1; i++) {
            let swapped = false;
            for (let j = 0; j < arr.length - i - 1; j++) {
                sortState.session.comparing = { i: j, j: j + 1, pivot: -1 };
                sortState.session.comparisonCount++;
                if (arr[j] > arr[j + 1]) {
                    sortState.session.switchCount++;
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swapped = true;
                }
                if (sortState.settings.delay > 0) {
                    await pause(sortState.settings.delay);
                }
            }
            if (!swapped) break;
        }
        sortState.session.comparing = { i: -1, j: -1, pivot: -1 };
    }

    async function quickSort(arr = array, low = 0, high = array.length - 1) {
        if (low < high) {
            let pi = await partition(arr, low, high);
            await quickSort(arr, low, pi - 1);
            await quickSort(arr, pi + 1, high);
        }
        if (low === 0 && high === array.length - 1) {
            sortState.session.comparing = { i: -1, j: -1, pivot: -1 };
        }
    }

    async function partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;
        sortState.session.comparing = { i: -1, j: -1, pivot: high };

        for (let j = low; j < high; j++) {
            sortState.session.comparing = { i: j, j: high, pivot: high };
            sortState.session.comparisonCount++;
            if (arr[j] < pivot) {
                i++;
                sortState.session.switchCount++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            if (sortState.settings.delay > 0) {
                await pause(sortState.settings.delay);
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }

    async function selectionSort(arr = array) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                sortState.session.comparing = { i: j, j: minIdx, pivot: -1 };
                sortState.session.comparisonCount++;
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
                if (sortState.settings.delay > 0) {
                    await pause(sortState.settings.delay);
                }
            }
            if (minIdx !== i) {
                sortState.session.switchCount++;
                [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            }
        }
        sortState.session.comparing = { i: -1, j: -1, pivot: -1 };
    }

    async function mergeSort(arr = array) {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = await mergeSort(arr.slice(0, mid));
        const right = await mergeSort(arr.slice(mid));

        return await merge(left, right);
        
        async function merge(left, right) {
            let result = [];
            let i = 0;
            let j = 0;

            while (i < left.length && j < right.length) {
                sortState.session.comparing = { i: left[i], j: right[j], pivot: -1 };
                sortState.session.comparisonCount++;
                if (left[i] < right[j]) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
                if (sortState.settings.delay > 0) {
                    await pause(sortState.settings.delay);
                }
            }

            return result.concat(left.slice(i)).concat(right.slice(j));
        }
    }
    async function sortWithAlgorithm() {
        sortState.session.isSorting = true;
        sortState.session.comparisonCount = sortState.session.switchCount = sortState.session.timeElapsed = 0;
        sortState.session.startTime = performance.now();
        switch (sortState.settings.algorithm) {
            case 'bubble':
                await bubbleSort();
                break;
            case 'quick':
                await quickSort();
                break;
            case 'selection':
                await selectionSort();
                break;
            case 'merge':
                array = await mergeSort();
                break;
        }
        sortState.session.isSorting = false;

        // Auto shuffle
        if (sortState.settings.autoShuffle) {
            await shuffleArray();
        }

        // Store results
        if (sortState.history.results.length >= 5) {
            sortState.history.results.shift();
        }
        sortState.history.results.push({
            algorithm: sortState.settings.algorithm,
            comparisons: sortState.session.comparisonCount,
            switches: sortState.session.switchCount,
            time: sortState.session.timeElapsed
        });
    }

    function updateTimeElapsed() {
        if (sortState.session.isSorting) {
            sortState.session.timeElapsed = Math.floor(performance.now() - sortState.session.startTime);
            requestAnimationFrame(updateTimeElapsed);
        }
    }

    async function partyMode() {
        while (sortState.settings.partyMode) {
            document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`;
            await shuffleArray();
            await pause(250);
        }
        document.body.style.backgroundColor = '';
    }

    fillArray(10);
    shuffleArray();

</script>

<title>Sorting Algorithms</title>
<h1>Sorting Algorithms</h1>

<main>
    {#each array as item, idx}
        <div class="stack"
            class:selected={sortState.session.comparing.i === idx || sortState.session.comparing.j === idx}
            class:pivot={sortState.session.comparing.pivot === idx && sortState.settings.algorithm === 'quick'}
            style="width:{100/array.length}%; height: {100/Math.max(...array)*item}%; background-color: hsl({(item / array.length) * 360}, 100%, 50%);">
        </div>
    {/each}
</main>

<aside>
    <p>Comparisons: {sortState.session.comparisonCount}</p>
    <p>Switches: {sortState.session.switchCount}</p>
    <p>Time Elapsed: {sortState.session.timeElapsed} ms</p>
    <p>Complexity: Best <i>{algorithmComplexities[sortState.settings.algorithm].best}</i>, Average <i>{algorithmComplexities[sortState.settings.algorithm].average}</i>, Worst <i>{algorithmComplexities[sortState.settings.algorithm].worst}</i></p>
</aside>

<div class="controls">
    <button onclick={sortWithAlgorithm} disabled={sortState.session.isSorting}>Sort</button>
    <button onclick={shuffleArray} disabled={sortState.session.isSorting}>Shuffle</button>

    <label for="delay">Delay (ms):</label>
    <input type="number" min="0" max="100" step="10" bind:value={sortState.settings.delay} disabled={sortState.session.isSorting} />

    <label for="size">Array Size:</label>
    <input type="number" min="5" max="500" value={array.length} oninput={(e) => updateArrayLength(e.target.value)} disabled={sortState.session.isSorting} />

    <label for="algorithm">Algorithm:</label>
    <select bind:value={sortState.settings.algorithm} disabled={sortState.session.isSorting}>
        <option value="bubble">Bubble Sort</option>
        <option value="quick">Quick Sort</option>
        <option value="selection">Selection Sort</option>
        <option value="merge">Merge Sort</option>
    </select>

    <label for="auto-shuffle">Auto Shuffle:</label>
    <input type="checkbox" bind:checked={sortState.settings.autoShuffle} />

    <label for="party-mode">Party Mode:</label>
    <input type="checkbox" bind:checked={sortState.settings.partyMode} oninput={partyMode} />
</div>

<div class="result-container" class:last-result={sortState.history.results.length === 5}>
    {#each sortState.history.results as result}
        <div class="result">
            <h3>{capitalizeFirstLetter(result.algorithm)} Sort</h3>
            <p>Comparisons: {result.comparisons}</p>
            <p>Switches: {result.switches}</p>
            <p>Time: {result.time} ms</p>
        </div>
    {/each}
    {#if sortState.history.results.length === 0}
        <h3>No results yet</h3>
    {/if}
</div>

<style>
    :global(body) {
        margin: 0;
        background-color: #15151f;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: aliceblue;
    }

    h1 {
        text-align: center;
    }

    main {
        display: flex;
        position: relative;
        align-items: flex-end;
        background-color: rgba(0, 0, 0, 0.2);
        height: 70vh;
        padding: 10px;
    }

    aside {
        position: absolute;
        backdrop-filter: blur(10px);
        padding: 10px;
        border-radius: 10px;
        top: 25px;
        left: 25px;
    }

    .stack {
        margin: 0px;
        transition: all 0.2s;
    }

    .stack.selected {
        outline: 1px solid white;
    }

    .stack.pivot {
        border: 2px solid orange;
    }

    .controls {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin: 10px;
        align-items: center;
    }
    .result-container {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-flow: wrap row-reverse;
        margin-top: 20px;
        padding: 10px;
    }
    .last-result {
        mask-image: linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    }
</style>