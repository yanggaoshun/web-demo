import Request from "../../../pages/ahooks/pages/request";
import Drop from "../../../pages/ahooks/pages/use-drop-demo";
import { path } from "./path";

export type Key = keyof typeof path;

const elements: { [key in Key]: JSX.Element } = {
  request: <Request />,
  drop: <Drop />,
};

export default elements;
