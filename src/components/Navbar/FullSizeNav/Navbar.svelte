<script>
	import { page } from '$app/stores'; // import page store from SvelteKit
	import Button from "../../Button.svelte";

	
</script>

<nav class="flex flex-row flex-grow-1 max-w-96 ">
	<a href="/"><img src="./images/profilepicture.webp" id="profile" alt="Lulu Profile" class=" {($page.url.pathname === '/' || $page.url.pathname === '') ? 'selected' : ''} text-white inline-flex rounded-full max-w-24 max-h-24 mx-12 my-6 border-b-[1px] border-transparent" /></a>
	<ul class="flex flex-row flex-grow-1 mx-auto justify-end w-full px-12 wx-12 my-16 font-display">
		<li class="{($page.url.pathname === '/About') ? 'selected' : ''} border-b-[1px] border-transparent text-white  mx-3 relative "><a href="/About">About</a></li>
		<li class="{($page.url.pathname === '/Listen') ? 'selected' : ''} border-b-[1px] border-transparent text-white  mx-3 relative "><a href="/Listen">Listen</a></li>
		<li class="{($page.url.pathname === '/LifeModelling') ? 'selected' : ''} border-b-[1px] border-transparent text-white  mx-3 relative "><a href="/LifeModelling">Life Modelling</a></li>

	</ul>
</nav>

<style lang="postcss">
	:global(html) {
		background-color: black;
	}

	.selected {
		color: rgb(187, 68, 4);
		border-color: rgb(187, 68, 4);
	}

	li, #profile {
		margin-bottom: 1px;
		transition: border-color 0.3s ease-in-out;
	}

	li:hover, #profile:hover {
		border-color:rgb(187, 68, 4);

	}
</style>
