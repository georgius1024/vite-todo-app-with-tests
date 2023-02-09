import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import component from "src/components/TodoList.vue";

describe("TodoList component", () => {
  const items = ["item 1", "item 2", "item 3"];
  let wrapper
  beforeEach(() => {
    wrapper = mount(component, {
      props: { items },
    });
  })
  it("mounts without error", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
