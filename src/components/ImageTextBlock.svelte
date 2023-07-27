<script>
  import Button from "./Button.svelte";
  export let image;
  export let imgWidth;
  import { CldImage } from "svelte-cloudinary";
</script>

<div class="flex flex-col md:mx-12 mx-6 border-y-1 md:flex-row">
  <div class="flex flex-col self-start justify-end">
    <div class="self-start">
      <h1 class="font-display text-3xl md:text-4xl text-white m-0 font-light">
        <slot name="title" />
      </h1>
      <h1
        class="font-display text-xl md:text-2xl text-white m-0 mt-12 font-light"
      >
        <slot name="para" />
      </h1>
    </div>
  </div>
  {#if image}
    <div
      class="row-start-2 mt-12 md:col-start-7 md:justify-end md:ml-auto max-w-[66%] md:max-w-[33%]"
      id="image-column"
    >
      <div class="">
        <CldImage
          width={imgWidth}
		  height="auto"
          src="356786391_1266285857584271_3633434554063314624_n_uirdgq.webp"
          alt="Description of my image"
          sizes="100vw"
        />
      </div>
    </div>
  {/if}
</div>

<style>
</style>
