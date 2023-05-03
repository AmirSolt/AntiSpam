<script lang="ts">

  import { PublicPageConfig, LinkItem, getSamplePPC } from './config';


    export let editorMode: boolean = false;
    export let config: PublicPageConfig = getSamplePPC();


    import Heading from './Heading.svelte';
    import Contact from './Contact.svelte';
    import LinkList from './LinkList.svelte';
</script>



<Heading  editorMode={editorMode} config={config} />

<br>
<br>

<Contact  editorMode={editorMode} config={config} />

<br>
<br>

<LinkList  editorMode={editorMode} config={config} />


