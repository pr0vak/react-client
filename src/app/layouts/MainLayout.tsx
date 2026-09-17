import { Outlet } from "react-router";

export function MainLayout() {
  return (
    <>
      <header className="border-bottom border-secondary py-3 px-4">
        Product
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-top border-secondary py-3 px-4">
        Footer
      </footer>
    </>
  )
}
