import { MainLayout } from "@/app/layouts"
import { AboutPage } from "@/pages/about"
import { HomePage } from "@/pages/home"
import { LoginPage } from "@/pages/login"
import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/login", element: <LoginPage /> },
    ]
  }
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
