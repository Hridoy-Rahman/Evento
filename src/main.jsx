import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
