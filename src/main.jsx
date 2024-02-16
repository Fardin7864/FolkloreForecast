import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Root.jsx'
import { SearchProvider } from './context/SearchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
    <RouterProvider router={router}/>
    </SearchProvider>
  </React.StrictMode>,
)
