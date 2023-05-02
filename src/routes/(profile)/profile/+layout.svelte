<script lang="ts">
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton'
	import { AppShell } from '@skeletonlabs/skeleton'
	import type { Writable } from 'svelte/store'
	import { writable } from 'svelte/store'

	const storeValue: Writable<number> = writable(0)
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={storeValue}>
			<svelte:fragment slot="lead">
				<AppRailTile
					tag="a"
					href="/profile"
					label="Overview"
					value={0}
				>
					(icon)
				</AppRailTile>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<AppRailTile
					tag="a"
					href='/profile/editor'
					label="Page Editor"
					value={1}>
					(icon)
					</AppRailTile
				>
				<AppRailTile
					tag="a"
					href='/profile/payment'
					label="Payment"
					value={2}>
					(icon)
					</AppRailTile
				>
				<AppRailTile
					tag="a"
					href='/profile/messages'
					label="Messages"
					value={3}>
					(icon)
					</AppRailTile
				>
				<AppRailTile
					tag="a"
					href='/profile/analytics'
					label="Analytics"
					value={4}
				>
					(icon)
				</AppRailTile>
				<AppRailTile
					tag="a"
					href='/profile/tracking'
					label="Tracking"
					value={5}
				>
					(icon)
				</AppRailTile>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<AppRailTile
					tag="a"
					href='/profile/settings'
					label="Settings"
					value={6}
				>
					(icon)
				</AppRailTile>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>

	<slot />
</AppShell>
