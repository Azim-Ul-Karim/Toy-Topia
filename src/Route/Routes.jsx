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
import Feedback from "../Pages/Feedback/Feedback";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Support from "../Pages/Support/Support";

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
                    <ToyDetails></ToyDetails>
                ),
                loader: () => fetch(`/Toys.json`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: 'about-us',
                Component: AboutUs
            },
            {
                path: 'support',
                Component: Support
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
                element: (
                    <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
                )
            },
            {
                path: 'feedback',
                element: (
                    <PrivateRoute>
                        <Feedback></Feedback>
                    </PrivateRoute>
                )
            }
        ]
    }
])