import About from "../../pages/about";
import Demo from "../../pages/dnd";
import { Counter } from "../../pages/jotai";
import Recoil from "../../pages/recoil";
import Ahooks from "../../pages/ahooks";
import { path } from "./path";

export type Key = keyof typeof path;
export type Elements = { [key in Key]: JSX.Element };

const elements: Elements = {
  about: <About />,
  dnd: <Demo />,
  jotai: <Counter />,
  recoil: <Recoil />,
  ahooks: <Ahooks />,
};

export default elements;
