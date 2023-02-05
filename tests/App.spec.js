import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import component from "src/App.vue";

describe("App component", () => {
  it("mounts without error", () => {
    const wrapper = mount(component);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
