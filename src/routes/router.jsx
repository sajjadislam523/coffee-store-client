import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../home/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

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
        ],
    },
]);

export default router;
