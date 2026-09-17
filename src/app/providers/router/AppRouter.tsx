import { PageContainer } from "@/shared/ui"
import { createBrowserRouter, Link, RouterProvider } from "react-router"

function HomePage() {
  return (
    <PageContainer>
      <h1>HomePage</h1>
      <p>Здесь будет каталог товаров</p>
      <Link to="/about">Перейти к AboutPage</Link>
    </PageContainer>
  )
}

function AboutPage() {
  return (
    <PageContainer>
      <h1>AboutPage</h1>
      <p>Здесь будет информация о продукте</p>
      <Link to="/">Перейти к HomePage</Link>
    </PageContainer>
  )
}

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> }
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
