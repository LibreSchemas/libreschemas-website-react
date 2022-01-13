import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Header() {
    return (
        <Navbar style={{background: '#1A5653'}} collapseOnSelect expand="lg" variant="dark" sticky="top">
        <Navbar.Brand style={{marginLeft: 20}} href="/">
            <img
            src="/images/libreschemas_logo_w200px.png"
            width="60"
            height="58.5"
            className="d-inline-block align-top"
            alt="LibreSchemas Logo"
            />{' '}
            <span style={{fontSize: 40}}>LibreSchemas</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto pt-2 pl-2 px-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}
  
export default Header