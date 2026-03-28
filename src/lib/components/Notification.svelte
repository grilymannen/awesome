<script>
  let { text = "Text goes... somewhere.", type = "info" } = $props()
</script>
<div class="wrapper">
  <!--Icon from https://icons8.com/icon/82742/info-->
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24">
    <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"></path>
  </svg>
  <span>{text}</span>
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px black solid;
    border-radius: 8px;
    z-index: 1;
    padding: 8px;
    animation: slideIn 500ms forwards;
    width: 240px;
  }
  * {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #bbb;
    fill: #bbb;
  }
  @keyframes slideIn {
    0% {opacity: 0; transform: translateX(16px);}
    100% {opacity: 1; transform: translateX(0px);}
  }
</style>