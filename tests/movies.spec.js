import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import Movies from "@/services/movies.js";

const baseUrl = "localhost:4000/movies";
vi.mock("axios", () => ({
  default: {
    get: vi.fn().mockResolvedValue(42),
  },
}));

describe("Movies", () => {
  it("imports without error", () => {
    expect(Movies).toBeDefined();
    expect(typeof Movies).toBe("function");
  });
  it("fetches data from backlend", async () => {
    const movies = new Movies(baseUrl);
    const response = await movies.index();
    expect(response).toBe(42);
    expect(axios.get).toBeCalledWith(baseUrl, null);
  });
  it("fetches one movie", async () => {
    const movies = new Movies(baseUrl);
    const response = await movies.show(1);
    expect(response).toBe(42);
    expect(axios.get).toBeCalledWith(`${baseUrl}/1`, null);
  });
});
