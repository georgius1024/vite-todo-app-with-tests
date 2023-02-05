import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import component from "src/App.vue";
import { useRouter, useRoute } from 'vue-router'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: () => {}
  }))
}))

describe("App component", () => {
  it("mounts without error", () => {
    const wrapper = mount(component);
    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders items list", () => {
    const wrapper = mount(component);
    const li = wrapper.findAll("li");
    expect(li).toHaveLength(5);
  });

  it("click on remove control reduces number of items", async () => {
    const wrapper = mount(component);
    const removeControl = wrapper.find('[data-testid="item-remove-0"]');
    await removeControl.trigger("click");
    const li = wrapper.findAll("li");
    expect(li).toHaveLength(4);
  });

  it("can add new item to list", async () => {
    const wrapper = mount(component);
    const inputControl = wrapper.find('[data-testid="item-input"]');
    const buttonControl = wrapper.find('[data-testid="item-submit"]');
    await inputControl.setValue("new item");
    await buttonControl.trigger("click");
    const li = wrapper.findAll("li");
    expect(li).toHaveLength(6);
    expect(wrapper.html()).toContain("new item");
  });

  it("can navigate", async () => {
    const push = vi.fn()
    useRouter.mockImplementationOnce(() => ({
      push
    }))
    const wrapper = mount(component);
    const navControl = wrapper.find('[data-testid="nav"]');
    await navControl.trigger("click");
    expect(push).toHaveBeenCalledWith("/")
  });
});
