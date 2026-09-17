import { PageContainer } from "@/shared/ui/PageContainer";
import { Link } from "react-router";

export function HomePage() {
  return (
    <PageContainer>
      <h1>HomePage</h1>
      <p>Здесь будет каталог товаров</p>
      <Link to="/about">Перейти к AboutPage</Link>
    </PageContainer>
  )
}
