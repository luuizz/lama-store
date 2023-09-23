import { createBrowserRouter, RouterProvider, Router, Outlet } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Produtos } from "./pages/Produtos/Produtos";
import { Produto } from "./pages/Produto/Produto";
import "./app.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/produtos/:id",
        element: <Produtos />
      },
      {
        path: "/produto/:id",
        element: <Produto />
      }
    ]
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
