import { createBrowserRouter } from "react-router";
import PathError from "./PathError";
import Root from "../Layouts/Root";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <PathError></PathError>,
        children: [

        ]
    }
])