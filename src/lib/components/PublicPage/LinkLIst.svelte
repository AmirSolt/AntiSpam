<script lang="ts">
	export let editorMode = false
	export let config

	import AddLink from './utils/AddLink.svelte'
	import DNDList from './utils/DNDList.svelte';
    import LinkItem from './utils/LinkItem.svelte'



</script>

{#if editorMode}
	<AddLink bind:config />

	<DNDList bind:config editorMode={editorMode} />



{:else}

	<section>
		<ul class="list-nav">
			{#each config.linkItems as linkItem}
			<li>

				<LinkItem linkItem={linkItem} editorMode={editorMode} />
			</li>
			{/each}
		</ul>
	</section>
{/if}

