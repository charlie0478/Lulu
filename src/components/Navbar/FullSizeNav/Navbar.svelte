<script>
	import { page } from '$app/stores'; // import page store from SvelteKit
	import Button from "../../Button.svelte";
	import { CldImage } from 'svelte-cloudinary';
// <img src="./images/profilepicture.webp" id="profile" alt="Lulu Profile" width="100" class=" {($page.url.pathname === '/' || $page.url.pathname === '') ? 'selected' : ''} text-white inline-flex rounded-full max-w-24 max-h-24 mx-12 my-6 border-b-[1px] border-transparent" />
	
</script>

<nav class="flex flex-row flex-grow-1 max-w-96 ">
	<a href="/" id="profile" class="rounded-full border-b-[1px] {($page.url.pathname === '/' || $page.url.pathname === '') ? 'selected' : ''} border-transparent p-0 self-center justify-start"><CldImage
		src="profilepicture_c6iuut.webp"
		sizes="100vw"
		alt="Lulu Ilanda"
		width="100"
		height="auto"
		class=" {($page.url.pathname === '/' || $page.url.pathname === '') ? 'selected' : ''} text-white inline-flex rounded-full max-w-24 max-h-24 border-b-[1px] border-transparent self-center"
	/></a>
	<ul class="flex flex-row flex-grow-1 mx-auto justify-end w-full px-12 wx-12 my-16 font-display">
		<li class="{($page.url.pathname === '/About') ? 'selected' : ''} border-b-[1px] border-transparent text-white  mx-3 relative "><a href="/About">About</a></li>
		<li class="{($page.url.pathname === '/Music') ? 'selected' : ''} border-b-[1px] border-transparent text-white  mx-3 relative "><a href="/Music">Music</a></li>
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
		margin: 0;
	}
	.img {
		margin: 0;
	}

	li, #profile {
		margin-bottom: 1px;
		transition: border-color 0.3s ease-in-out;
	}

	li:hover, #profile:hover {
		border-color:rgb(187, 68, 4);

	}
</style>
