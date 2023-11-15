import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Videos from "./pages/videos/Videos";
import Projects from "./pages/projects/Projects";
import Blogs from "./pages/blogs/Blogs";
import About from "./pages/about/About";
import "./variables.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import BlogPost from "./pages/blog/BlogPost";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const Layout = ({ children }) => {
    return (
      <>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div>
            <Outlet />
          </div>
          <Footer />
        </div>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        // children: [
        {
          path: "/blogs/:id",
          element: <BlogPost />,
        },
        // ],
        // },
        {
          path: "/videos",
          element: <Videos />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import "./App.css";
// import Footer from "./components/footer/Footer";
// import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
// import Videos from "./pages/videos/Videos";
// import Projects from "./pages/projects/Projects";
// import Blogs from "./pages/blogs/Blogs";
// import About from "./pages/about/About";
// import Blog from "./pages/blog/Blog";
// import "./variables.scss";
// import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";

// function App() {
//   const { darkMode } = useContext(DarkModeContext);
//   const Layout = () => {
//     return (
//       <>
//         <div className={`theme-${darkMode ? "dark" : "light"}`}>
//           <Navbar />
//           <div>
//             <Outlet />
//           </div>
//           <Footer />
//         </div>
//       </>
//     );
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/projects",
//           element: <Projects />,
//         },
//         {
//           path: "/blogs",
//           element: <Blogs />,
//           children: [
//             {
//               path: ":blogId",
//               element: <Blog />,
//             },
//           ],
//         },
//         {
//           path: "/videos",
//           element: <Videos />,
//         },
//         {
//           path: "/about",
//           element: <About />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default App;
