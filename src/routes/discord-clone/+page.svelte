<script>
    import Profile from '$lib/components/Profile.svelte'
    import Servers from '$lib/components/Servers.svelte'
    import { capitalize } from '$lib/utils.js'
    const userData = $state({
        servers: [
            {
                name: "myServer", 
                img: "example.png",
                status: "unread",
                pings: 1,
                channels: [
                    "general"
                ],
            },
            {
                name: "myServer2",
                img: "full-example.jpg",
                status: "active",
                pings: 101,
                channels: [
                    "general-chat"
                ],
            },
            {
                name: "myServer3",
                img: "example.png",
                status: "unread",
                pings: 15,
                channels: [
                    "general-crap"
                ],
            },
            {
                name: "myServer4",
                img: "example.png",
                status: "",
                pings: 0,
                channels: [
                    "general-balls"
                ],
            },
        ],
        profile: {
            name: "fuckingSmirk",
            img: "full-example.jpg",
            status: {
                emoji: "",
                text: "",
                icon: "online",
                voice: "",
            },
            
        },
    })

</script>

<header>
    <div class="center header">
        <!--TODO: Text and icon-->
        <p class="bold">Discord</p>
    </div>
</header>
<nav>
    <Servers servers={userData.servers}/>
</nav>
<Profile user={userData.profile}/>


<button onclick={()=>{userData.profile.status.voice = userData.profile.status.voice ? "" : "truthy"}}>Test voice style</button>
<style>
    :global(body) {
        background-color: #2c2d32;
        color: aliceblue;
    }
    :global(body), * {
        font-family: Arial, Helvetica, sans-serif;
    }
    nav {
        height: calc(100vh - 53px);
        display: inline-flex;
        flex-direction: column;
        gap: 10px;
        width: 90px;
        left: 0;
    }
    .center {
        display: flex;
        justify-content: center;
    }
    .bold {
        font-weight: bold;
    }

</style>