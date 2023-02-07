import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";

// import './index.css'  pra não dar conflito com o bootstrap


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<h1>erro 404 (Página não existe)</h1>,
    children:[
      {
        path: "/",
        element: <h1>HomePage</h1>
      },
      {
        path: "/sobre",
        element: <h1>Pagina Sobre</h1>
      },
      {
        path: "/tarefas",
        element: <h1>Página Tarefas</h1>
      },
      {
        path: "/contato",
        element: <h1>Página Contato</h1>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
