import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import About from "../../Pages/About/About";
import AllProjects from "../../Pages/AllProjects/AllProjects";
import Blogs from "../../Pages/Blogs/Blogs";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/Others/NotFound/NotFound";
import Projects from "../../Pages/Projects/Projects";
import SingleProject from "../../Pages/SingleProject/SingleProject";
import Skills from "../../Pages/Skills/Skills";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/allprojects',
                element: <AllProjects></AllProjects>,
                loader: async ({ params }) => fetch('https://my-portfolio-server-rho.vercel.app/projects')
            },
            {
                path: '/projects/:id',
                element: <SingleProject></SingleProject>,
                loader: async ({ params }) => fetch(`https://my-portfolio-server-rho.vercel.app/projects/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>,
    }
]);