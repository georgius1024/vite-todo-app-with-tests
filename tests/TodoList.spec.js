import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import component from "src/components/TodoList.vue";

describe("TodoList component", () => {
  it("mounts without error", () => {
    const items = ["item 1", "item 2", "item 3"];
    const wrapper = mount(component, {
      props: { items },
    });
    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("renders any of items list", () => {
    const items = ["item 1", "item 2", "item 3"];
    const wrapper = mount(component, {
      props: { items },
    });
    it.each(items)("renders %s", (item) => {
      expect(wrapper.html()).toContain(item);
    });
  });
  it("renders items list", () => {
    const items = ["item 1", "item 2", "item 3"];
    const wrapper = mount(component, {
      props: { items },
    });
    const li = wrapper.findAll('li')
    expect(li).toHaveLength(3)
  });

  it('emits remove event when remove control is clicked', () => {
    const items = ["item 1", "item 2", "item 3"];
    const wrapper = mount(component, {
      props: { items },
    });
    const removeControl = wrapper.find('[data-testid="item-remove-0"]')
    removeControl.trigger('click')
    expect(wrapper.emitted().remove).toHaveLength(1)
    expect(wrapper.emitted().remove).toHaveProperty("0.0", "item 1")
  });
  it('emits remove event when any of remove control is clicked', () => {
    const items = ["item 1", "item 2", "item 3"];
    const wrapper = mount(component, {
      props: { items },
    });
    const removeControls = wrapper.findAll('.remove')
    removeControls.forEach(control => control.trigger('click'))
    expect(wrapper.emitted().remove).toHaveLength(3)
  });
});
