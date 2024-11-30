import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../home/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Users from "../components/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:5000/coffee"),
            },
            {
                path: "/addCoffee",
                element: <AddCoffee />,
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/coffee/${params.id}`),
            },
            {
                path: "/signin",
                element: <Signin />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/users",
                element: <Users />,
                loader: () => fetch("http://localhost:5000/users"),
            },
        ],
    },
]);

export default router;
