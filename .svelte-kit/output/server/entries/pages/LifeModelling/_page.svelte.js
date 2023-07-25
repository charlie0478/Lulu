import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as ImageTextBlock } from "../../../chunks/ImageTextBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="my-12">${validate_component(ImageTextBlock, "ImageTextBlock").$$render(
    $$result,
    {
      image: "./images/329010839_935844317851693_595508853136360736_n.jpeg"
    },
    {},
    {
      para: () => {
        return `<span slot="para"></span>`;
      },
      title: () => {
        return `<span slot="title" data-svelte-h="svelte-1h0cfp1">&quot;...the body breaks and the body is fine...i&#39;m open to yours, and I&#39;m open to mine...&quot; ~ Devendra Banhart</span>`;
      }
    }
  )}</div> ${$$result.head += `<!-- HEAD_svelte-1yx8ksz_START -->${$$result.title = `<title>Life Modelling Carousel</title>`, ""}<meta name="description" content="Lulu Ilanda's Modelling carousel, black and white photography and life drawing."><!-- HEAD_svelte-1yx8ksz_END -->`, ""}`;
});
export {
  Page as default
};
