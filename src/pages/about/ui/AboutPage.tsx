import { PageContainer } from "@/shared/ui";
import { Link } from "react-router";

export function AboutPage() {
  return (
    <PageContainer>
      <h1>AboutPage</h1>
      <p>Здесь будет информация о продукте</p>
      <Link to="/">Перейти к HomePage</Link>
    </PageContainer>
  )
}
