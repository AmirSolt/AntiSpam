<script lang="ts">
    import {GripVertical} from 'lucide-svelte'


    export let linkItem;
    export let editorMode:boolean;

</script>



{#if editorMode}
    <a  href="">
        <i><GripVertical /></i>
        <i>{linkItem.icon}</i>
        <span>{linkItem.label}</span>
    </a>
{:else}

    <a class="" href={linkItem.link} target="_blank" rel="noopener">
        <i>{linkItem.icon}</i>
        <span>{linkItem.label}</span>
    </a>
{/if}