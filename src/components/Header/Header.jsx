import { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import UserContext from '../../contexts/user/UserContext.jsx'
export const Header = () => {
  const userCtx = useContext( UserContext )
  const { logout, user } = userCtx
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="../src/assets/ecommerce.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={ { flexGrow: 0 } }>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={ { maxHeight: '100px' } }
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
            {
              user?.email ? <>
                <Nav.Link href="/profile">Perfil</Nav.Link>
                <Nav.Link href='/' onClick={ () => logout() }>Cerrar sesión</Nav.Link>
              </> : <>
                  <Nav.Link href="/auth/login">
                    Ingreso
                  </Nav.Link>
                  <Nav.Link href="/auth/signup">
                    Registro
                  </Nav.Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}