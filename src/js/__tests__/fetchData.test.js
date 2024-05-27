import fetchData from "../http";

test("return error", () => {
  expect(() => fetchData()).toThrow("Mock this!");
});
