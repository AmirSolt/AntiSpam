<script lang="ts">


    export let editorMode = false;
    export let config;

    import { Avatar } from '@skeletonlabs/skeleton';
</script>


<Avatar src='{config.pfp}' width="w-32" rounded="rounded-full" />

<h1>
    @{config.username}
</h1>

<p>
    {config.bio}
</p>