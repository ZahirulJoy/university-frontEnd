import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import  { adminRoutes } from "./admin.routes";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App></App>,
    },
    {
        path:"/admin",
        element:<App></App>,
        children:adminRoutes
    }  
]);
