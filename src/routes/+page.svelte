<script>
  import { mount } from "svelte";
  import Notification from "$lib/components/Notification.svelte";
  function addNotification(text) {
    const target = document.getElementById("notification-bar");
    mount(Notification, {
      target: target,
      props: {
        text: text
      }
    });
  }
  
</script>


<header>
  <img alt="widget-main" src>
  <h1>Hello! I am <u>grily</u></h1>
</header>

<div id="notification-bar"></div>
<button onclick={addNotification("Hello, World!")}>Add notification</button>
<style>
  :global(body) {
    background-color: #222;
  }
  * {
    color: #eee;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
  #notification-bar {
    display: flex;
    position: fixed;
    bottom: 16px;
    right: 16px;
    flex-direction: column-reverse;
  }

  
  
</style>