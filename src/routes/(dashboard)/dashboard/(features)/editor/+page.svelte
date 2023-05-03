<script lang="ts">
    import PublicProfile from '$lib/components/PublicPage/PublicPage.svelte';
    import { SlideToggle } from '@skeletonlabs/skeleton';

    let editorMode:boolean = true;
</script>


<SlideToggle name="slide" bind:checked={editorMode} /> Editor

<PublicProfile editorMode={editorMode} />
