import { greet } from "../../src";

describe("test", () => {
  it("should pass", () => {
    expect(greet("Ishmael")).to.equal("Hello Ishmael!");
  });
});
