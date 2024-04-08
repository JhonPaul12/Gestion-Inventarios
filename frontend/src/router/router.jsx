import {createBrowserRouter} from "react-router-dom"
import App from "../App";

import { CategoriesPage,LoginPage } from "../pages";
import { AuthLayout } from "../layouts/auth/AuthLayout";


export const router = createBrowserRouter([
    {
        element: <App/>,
        path: '/',
        children: [
            //Rutas Dashhboard
            {
                path:'admin',
                children:[
                    {
                        path:'categories',
                        element:<CategoriesPage/>
                    }
                ]
            },
            //Rutas Auth
            {
                path:'auth',
                element:<AuthLayout/>,
                children:[
                    {
                        path: 'login',
                        element: <LoginPage/>
                    }
                ]
            }
        ]
    }
]);
