import { describe, it, expect } from "vitest";
import { mount, shallowMount  } from "@vue/test-utils";
import component from "src/App.vue";

describe("App component", () => {
  it("mounts without error", () => {
    const wrapper = mount(component);
    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("contains list component", () => {
    const wrapper = shallowMount(component);
    const list = wrapper.findComponent('[data-testid="todos-list"]')
    expect(list.exists()).toBe(true);
  });

  it("contains form component", () => {
    const wrapper = shallowMount(component);
    const form = wrapper.findComponent('[data-testid="todos-form"]')
    expect(form.exists()).toBe(true);
  });

  it("renders items list", () => {
    const wrapper = mount(component);
    const li = wrapper.findAll('li')
    expect(li).toHaveLength(5)
  });

  it('click on remove control reduces number of items', async () => {
    const wrapper = mount(component);
    const removeControl = wrapper.find('[data-testid="item-remove-0"]')
    await removeControl.trigger('click')
    const li = wrapper.findAll('li')
    expect(li).toHaveLength(4)
  });

  it('can add new item to list', async () => {
    const wrapper = mount(component);
    const inputControl = wrapper.find('[data-testid="item-input"]')
    const buttonControl = wrapper.find('[data-testid="item-submit"]')
    await inputControl.setValue('new item')
    await buttonControl.trigger('click')
    const li = wrapper.findAll('li')
    expect(li).toHaveLength(6)
    expect(wrapper.html()).toContain('new item')
  })

});
