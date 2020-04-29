import { uniqueId } from "./uniqueId";

describe("uniqueId", () => {
  it("should return id", () => {
    let id = uniqueId();

    expect(id).toEqual(expect.any(Number));
  });

  it("should return unique id", () => {
    let id = uniqueId();
    let nextId = uniqueId();

    expect(id).not.toEqual(nextId);
  });
});
