import Request from "../../../pages/ahooks/pages/request";
import { path } from "./path";

export type Key = keyof typeof path;

const elements: { [key in Key]: JSX.Element } = {
  request: <Request />,
};

export default elements;
