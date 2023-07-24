<script>
	import Navbar from './Navbar.svelte';
	import Sidebar from './Sidebar.svelte';

	let open = false;
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />


