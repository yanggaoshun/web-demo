import React from "react";
import { useAtom } from "jotai";
import { countAtom } from "../atom";

export default function Test2() {
  console.log("test2");
  const [count, setCount] = useAtom(countAtom);
  return <div onClick={() => setCount(count + 1)}>test1-{count}</div>;
}
