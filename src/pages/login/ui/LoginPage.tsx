import { LoginForm } from "@/features/auth/login";
import { PageContainer } from "@/shared/ui";

export function LoginPage() {
  return (
    <PageContainer>
      <h1 className="mb-4">Вход</h1>
      <LoginForm />
    </PageContainer>
  )
}
