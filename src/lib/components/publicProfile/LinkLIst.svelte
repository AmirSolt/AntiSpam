<script lang="ts">


    export let editorMode = false;
    export let config;



</script>


{#each config.linkItems as linkItem }
    <br>
    <a href="{linkItem.link}" target="_blank" rel="noopener">
        <i>{linkItem.icon}</i>
        <span>{linkItem.label}</span>
    </a>
    <br>
{/each}