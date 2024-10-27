import { TPaths, TRoutes } from "../types";



export const routeGenerator = (paths : TPaths []) => {
  const routes: TRoutes[] = [];
  for (const element of paths) {
    if (element.name && element.path) {
      routes.push({
        path: element.path,
        element: element.element,
      });
    }
    if (element.name && element.children) {
      for (const childrenElement of element.children) {
        routes.push({
          path: childrenElement.path!,
          element: childrenElement.element,
        });
      }
    }
  }
  return routes
};
