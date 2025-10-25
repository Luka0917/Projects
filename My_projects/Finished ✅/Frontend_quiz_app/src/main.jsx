import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThemeProvider from './context/ThemeProvider.jsx'
import App from './App.jsx'
import Html from '../src/components/Html.jsx'
import Css from './components/Css.jsx'
import JavaScript from './components/JavaScript.jsx'
import Accessibility from './components/Accessibility.jsx'
import Result from '../src/components/Result.jsx'
import Error from '../src/components/Error.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {path: '/', Component: App},
  {path: '/HTML', Component: Html},
  {path: '/CSS', Component: Css},
  {path: '/JavaScript', Component: JavaScript},
  {path: '/Accessibility', Component: Accessibility},
  {path: '/Result', Component: Result},
  {path: '*', Component: Error}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)