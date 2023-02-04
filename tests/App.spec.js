import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Todos from "src/services/todos.js";
import component from "src/App.vue";
import todos from "../src/services/todos.js";

describe("App component", () => {
  beforeEach(() => {
    todos.load = vi.fn().mockImplementation(() => {
      todos.list = ["item 1", "item 2", "item 3", "item 4"].map((text, id) => ({
        id,
        text,
      }));
    });
    todos.add = vi.fn();
    todos.destroy = vi.fn();
  });
  afterEach(() => {
    vi.resetAllMocks();
  });
  it("mounts without error", () => {
    const wrapper = mount(component);
    expect(wrapper).toBeDefined();
    expect(todos.load).toHaveBeenCalled();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders items list", () => {
    const wrapper = mount(component);
    const li = wrapper.findAll("li");
    expect(li).toHaveLength(4);
  });

  it("click on remove control reduces number of items", async () => {
    const wrapper = mount(component);
    const removeControl = wrapper.find('[data-testid="item-remove-0"]');
    await removeControl.trigger("click");
    expect(todos.destroy).toHaveBeenCalled();
  });

  it("can add new item to list", async () => {
    const wrapper = mount(component);
    const inputControl = wrapper.find('[data-testid="item-input"]');
    const buttonControl = wrapper.find('[data-testid="item-submit"]');
    await inputControl.setValue("new item");
    await buttonControl.trigger("click");
    expect(todos.add).toHaveBeenCalled();
  });
});
