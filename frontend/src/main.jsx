import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {router}  from './router/router.jsx'
import { NextUIProvider } from '@nextui-org/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <RouterProvider router={router}/>
  </NextUIProvider>
)
