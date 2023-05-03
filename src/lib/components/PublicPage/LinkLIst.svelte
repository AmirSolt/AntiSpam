<script lang="ts">
	export let editorMode = false
	export let config

	import AddLink from './utils/AddLink.svelte'

	$: listChangeUpdate = 0
</script>

{#if editorMode}
	<AddLink bind:config bind:listChangeUpdate />

	{#key listChangeUpdate}
		<section>
			<ul class="list-nav">
				{#each config.linkItems as linkItem}
					<li>
						<a href="#">
							<i>{linkItem.icon}</i>
							<span>{linkItem.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/key}

{:else}

	{#key listChangeUpdate}
		<section>
			<ul class="list-nav">
				{#each config.linkItems as linkItem}
					<li>
						<a href={linkItem.link} target="_blank" rel="noopener">
							<i>{linkItem.icon}</i>
							<span>{linkItem.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/key}
{/if}

<!-- <span>(icon)</span>
<span class="flex-auto">Skeleton</span>
 -->
