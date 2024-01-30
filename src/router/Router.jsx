import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Shop/Menu";
import Signup from "../components/signupModal/Signup";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
        children: [
            { path: "/", element: <Home/> },
            { path: "/menu", element: <Menu/> },
            { path: "/about", element: <About/> },
            { path: "/contact", element: <Contact/> },
        ],
    },
    {
      path: "/signup",
      element: <Signup/>,
    }
  ]);