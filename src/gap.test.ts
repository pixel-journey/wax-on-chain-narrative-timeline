import { describe, expect, it } from "vitest";
import { spaced } from "./gap";

describe("event gap", () => {
  it("requires the minimum gap", () => {
    expect(spaced([{ at: 100, title: "A" }, { at: 130, title: "B" }], 30)).toEqual({ ok: true, count: 2 });
    expect(spaced([{ at: 100, title: "A" }, { at: 129, title: "B" }], 30).ok).toBe(false);
  });
});
