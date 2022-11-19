import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import ServiceDisplay from "../../Pages/Home/ServiceDisplay/ServiceDisplay";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/Signup/Signup";

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
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/serviceDisplay',
                element: <ServiceDisplay></ServiceDisplay>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/checkout/:id',
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
                element: <Checkout></Checkout>
            }
            
        ]
    }
]);

export default router;