import { characterState } from "../character";

test("return healthy state", () => {
  const result = characterState({ name: "Маг", health: 51 });
  expect(result).toBe("healthy");
});

test("return wounded state 1", () => {
  const result = characterState({ name: "Маг", health: 50 });
  expect(result).toBe("wounded");
});

test("return wounded state 2", () => {
  const result = characterState({ name: "Маг", health: 15 });
  expect(result).toBe("wounded");
});

test("return critical state", () => {
  const result = characterState({ name: "Маг", health: 14 });
  expect(result).toBe("critical");
});

test("return critical state", () => {
  const result = characterState({ name: "Маг", health: 0 });
  expect(result).toBe(undefined);
});
