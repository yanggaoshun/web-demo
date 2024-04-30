import { textState } from "./atom";
import { selector } from "recoil";

export const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    console.log('charCountState')
    return text.length;
  },
});
