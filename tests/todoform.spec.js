import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import component from "../src/components/TodoForm.vue";

describe("TodoForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(component);
  });

  it("mounts without errors", () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.exists()).toBe(true);
  });

  it("emits event", () => {
    const inputControl = wrapper.find('[data-testid="item-input"]')
    const buttonControl = wrapper.find('[data-testid="item-submit"]')  
    inputControl.setValue('new item')
    buttonControl.trigger('click')  
    expect(wrapper.emitted().add).toHaveLength(1);
    expect(wrapper.emitted().add[0][0]).toBe('new item');
  });

});
