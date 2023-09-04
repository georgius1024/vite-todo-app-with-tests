import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import component from "src/App.vue";
import flushPromises from "flush-promises";
import axios from "axios";

vi.mock("axios", () => ({
  default: {
    get: vi.fn().mockResolvedValue({
      status: 200,
      data: [
        { id: 1, title: 1 },
        { id: 2, title: 2 },
      ],
    }),
  },
}));

describe("App component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("mounts without error", async () => {
    const wrapper = mount(component);
    expect(wrapper).toBeDefined();
    await flushPromises();
    expect(axios.get).toHaveBeenCalledOnce()
    expect(axios.get).toBeCalledWith(
      "https://jsonplaceholder.typicode.com/todos"
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders items list", async () => {
    const wrapper = mount(component);
    await flushPromises();
    const li = wrapper.findAll("li");
    expect(li).toHaveLength(2);
    expect(axios.get).toHaveBeenCalledOnce()
  });
});
