import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        errorElement: <Error/>,
        children: [
            {
                path:'/',
                element: <Home/>
            }
        ]
    }
])

export default router;