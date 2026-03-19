<script>
  import { browser } from '$app/environment'
  import { onMount } from 'svelte';
  import { user } from '$lib/components/user.svelte.js'
  import Header from '$lib/components/Header.svelte';
  import ServerList from '$lib/components/Server-list.svelte';


  onMount(() => {
    user = localStorage.getItem("user") ?? {};
  });
  $effect(() => {
    if (!browser) { return; }
    localStorage.setItem("user", JSON.stringify(user));
  });

  
</script>



<Header />
<ServerList />

<style>
  :global(body) {
    background-color: #2c2d32;
  }
  :global(.hide) {
    display: none;
  }
  :global(.tooltip) {
    padding: 16px 8px;
    background-color: #323339;
  }
</style>