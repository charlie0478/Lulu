import { c as create_ssr_component, d as each, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { I as ImageTextBlock } from "../../chunks/ImageTextBlock.js";
const IntersectionObserver_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-14mdeqe{position:relative}span.svelte-14mdeqe{padding:0;margin:0;transition:color 0.5s ease-out}.hover-letter.svelte-14mdeqe:hover{color:rgb(187, 68, 4)}",
  map: null
};
let title = "Lulu Ilanda";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let titleArray = Array.from(title);
  $$result.css.add(css);
  return `<div class="mx-auto my-12 svelte-14mdeqe"><div class="text-5xl md:text-7xl lg:text-8xl font-display text-center m-0 p-0 svelte-14mdeqe">${each(titleArray, (letter, index) => {
    return `<span class="hover-letter p-0 m-0 font-display text-white svelte-14mdeqe" id="${"title" + escape(index, true)}">${escape(letter === " " ? " " : letter)}</span>`;
  })}</div></div> <div class="container mx-auto svelte-14mdeqe" data-svelte-h="svelte-krjq82"><div class="mx-auto pt-0 p-0 svelte-14mdeqe"><iframe class="mx-auto h-[33vh] sm:h-[50vh] md:h-[75vh] w-[95vw] md:w-[75vw]" src="https://www.youtube.com/embed/HMm1M1R9_tk" title="Make Music Day 2023 - TAFE NSW - Lulu Ilanda ft Victor Jesus - 'Whatever Keeps Us Together'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div> <hr class="my-12 mx-12 border-t-[0.3px]"> <div class="my-12 svelte-14mdeqe">${validate_component(ImageTextBlock, "ImageTextBlock").$$render(
    $$result,
    {
      image: "./images/356786391_1266285857584271_3633434554063314624_n.jpeg"
    },
    {},
    {
      para: () => {
        return `<span slot="para" class="svelte-14mdeqe" data-svelte-h="svelte-1fpxxn1">A multi instrumentalist from the Blue Mountains of Australia.</span>`;
      },
      title: () => {
        return `<span slot="title" class="svelte-14mdeqe" data-svelte-h="svelte-vtlo6v">I&#39;m Lulu Ilanda</span>`;
      }
    }
  )}</div> ${$$result.head += `<!-- HEAD_svelte-164ut3s_START -->${$$result.title = `<title>Lulu Ilanda</title>`, ""}<meta name="description" content="Lulu Ilanda's Website"><!-- HEAD_svelte-164ut3s_END -->`, ""}`;
});
export {
  Page as default
};
