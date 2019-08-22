import { formatTime } from "./utils";

it("format time in seconds to minutes:seconds format", () => {
  expect(formatTime(145)).toEqual("2:25");
  expect(formatTime(67)).toEqual("1:07");
});
