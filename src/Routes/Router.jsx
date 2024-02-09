import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
])