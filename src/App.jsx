import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLeyout from './layout/MainLeyout'
import Desktob from './pages/Desktob'
import Movies from './pages/Movies'
import Serial from './pages/Serial'
import Bookmerk from './pages/Bookmarked'
function App() {
  let router =createBrowserRouter([
    {
      path:"/",
      element:<MainLeyout/>,
      children:[
        {
          path:"/",
          element:<Desktob/>
        },
        {
          path:"/1",
          element:<Movies/>
        },
        {
          path:"/2",
          element:<Bookmerk/>
        }, 
        {
          path:"/3",
          element:<Serial/>
        }, 
      ]
    }
  ])
  return (
   <RouterProvider router={router}/>
  )
}

export default App