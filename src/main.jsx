import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Books, { loader as BookLoader } from './Books.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        path: "s/:search"
      },
      {
        path: "language/:language",
        element: <Books />,
        loader: BookLoader,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
