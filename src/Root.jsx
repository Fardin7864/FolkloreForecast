import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Home/>,
        errorElement: <Error/>,
        children: [
            
        ]
    }
])

export default router;