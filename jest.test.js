const calculateXp = require("./index");

describe("Pokemon Go", () => {
  test("Expected 500", () => {
    expect(calculateXp(1, 12)).toBe(500);
  });
  test("Expected 6500", () => {
    expect(calculateXp(13, 144)).toBe(6500);
  });
  test("13 Pikachus and 0 candies", () => {
    expect(calculateXp(13, 0)).toBe(500);
  });
  test("2 Pikachus and 11 candies", () => {
    expect(calculateXp(2, 11)).toBe(500);
  });
});
