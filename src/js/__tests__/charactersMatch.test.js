import { sortCharacterHealth } from "../character";

test("return healthy state", () => {
  const initialState = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const resultState = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];
  const result = sortCharacterHealth(initialState);
  expect(result).toEqual(resultState);
});
