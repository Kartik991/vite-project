import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom'

import Layout from './Layout'
import * as Compos from './components/index'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/vite-project/" element={<Layout/>}>
            <Route path='/vite-project/' element={<Compos.Home/>}/>
            <Route path="/vite-project/*" element={<Navigate to="/"/>}/>
            <Route path="/vite-project/pass-gen" element={<Compos.PassGen />} />   
            <Route path="/vite-project/click-counter" element={<Compos.ClickCounter/>}/>
            <Route path="/vite-project/todos" element={<Compos.ToDo/>}/>
        </Route>
    )
)





createRoot(document.getElementById('root')).render(
<>
<RouterProvider router={router}/>
</>
);
