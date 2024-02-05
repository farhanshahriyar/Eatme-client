import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Shop/Menu";
import Signup from "../components/signupModal/Signup";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import PrivateRouter from "../components/PrivateRoute/PrivateRouter";
import UpdateProfile from "../pages/Dashboard/UpdateProfile/UpdateProfile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
        children: [
            { path: "/", element: <Home/> },
            { path: "/menu", element: <PrivateRouter><Menu/></PrivateRouter> },
            { path: "/about", element: <About/> },
            { path: "/contact", element: <Contact/> },
            { path: "/update-profile", element: <PrivateRouter><UpdateProfile/></PrivateRouter>}
        ],
    },
    {
      path: "/signup",
      element: <Signup/>,
    }
  ]);