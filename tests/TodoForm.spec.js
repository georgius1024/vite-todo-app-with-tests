import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import component from "src/components/TodoForm.vue";

describe("TodoForm component", () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(component);
  })

  it("mounts without error", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
