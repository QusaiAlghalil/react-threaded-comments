import { describe, expect, it } from "vitest";
import pkg from "../package.json";
import { VERSION } from "./index";

describe("VERSION", () => {
  it("matches the version in package.json", () => {
    // VERSION is maintained by hand, so this test ensures it stays in sync with package.json.
    expect(VERSION).toBe(pkg.version);
  });
});
