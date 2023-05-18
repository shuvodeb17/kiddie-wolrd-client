import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import AllToys from "../pages/Home/AllToys/AllToys";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-toys',
                element: <AllToys />,
                // loader: () => fetch(`http://localhost:5000/all-toys`)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
]);

export default router