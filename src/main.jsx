import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Work from './components/Work.jsx'
import Layout from './components/Layout.jsx'
import Chill from './components/Chill.jsx'
import NotFound from './components/notfound.jsx'
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[{
//       path:"",
//       element:<Banner/>
//     },
//   {  path:"Skills",
//   element:<Skills/>
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
         <Route path="skills" element={<Skills/>}/>
         <Route path="work" element={<Work/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="chill" element={<Chill/>}/>
         <Route path='*' element={<NotFound />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
