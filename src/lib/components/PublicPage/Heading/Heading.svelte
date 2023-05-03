<script lang="ts">


    export let editorMode = false;
    export let config;

    import { Avatar } from '@skeletonlabs/skeleton';

    import { FileButton } from '@skeletonlabs/skeleton';


    let files: FileList;
    function onUploadHandler(e: Event): void {
        console.log('file data:', e);
        console.log('file data:', files);
    }

    let value="";

</script>



<section>

    <Avatar src='{config.pfp}' width="w-32" rounded="rounded-full" />
    
    {#if editorMode}
        <FileButton name="files" bind:files on:change={onUploadHandler}>
        +
        </FileButton>
    {/if}
    
    
    
    <h1>
        @{config.username}
    </h1>
    
    
    {#if editorMode}
        <label class="label">
            <span>Bio:</span>
            <textarea bind:value={config.bio} class="textarea " rows="4" placeholder="Tell us about yourself."  />
        </label>
    {:else}
        <p>
            {config.bio}
        </p>
    {/if}

</section>    

