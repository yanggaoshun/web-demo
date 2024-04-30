import React from "react";
import { useAtom } from "jotai";
import { countAtom } from "../atom";
import Test2 from "./test2";

export default function Test1() {
  console.log("test1");
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
        <div onClick={() => setCount(count + 1)}>test1-{count}</div>
        <Test2/>
    </div>
  );
}
