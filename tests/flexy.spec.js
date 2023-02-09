import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import component from "src/components/flexy.vue";

describe("Flexy component", () => {

  it("mounts without error when true", () => {
    const wrapper = mount(component, {
      props: { condition: true },
    });
    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("mounts without error when false", () => {
    const wrapper = mount(component, {
      props: { condition: false },
    });
    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders proper DOM', async() => {
    const wrapper = mount(component, {
      props: { condition: true },
    });
    expect(wrapper.html()).not.toContain('NOT true');
    await wrapper.setProps({ condition: false })
    expect(wrapper.html()).toContain('NOT true');
  })
});
