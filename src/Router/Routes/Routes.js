import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },  
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
        ]
    }
]);

export default router;