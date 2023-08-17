import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom'
import React, {ReactElement} from "react";
import {AuthPage} from "./features/auth-page/auth-page";
import {isLoggedIn} from "./features/auth-page/authpageSelectors";
import {useSelector} from "react-redux";
import {HotelsPage} from "./features/hotels-page/hotels-page";
import {Layout} from "./common/components/layout/layout";

interface RouteObject {
    path: string
    element: ReactElement
}

const publicRoutes: RouteObject[] = [
    {
        path: '/sign-in',
        element: <AuthPage/>,
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <HotelsPage/>,
    },
]
function PrivateRoutes() {
    const isAuth = useSelector(isLoggedIn)

    return isAuth ? <Layout /> : <Navigate to="/sign-in" />
}

const router = createBrowserRouter([{
    element: <PrivateRoutes/>,
    children: privateRoutes
}, ...publicRoutes])
export const Router = () => {
    return <RouterProvider router={router} />
}