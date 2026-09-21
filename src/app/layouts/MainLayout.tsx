import { Header } from "@/widgets/header";
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
