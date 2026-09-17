import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router'

export function Header() {
  return (
    <Navbar bg="body-tertiary" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Product
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Главная
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
