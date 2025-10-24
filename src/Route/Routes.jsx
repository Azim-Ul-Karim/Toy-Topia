import { createBrowserRouter } from "react-router";
import PathError from "./PathError";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Profile from "../Pages/Profile/Profile";
import Loading from "../Components/Loading";
import Toys from "../Pages/Toys/Toys";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <PathError></PathError>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch(`/Toys.json`)
            },
            {
                path: 'toys',
                Component: Toys,
                loader: () => fetch(`/Toys.json`)
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'profile',
                Component: Profile
            }
        ]
    }
])