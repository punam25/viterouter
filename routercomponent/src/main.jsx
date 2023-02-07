import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Typography } from '@mui/material';
// import App from './App';
import './index.css'

import AdmissionForm from './Components/AdmissionForm';
import SimpleBottomNavigation from './Components/SimpleBottomNavigation';
import SimpleNavigation from './Components/SimpleNavigation';
import Welcome from "./Components/Welcome";
import ConfirmationPage from "./Components/ConfirmationPage";
import SuccessPage from "./SuccessPage";




const router = createBrowserRouter([
  {
    path: "/",
    // element: <SimpleBottomNavigation/>,
    element: <SimpleNavigation />,
    children: [
      {
        path: "/admission",
        element: <AdmissionForm />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/confirm",
        element:<ConfirmationPage/>
        
        
      },

      
      
      {
        path: "/success",
        element:<SuccessPage/>
        
        
      },



    ]
  },
{
  path: "/test-route",
    element: <Typography variant="h3">test route</Typography>,

},

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />  */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
