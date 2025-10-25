import { createBrowserRouter } from "react-router";
import PathError from "./PathError";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Profile from "../Pages/Profile/Profile";
import Loading from "../Components/Loading";
import Toys from "../Pages/Toys/Toys";
import ToyDetails from "../Pages/Toys/ToyDetails";
import PrivateRoute from "../Contexts/PrivateRoute/PrivateRoute";
import ForgetPassword from "../Pages/Authentication/ForgetPassword";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <PathError></PathError>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch(`/Toys.json`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: 'toys',
                Component: Toys,
                loader: () => fetch(`/Toys.json`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/toy-details/:id',
                element: (
                    <PrivateRoute>
                        <ToyDetails></ToyDetails>
                    </PrivateRoute>
                ),
                loader: () => fetch(`/Toys.json`),
                hydrateFallbackElement: <Loading></Loading>
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
                path: 'forget-password',
                Component: ForgetPassword
            },
            {
                path: 'profile',
                Component: Profile
            }
        ]
    }
])