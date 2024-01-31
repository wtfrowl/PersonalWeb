import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Work from './components/Work.jsx'
import Layout from './components/Layout.jsx'
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[{
//       path:"",
//       element:<Banner/>
//     },
//   {  path:"about",
//   element:<About/>
//   },
//   {  path:"contact",
//   element:<Contact/>
//   },
//   {  path:"work",
//   element:<Work/>
//   }]
//   }





// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
         <Route path="about" element={<About/>}/>
         <Route path="work" element={<Work/>}/>
         <Route path="contact" element={<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
