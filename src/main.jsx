import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './components/pages/Home.jsx'
import Company from './components/pages/Company.jsx'
import Contact from './components/pages/Contact.jsx'
import Projects from './components/pages/Projects.jsx'
import NewProjects from './components/pages/NewProjects';
import Project from './components/pages/Project.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/",  element: <Home />},
      { path: "company", element: <Company /> },
      { path: "contact", element: <Contact />  },
      { path: "newprojects",  element: <NewProjects />  },
      { path: "projects",  element: <Projects />  },
      { path: "projects/:id",  element: <Project />  }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />  
  </React.StrictMode>
)
