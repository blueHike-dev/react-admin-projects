import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Videos from "./pages/videos/Videos";
import Category from "./pages/category/Category";
import Blogs from "./pages/blogs/Blogs";
import About from "./pages/about/About";

function App() {
  const Layout = () => {
    return (
      <>
        <div className="main">
          <Navbar />
          <div className="mainContent">
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
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/blogs/:id",
          element: <Blog />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/category",
          element: <Category />,
        },
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
