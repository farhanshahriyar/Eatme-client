import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Shop/Menu";
import Signup from "../components/signupModal/Signup";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import PrivateRouter from "../components/PrivateRoute/PrivateRouter";
import UpdateProfile from "../pages/Dashboard/UpdateProfile/UpdateProfile";
import PhoneLogin from "../pages/PhoneLogin/PhoneLogin";
import CartPage from "../pages/Shop/Cart/CartPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
        children: [
            { path: "/", element: <Home/> },
            { path: "/menu", element: <Menu/> },
            { path: "/about", element: <About/> },
            { path: "/contact", element: <Contact/> },
            { path: "/phone-login", element: <PhoneLogin/> },
            { path: "/cart", element: <PrivateRouter><CartPage/></PrivateRouter>},
            { path: "/update-profile", element: <PrivateRouter><UpdateProfile/></PrivateRouter>},
        ],
    },
    {
      path: "/signup",
      element: <Signup/>,
    }
  ]);