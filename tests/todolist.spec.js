import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import component from "../src/components/TodoList.vue";

describe("TodoList", () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  let wrapper

  beforeEach(() => {
    wrapper = mount(component, { props: { items } });
  })

  it("mounts without errors", () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.exists()).toBe(true);
  });
  it("renders list", () => {
    expect(wrapper.html()).toContain("Item 1");
    expect(wrapper.html()).toContain("Item 2");
    expect(wrapper.html()).toContain("Item 3");
  });
  it("renders all", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("emits events", () => {
    const removeControl = wrapper.find('[data-testid="item-remove-0"]');
    expect(removeControl.exists()).toBe(true);
    removeControl.trigger("click");
    expect(wrapper.emitted().remove).toHaveLength(1);
  });
});
