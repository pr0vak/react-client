import { MainLayout } from "@/app/layouts"
import { AboutPage } from "@/pages/about"
import { HomePage } from "@/pages/home"
import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> }
    ]
  }
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
