import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import component from "src/components/TodoList.vue";

describe("TodoList component", () => {
  it("mounts without error", () => {
    const items = ["item 1", "item 2", "item 3"];
    const wrapper = mount(component, {
      props: { items },
    });
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
