import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Single from './pages/Single';
import Write from './pages/Write';
import './../style.scss'
const Layout = () => {
  return(
    <>
    <Header>
    </Header>

    <Outlet></Outlet>

    <Footer/>
    
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/post/:id",
        element: <Single/>
      },
      {
        path:"/write",
        element: <Write/>
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
   
  </React.StrictMode>
);