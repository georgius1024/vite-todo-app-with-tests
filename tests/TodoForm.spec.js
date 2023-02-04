import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import component from "src/components/TodoForm.vue";

describe("TodoForm component", () => {
  it("mounts without error", () => {
    const wrapper = mount(component);
    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('handles input and emits events', () => {
    const wrapper = mount(component);
    const inputControl = wrapper.find('[data-testid="item-input"]')
    const buttonControl = wrapper.find('[data-testid="item-submit"]')
    inputControl.setValue('new item')
    buttonControl.trigger('click')
    expect(wrapper.emitted().add).toHaveLength(1)
    expect(wrapper.emitted().add).toHaveProperty("0.0", "new item")
  })

});
