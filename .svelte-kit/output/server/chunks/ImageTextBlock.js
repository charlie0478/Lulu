import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
/* empty css                                      */const ImageTextBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<div class="flex flex-col md:mx-12 mx-6 border-y-1 md:flex-row "><div class="flex flex-col self-start justify-end "><div class="self-start "><h1 class="font-display text-3xl md:text-4xl text-white m-0 font-light">${slots.title ? slots.title({}) : ``}</h1> <h1 class="font-display text-xl md:text-2xl text-white m-0 mt-12 font-light">${slots.para ? slots.para({}) : ``}</h1></div></div> <div class="row-start-2 mt-12 md:col-start-7 md:justify-end md:ml-auto max-w-[66%] md:max-w-[33%]" id="image-column"><div class=""><img${add_attribute("src", image, 0)} class="" alt="Lulu"></div></div></div>`;
});
export {
  ImageTextBlock as I
};
