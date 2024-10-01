import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App'
import Problema from './pages/Problema'
import Solucao from './pages/Solucao'
import Impacto from './pages/Impacto'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <ConteudoPrincipal/>},
      {path:'problema', element: <Problema/>},
      {path:'solucao', element: <Solucao/>},
      {path:'impacto', element: <Impacto/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)