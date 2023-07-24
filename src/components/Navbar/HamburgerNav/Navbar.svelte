<script>
	import Logo from './Logo.svelte';
	import Hamburger from './Hamburger.svelte';

	export let sidebar = false;
</script>

<header class="flex justify-between black py-2 items-center text-white ">
	<nav class="flex flex-row w-full mt-3 mb-3 md:mx-12 mx-6 self-center">
		<Hamburger bind:open={sidebar} />
		<Logo />
	</nav>
</header>
