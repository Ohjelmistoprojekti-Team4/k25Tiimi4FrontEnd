import React from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Login from './components/Login.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
