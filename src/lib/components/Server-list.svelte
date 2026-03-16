<script>
  import Server from '$lib/components/Server.svelte';

  

  const serverTemplate = {
    name: "Your Server", // Add username possibly?
    icon: "",
    unread: false,
    active: false,
    pings: 0,
    participants: [],
    badge: {
      boosts: 0,
      community: false,
      verified: false,
      partner: false,
    }
  }

</script>

<nav class="server-list">
  <!--Bootstrap SVG: https://icons.getbootstrap.com/icons/discord/-->
  <button class="special-icon" aria-label="home">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
    </svg>
  </button>
  <!--TODO: Add top for dms/calls-->


  {#each serverList as serv, index}
    <Server/> 
  {/each}




  <button class="special-icon" aria-label="add-server" onclick={addServer}>
    <!--Bootstrap SVG: https://icons.getbootstrap.com/icons/plus-circle-fill/-->
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
    </svg>
  </button>

  <button class="special-icon" aria-label="discover">
    <!--Bootstrap SVG: https://icons.getbootstrap.com/icons/wrench-adjustable-circle-fill/-->
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
      <path d="M6.705 8.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27z"/>
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m-6.202-4.751 1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2a7.03 7.03 0 0 1-2.949-2.951M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61"/>
    </svg>
  </button>
</nav>

<style>
  .server-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    height: calc(100vh - 32px);
    width: 64px;

    overflow-y: scroll;
    scrollbar-width: none;
  }

  .special-icon {
    position: relative;
    width: 40px;
    height: 40px;
    background-color: #35363a;
    color: #f3f3f4;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 100ms;
  }
  .special-icon:hover {
    background-color: #5865f2;
    color: #fff;
  }
  .special-icon:active {
    top: 2px;
  }

  .special-icon svg {
    color: inherit;
  }
</style>