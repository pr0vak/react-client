import type { ReactNode } from "react";
import { Container } from "react-bootstrap";

interface Props {
	children: ReactNode
}

export function PageContainer({ children }: Props) {
	return <Container className="py-4">{children}</Container>
}
