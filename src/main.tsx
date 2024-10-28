import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import Quiz from './components/quiz.tsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/quiz",
//     element: <Quiz></Quiz>,
//   },
// ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    

    {/* <RouterProvider router={router} /> */}
    <App />

  </StrictMode>
)
