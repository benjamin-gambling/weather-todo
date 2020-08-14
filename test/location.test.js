import * as location from "../src/location";

test("Identify location", () => {
  location.obtain().expect(4, 4);
});
