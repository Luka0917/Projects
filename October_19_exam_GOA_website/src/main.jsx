import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ThemeProvider from './context/ThemeProvider.jsx'
import './index.css'
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx'
import ContactUs from './components/ContactUs.jsx'
import Courses from './components/Courses.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([
  {path: '/', Component: App},
  {path: '/AboutUs', Component: AboutUs},
  {path: '/ContactUs', Component: ContactUs},
  {path: '/Courses', Component: Courses},
  {path: '*', Component: ErrorPage}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
