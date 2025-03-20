const { findDublicate } = require("./find-duplicate");

test("find dublicate", () => {
  expect(findDublicate([1, 2, 3, 3, 4, 5, 6])).toEqual([3]); // Use toEqual for array comparison
});
