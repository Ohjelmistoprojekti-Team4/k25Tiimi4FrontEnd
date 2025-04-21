import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import { BrowserRouter } from 'react-router-dom'
import Products from './components/Products.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/products',
        element: <Products />,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/k25Tiimi4FrontEnd">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
