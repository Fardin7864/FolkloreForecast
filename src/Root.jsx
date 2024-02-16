import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import App from "./App";
import Allblogs from "./pages/AllBlogs/Allblogs";

const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        errorElement: <Error/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path: '/blogs',
                element: <Allblogs/>
            }
        ]
    }
])

export default router;