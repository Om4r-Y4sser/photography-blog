// import { useState, react } from "react";
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Who from './Components/Who/Who';
import Blog from './Components/Blog/Blog';
import PostDetails from './Components/Postdetails/Postdetail'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from './Components/NotFound/Notfound';
import data from './data/posts.json'

export default function App() {

  let x = createBrowserRouter([
    {path: "", element: <Layout/>, children: [
    { index: true, element: <Home /> },
    { path: "Blog", element: <Blog /> },
    { path: "Blog/:slug", element: <PostDetails /> },
    { path: "Who", element: <Who /> },
    { path: "*", element: <Notfound /> }
]

    }
  ])
  return (
    <div>
      <RouterProvider router={x}></RouterProvider>
    </div>
  )
}
