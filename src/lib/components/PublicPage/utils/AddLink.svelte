<script lang="ts">
	import { LinkItem } from '../config'
	import type { PublicPageConfig } from '../config'

	export let config: PublicPageConfig
    export let listChangeUpdate:number

	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'

	const icons = [
		'fas fa-address-book',
		'fas fa-address-card',
		'fas fa-adjust',
		'fas fa-align-center',
		'fas fa-align-justify',
	]

	let newUrl: string = ''
	let newLabel: string = ''
	let newIcon: string = icons[0]
	function urlChangeHandler() {
        // look up icon
	}

	function submitLink() {
		const newLinkItem = new LinkItem({
			link: newUrl,
			icon: newLabel,
			label: newIcon,
		})

		config.linkItems.unshift(newLinkItem)
        listChangeUpdate++

        newUrl = ""
        newLabel = ""
        newIcon = icons[0]
	}
</script>



<Accordion >
	<AccordionItem >
		<svelte:fragment slot="lead" >
            <span class="btn-icon  variant-filled">+</span>
        </svelte:fragment>
		<svelte:fragment slot="summary">
            <span >Add Link</span> 
        </svelte:fragment>
		<svelte:fragment slot="content">
            <form on:submit={submitLink}  >
                <label class="label">
                    <span>Url</span>
                    <input
                        bind:value={newUrl}
                        class="input"
                        type="text"
                        placeholder="https://..."
                        on:input={urlChangeHandler}
                    />
                </label>
    
                <label class="label">
                    <span>Icon</span>
                    <select bind:value={newIcon} class="select">
                        {#each icons as icon}
                            <option value={icon}>{icon}</option>
                        {/each}
                    </select>
                </label>
    
                <label class="label">
                    <span>Label</span>
                    <input
                        bind:value={newLabel}
                        class="input"
                        type="text"
                        placeholder="Describe the link"
                    />
                </label>
    
                <div class="text-end">
                    <button type="submit" class="btn variant-filled" 
                        >Submit</button
                    >
                </div>
            </form>
		</svelte:fragment>
	</AccordionItem>
</Accordion>

<hr>
