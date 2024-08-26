import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import HiddenTreasures from "./pages/HiddenTreasures.jsx"
import HolderRewards from "./pages/HolderRewards.jsx"
import Products from "./pages/Products.jsx"
import Welcome from "./pages/Welcome.jsx"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Contact from "./pages/Contact.jsx"
const router = createBrowserRouter([

  {
    path: "/upworkpagesproject/HiddenTreasures",
    element: (
      <>
        <Navbar />
        <HiddenTreasures />
      </>
    ),
  },
  {
    path: "/upworkpagesproject/HolderRewards",
    element: (
      <>
        <Navbar />
        <HolderRewards />
      </>
    ),
  },
  {
    path: "/upworkpagesproject/Contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
  {
    path: "/upworkpagesproject/Welcome",
    element: (
      <>
        <Navbar />
        <Welcome />
      </>
    ),
  },
  {
    path: "/upworkpagesproject/",
    element: (
      <>
        <Navbar />
        <Welcome />
      </>
    ),
  },
  {
    path: "/upworkpagesproject/Products",
    element: (
      <>
        <Navbar />
        <Products />
      </>
    ),
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
