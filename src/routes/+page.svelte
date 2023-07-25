<script>
  import { onMount } from "svelte";
  import ImageTextBlock from "../components/ImageTextBlock.svelte";
  import IntersectionObserver from "../components/IntersectionObserver.svelte";
  let title = "Lulu Ilanda";
  let titleArray = Array.from(title);

  const randomBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const triggerHover = (element) => {
    element.style.color = "rgb(187, 68, 4)";
    setTimeout(() => {
      element.style.color = "";
    }, 500);
  };

  onMount(() => {
    titleArray.forEach((_, index) => {
      setTimeout(() => {
        const element = document.getElementById(`title${index}`);
        if (element) {
          triggerHover(element);
        }
      }, randomBetween(500, 3000));
    });
  });
</script>

<div class="mx-auto my-12">
  <div
    class="text-5xl md:text-7xl lg:text-8xl font-display text-center m-0 p-0"
  >
    {#each titleArray as letter, index}
      <span
        class="hover-letter p-0 m-0 font-display text-white"
        id="title{index}">{letter === " " ? " " : letter}</span
      >
    {/each}
  </div>
</div>
<div class="container mx-auto">
  <div class="mx-auto pt-0 p-0">
    <iframe
      class="mx-auto h-[33vh] sm:h-[50vh] md:h-[75vh] w-[95vw] md:w-[75vw]"
      src="https://www.youtube.com/embed/HMm1M1R9_tk"
      title="Make Music Day 2023 - TAFE NSW - Lulu Ilanda ft Victor Jesus - &#39;Whatever Keeps Us Together&#39;"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>
</div>

<hr class="my-12 mx-12 border-t-[0.3px]">

<div class="my-12">
<ImageTextBlock image="./images/356786391_1266285857584271_3633434554063314624_n.webp">
	<span slot="title">I'm Lulu Ilanda</span>
	<span slot="para">A multi instrumentalist from the Blue Mountains of Australia.</span>
</ImageTextBlock>
</div>

<svelte:head>
  <title>Lulu Ilanda</title>
  <meta name="description" content="Lulu Ilanda's Website" />

</svelte:head>
<style>
  div {
    position: relative;

  }

  span {
    padding: 0;
    margin: 0;
    transition: color 0.5s ease-out;
  }

  .hover-letter:hover {
    color: rgb(187, 68, 4);
  }
</style>
