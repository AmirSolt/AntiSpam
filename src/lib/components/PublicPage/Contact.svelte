<script lang="ts">

	import {Wallet} from 'lucide-svelte';

    export let editorMode = false;
    export let config;

    const currencies = ['USD', 'CAD', 'EURO'];


</script>


<section>




	{#if editorMode}
	
    {:else}
		<label class="label">
			<span>Email:</span>
			<input class="input" type="text" placeholder="Input" />

			<span>Get Your Message Seen:</span>
			<textarea class="textarea " rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
		</label>
    {/if}






	{#if editorMode}

	

		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
			<div class="input-group-shim"><Wallet /></div>
			<input type="text" placeholder="Amount" bind:value={config.contactPrice} />
			<select bind:value={config.contactCurrency}>
				{#each currencies as currency}
					{#if currency === config.contactCurrency}
						<option value={currency} selected>{currency}</option>
					{:else}
						<option value={currency}>{currency}</option>
					{/if}
				{/each}
			</select>
		</div>

    {:else}
	<button type="button" class="btn variant-filled">
		<span>Submit {config.contactCurrency} {config.contactPrice}</span>
	</button>
    {/if}



</section>
