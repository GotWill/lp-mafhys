import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./assets/styles/Default";
import Faq from "./pages/Faq";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/faq',
                element: <Faq/>
            }
        ]

    }
])