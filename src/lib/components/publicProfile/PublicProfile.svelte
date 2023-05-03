<script lang="ts">

  import { PublicProfileConfig, LinkItem } from './config';


  const linkItems: LinkItem[] = [
    new LinkItem(
      "https://tiktok.com/",
      "fab fa-tiktok",
      "TikTok"
    ),
    new LinkItem(
      "https://instagram.com/",
      "fab fa-instagram",
      "Instagram"
    ),
    new LinkItem(
      "https://twitter.com/",
      "fab fa-twitter",
      "Twitter"
    ),
]

  const sampleConfig = new PublicProfileConfig(
        "https://avatars.githubusercontent.com/u/81866624?s=400&u=1a4b0b0b9b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0&v=4",
        linkItems,  
    );




    export let editorMode: boolean = false;
    export let config: PublicProfileConfig = sampleConfig;


    import Heading from '$lib/components/publicProfile/Heading.svelte';
    import Contact from '$lib/components/publicProfile/Contact.svelte';
    import LinkLIst from '$lib/components/publicProfile/LinkLIst.svelte';
</script>



<Heading  editorMode={editorMode} config={config} />

<br>
<br>

<Contact  editorMode={editorMode} config={config} />

<br>
<br>

<LinkLIst  editorMode={editorMode} config={config} />


