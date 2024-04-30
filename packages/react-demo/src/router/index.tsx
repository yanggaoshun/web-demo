import App from "../App";
import { children } from "./app/children";
import elements from "./app/elements";
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { path } from "./app/path";

const router: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: getRouterTemplate(elements, path, children),
  },
];
export default createBrowserRouter(router);

export function getRouterTemplate<E, P>(els: E, p: P): RouteObject[];
export function getRouterTemplate<E, P, C>(els: E, p: P, c: C): RouteObject[];

export function getRouterTemplate() {
  const els = arguments[0];
  const p = arguments[1];
  const c = arguments[2];
  const keys = Object.keys(els);
  const router = keys.map((key) => ({
    path: p[key],
    element: els[key],
    children: c?.[key],
  }));
  return router;
}
