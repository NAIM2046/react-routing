import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Header from './components/Header/Header.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import PersonDetails from './components/PersonDetails/PersonDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about" ,
        element: <About></About> 

      } ,
      {
        path: "/Contact", 
        element: <Contact></Contact>
      },
      {
        path: "/user", 
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/users") ,
        element: <User></User>
      },
      {
        path: "/user/:UserId",
        
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
        element: <PersonDetails></PersonDetails>
      }

     
    ]
  },
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
