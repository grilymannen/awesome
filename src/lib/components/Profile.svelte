<script>
    import { capitalize } from '$lib/utils.js';
    let { user } = $props();
</script>
<aside class="profile-widget">
    <div class="widget-top"></div>
    <div class="widget-btm">
        <div class="btm-left">
            <div class="profile-pic-wrapper">
                <img src="{user.img}" alt ="{user.name}">
                <div 
                    class="voice-indicator" 
                    class:display-voice={user.status.voice}></div>
                <div class="status-indicator"></div>
            </div>
            <div class="username-wrapper">
                <p>{user.name}</p>
                <p>{capitalize(user.status.icon)}</p>
            </div>
        </div>
        <div class="btm-right">
            <!--TODO: Add controls-->
        </div>
    </div>
    
</aside>
<style>
    .profile-widget {
        position: fixed;
        bottom: 11px;
        left: 11px;
        z-index: 1;
    }
    .widget-btm {
        height: 56px;
        width: 446px;
        background-color: #323339;
        display: flex;
        justify-content: center;
        border-radius: 8px;
        padding: 4px;
    }
    .btm-left {
        height: 100%;
        width: 45%;
        display: flex;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
    }
    .btm-left:hover {
        background-color: rgba(255,255,255,0.1);
    }
    .btm-right {
        height: 100%;
        width: 50%;
    }
    .profile-pic-wrapper {
        height: 35px;
        width: 35px;
        position: relative;
        display: flex;
        align-items: center;
    }
    .profile-pic-wrapper img {
        height: inherit;
        width: inherit;
        border-radius: 50%;
    }
    .status-indicator {
        border-radius: 50%;
        background-color: #45a366;
        height: 11px;
        width: 11px;
        position: absolute;
        bottom: -3px;
        right: -3px;
        border: 3px #323339 solid;
    }
    .voice-indicator {
        position: absolute;
        border-radius: 50%;
        background-color: transparent;
        height: 32px;
        width: 32px;
        top: 0;
        left: 0;
        border: 1px #323339 solid;
        outline: 2px #45a366 solid;
        display: none;
    }
    .username-wrapper {
        margin: 6px;
    }
    .username-wrapper p {
        margin: 2px;
    }
    .username-wrapper p:first-child {
        font-weight: bold;
    }
    .username-wrapper p:nth-child(2) {
        color: lightgray;
        font-size: smaller;
    }
    .display-voice {
        display:block;
    }
</style>