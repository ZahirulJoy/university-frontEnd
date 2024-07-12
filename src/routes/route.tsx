import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routeGenerator";
import adminPaths from "./admin.routes";
import { facultyPaths } from "./faculty.routes";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App></App>,
    },
    {
        path:"/admin",
        element:<App></App>,
        children:routeGenerator(adminPaths)
    },
    {
        path:"/faculty",
        element:<App></App>,
        children:routeGenerator(facultyPaths)
    }
]);
