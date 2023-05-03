<script lang="ts">

	import {page} from '$app/stores'
    const currencies = $page.data.currencies


	import ContactPrice from './ContactPrice.svelte'

    export let editorMode = false;
    export let config;

</script>


<section>




	{#if editorMode}
	<div>	</div>
    {:else}
		<label class="label">
			<span>Email:</span>
			<input class="input" type="text" placeholder="Input" />

			<span>Body:</span>
			<textarea class="textarea " rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
		</label>
    {/if}






	{#if editorMode}

		<ContactPrice config={config}  />
		
    {:else}
	<button type="button" class="btn variant-filled">
		<span>Submit {currencies[config.contactCurrency]}{config.contactPrice} ({config.contactCurrency})</span>
	</button>
    {/if}



</section>
