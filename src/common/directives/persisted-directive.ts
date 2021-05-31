import { DirectiveOptions } from "vue";
import { debounce } from "@/common/utils/helpers";

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  let { value } = target;
  if (target.type === "checkbox") {
    value = target.checked.toString();
  }
  const key = target.dataset["persistedName"];
  console.log(target.type);
  console.log(key, value);
  if (key) {
    localStorage.setItem(key, value);
    window.dispatchEvent(new CustomEvent("persisted:input"));
  }
};

const directive: DirectiveOptions = {
  bind(el, binding, node) {
    if (!el.hasAttribute("name")) {
      throw new Error('missed required attribute "name"');
    }
    const attrName = el.getAttribute("name");
    const key = (el.dataset["persistedName"] = `input[${attrName}]`);
    // * load data from storage
    const value = localStorage.getItem(key);
    if (value) {
      const input = el as HTMLInputElement;
      if (input.type === "checkbox") {
        input.checked = value === "true";
      } else {
        input.value = value;
      }
      node.elm?.dispatchEvent(new CustomEvent("input"));
      node.elm?.dispatchEvent(new CustomEvent("change"));
    }
    el.addEventListener("input", debounce<typeof onInput>(onInput, 300));
  },
  unbind(el) {
    const key = el.dataset["persistedName"];
    if (key) {
      localStorage.removeItem(key);
    }
    delete el.dataset["persistedName"];
    el.removeEventListener("input", onInput);
    window.dispatchEvent(new CustomEvent("persisted:input"));
  },
};
export default directive;
