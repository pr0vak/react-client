import { Header } from "@/widgets/header/ui";
import { Outlet } from "react-router";

export function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
