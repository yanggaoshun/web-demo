import { RouteObject } from "react-router-dom";
import { getRouterTemplate } from "..";
import elements from "./ahooks/elements";
import { path } from "./ahooks/path";
import { Key } from "./elements";

export const children: { [key in Key]?: RouteObject[] } = {
  ahooks: getRouterTemplate<typeof elements, typeof path>(elements, path),
};
