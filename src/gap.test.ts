import { describe, expect, it } from "vitest";
import { spaced } from "./gap";

describe("event gap", () => {
  it("requires the minimum gap", () => {
    expect(spaced([{ at: 100, title: "A" }, { at: 130, title: "B" }], 30)).toEqual({ ok: true, count: 2 });
    expect(spaced([{ at: 100, title: "A" }, { at: 129, title: "B" }], 30)).toEqual({
      ok: false,
      reason: "the next event is inside the gap",
    });
  });

  it("refuses equal times even when the gap is 0, and refuses a gap of 86401", () => {
    expect(spaced([{ at: 100, title: "A" }, { at: 100, title: "B" }], 0)).toEqual({
      ok: false,
      reason: "times must increase",
    });
    expect(spaced([{ at: 100, title: "A" }], 86_401).ok).toBe(false);
    expect(spaced([], 30).ok).toBe(false);
  });
});
