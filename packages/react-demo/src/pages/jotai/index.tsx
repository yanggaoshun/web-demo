import { useAtom } from "jotai";
import { countAtom } from "./atom";
import Test1 from "./components/test1";

export function Counter() {
  const [count, setCount] = useAtom(countAtom);
  console.log('count')
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount((c) => c + 1)
      }}>加一</button>
      <Test1/>
    </div>
  );
}
