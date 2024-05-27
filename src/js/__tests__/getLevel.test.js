import fetchData from "../http";
import { getLevel } from "../getLevel";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test("should call getLevel", () => {
  fetchData.mockReturnValue({});
  getLevel(1);
  expect(fetchData).toBeCalledWith("https://server/user/1");
});

test("should call getLevel with ok status", () => {
  const response = { status: "ok", level: 2 };
  fetchData.mockReturnValue(response);
  const result = getLevel(1);
  expect(result).toBe("Ваш текущий уровень: 2");
});

test("should call getLevel with error status", () => {
  const response = { status: "error", level: 2 };
  fetchData.mockReturnValue(response);
  const result = getLevel(1);
  expect(result).toBe("Информация об уровне временно недоступна");
});
