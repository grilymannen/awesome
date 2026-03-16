<script>
  import { formatServerName } from '$lib/utils.js'
  /*
    relevant server props
    {
      name: "servername",
      icon: "full-example.jpg",
      unread: true,
      active: false,
      pings: "123",
      participants: [
        {img: "full-example.jpg", streaming: false, video: false,},
      ],
      badge: {
        boosts: 0,
        community: false,
        verified: false,
        partner: false,
      }
    }
  */

</script>
{#if serv}
  <div class="server-wrapper">
    <button onclick={() => {setActive(serv.uuid)}} class="img-wrapper">
      <img src={serv.icon} alt={serv.name + "-icon"} class:hide={!serv.icon}/>
      <p class:hide={serv.icon}>{formatServerName(serv.name)}</p>
    </button>
    <div 
      class="notification"
      class:unread={serv.unread}
      class:active={serv.active}></div>
  </div>
{/if}
<style>
  .server-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #35363a;
    border: none;
    padding: 0;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    transition: all 100ms;
    cursor: pointer;
  }

  .img-wrapper img {
    width: inherit;
    height: inherit;
    border-radius: inherit;
  }
  .img-wrapper p {
    color: #fff;
    font-family: "gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .img-wrapper:hover  {
    background-color: #5865f2;
  }
  .notification {
    position: absolute;
    left: -4px;
    width: 8px;
    height: 0;
    border-radius: 4px;
    background-color: white;
    transition: all 100ms;
  }
  .unread {
    height: 8px;
  }
  .img-wrapper:hover + .notification {
    height: 50%;
  }
  .server-wrapper .notification.active {
    height: 100%;
  }
</style>