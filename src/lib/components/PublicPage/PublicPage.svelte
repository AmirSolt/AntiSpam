<script lang="ts">

  import { PublicPageConfig, LinkItem, getSamplePPC } from './config';


    export let editorMode: boolean = false;
    export let config: PublicPageConfig = getSamplePPC();


    import Heading from './Heading/Heading.svelte';
    import Contact from './Contact/Contact.svelte';
    import LinkList from './LinkList/LinkList.svelte';
</script>



<Heading  editorMode={editorMode} config={config} />

<br>
<br>

<Contact  editorMode={editorMode} config={config} />

<br>
<br>

<LinkList  editorMode={editorMode} config={config} />


