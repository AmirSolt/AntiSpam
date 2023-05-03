
<script lang="ts">

    import {page} from '$app/stores'
    const currencies = $page.data.currencies

	import {Wallet} from 'lucide-svelte';

    export let config;


</script>





<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
    <div class="input-group-shim"><Wallet /></div>
    <input type="text" placeholder="Amount" bind:value={config.contactPrice} />
    <select bind:value={config.contactCurrency}>
        {#each Object.entries(currencies) as [code, currency]}
            {#if code === config.contactCurrency}
                <option value={code} selected>{code}</option>
            {:else}
                <option value={code}>{code}</option>
            {/if}
        {/each}
    </select>
</div>