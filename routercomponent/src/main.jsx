import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AdmissionForm from './Components/AdmissionForm'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdmissionForm />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

    {/* < AdmissionForm />  */}
  </React.StrictMode>,
)
