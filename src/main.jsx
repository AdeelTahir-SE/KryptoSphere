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
    path: "/HiddenTreasures",
    element: (
      <>
        <Navbar />
        <HiddenTreasures />
      </>
    ),
  },
  {
    path: "/HolderRewards",
    element: (
      <>
        <Navbar />
        <HolderRewards />
      </>
    ),
  },
  {
    path: "/Contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
  {
    path: "/Welcome",
    element: (
      <>
        <Navbar />
        <Welcome />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Welcome />
      </>
    ),
  },
  {
    path: "/Products",
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
