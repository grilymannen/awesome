<script>
    import {base} from '$app/paths'
    import { goto } from '$app/navigation'
    let { servers } = $props();
</script>

{#each servers as srvr, i}
    <div class="server">
        <div class="img-wrapper">
            <img 
                src="{srvr.img}" 
                alt="{srvr.name}"
                style="filter: hue-rotate({360 / servers.length * i}deg)">
            <div 
                class="ping"
                class:display={srvr.pings}>
                <p>{srvr.pings ? srvr.pings >= 100 ? "+99" : srvr.pings : ""}</p>
            </div>
        </div>
        
        <div 
            class="message-indicator"
            class:has-msg={srvr.status}
            class:unread={srvr.status === "unread"}
            class:active={srvr.status === "active"}></div>
        <div class="server-tooltip">
            {srvr.name}
        </div>
    </div>
{/each}
<div class="extra img-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
    </svg>
</div>

<div class="extra img-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
</div>
<style>
    .img-wrapper {
        width: 40px;
        height: 40px;
        align-self: center;
        cursor: pointer;
        position: relative;
    }
    .img-wrapper img {
        width: inherit;
        height: inherit;
        border-radius: 10px;
    }

    .img-wrapper svg {
        width: 50%;
        height: 50%;
    }
    .server:first-child .img-wrapper {
        padding-top: 10px;
        border-top: 1px #3f3f3f solid;
    }
    .server {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .message-indicator {
        width: 8px;
        height: 0;
        border-radius: 4px;
        opacity: 0;
        position: absolute;
        left: -8px;
        background-color: transparent;
        transition: all 0.3s;
    }
    .server:first-child .message-indicator{
        transform: translateY(8px);
    }
    .unread {
        height: 8px;
    }
    .img-wrapper:hover + .message-indicator {
        height: 20px;
        opacity: 1;
        background-color: white;
        left: -4px;
    }
    .server .message-indicator.active {
        height: 40px;
    }
    .has-msg {
        background-color: white;
        opacity: 1;
        left: -4px;
    }
    .ping {
        background-color: #da3e44;
        border: #2c2d32 2px solid;
        z-index: 1;
        position: absolute;
        bottom: -15%;
        right: -15%;
        display: none;
        min-width: 16px;
        height: 16px;
        border-radius: 16px;
        justify-content: center;
        align-items: center;
    }
    .ping p {
        margin: 0;
        font-weight: bolder;
        display: inherit;
        font-size: clamp(10px, 90%, 12px);
        text-align: center;
        vertical-align: middle;
        padding: 1px 2px;
    }
    .display {
        display: inline-flex;
    }
    .extra {
        background-color: #323339;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        position: relative;
        transition: background-color 0.3s, top 0.3s;
    }
    .extra svg {
        fill: #dcdcdf;
        transition: fill 0.3s;
    }
    .extra:hover {
        background-color: #5865f2;
    }
    .extra:active {
        top: 2px;
    }
    .extra:hover svg {
        fill: white;
    }
    .server-tooltip {
        position: absolute;
        left: 90%;
        background-color: #323339;
        padding: 8px 16px;
        opacity: 0;
        box-shadow: 0 0 40px 0 #222;
        transition: opacity 0.3s;
        border-radius: 8px;
        font-weight: bolder;
    }
    .img-wrapper:hover ~ .server-tooltip {
        opacity: 1;
    }
</style>
