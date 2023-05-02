<script lang="ts">
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton'
	import { AppShell } from '@skeletonlabs/skeleton';
    import type { Writable } from 'svelte/store'
	import { writable } from 'svelte/store'

	const storeValue: Writable<number> = writable(0)
</script>



<AppShell>

    <svelte:fragment slot="sidebarLeft">
        <AppRail selected={storeValue}>
            <svelte:fragment slot="lead">
                <AppRailTile label="Overview" value={0}>(icon)</AppRailTile>
            </svelte:fragment>
            <svelte:fragment slot="default">
                <AppRailTile label="Page" value={1}>(icon)</AppRailTile>
                <AppRailTile label="Theme" value={2}>(icon)</AppRailTile>
                <AppRailTile label="Analytics" value={3}>(icon)</AppRailTile>
                <AppRailTile label="Tracking" value={4}>(icon)</AppRailTile>
                <AppRailTile label="Preview" value={5}>(icon)</AppRailTile>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <AppRailTile label="Settings" value={7}>(icon)</AppRailTile>
            </svelte:fragment>
        </AppRail>

    </svelte:fragment>

    <slot />

</AppShell>




