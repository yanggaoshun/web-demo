
import { useRecoilValue } from "recoil";
import { charCountState } from "../selector";

export function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
  }