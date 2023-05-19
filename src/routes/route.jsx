import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/Home/AllToys/AllToys";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import Register from "../pages/Register/Register";
import Update from "../pages/Update/Update";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";


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
            },
            {
                path: '/my-toys',
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: '/add-toys',
                element: <PrivateRoute><AddToys /></PrivateRoute>,
            },
            {
                path: 'view-details/:id',
                element: <PrivateRoute><ViewDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: 'updated/:id',
                element: <Update />,
                loader: ({params}) => fetch(`http://localhost:5000/toySingle/${params.id}`)
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