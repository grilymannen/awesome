<script>
  import Header from '$lib/components/Header.svelte';
  import ServerList from '$lib/components/Server-list.svelte';
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