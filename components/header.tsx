/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Website using React Next.js.

    LibreSchemas Website using React Next.js is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Website using React Next.js is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Website using React Next.js. If not, see <https://www.gnu.org/licenses/>.
*/
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
            <span style={{fontSize: 35}}>LibreSchemas</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto pt-2 pl-2 px-3">
                <Nav.Link href="/">About</Nav.Link>
                <Nav.Link href="/faq">FAQ</Nav.Link>
                <Nav.Link href="/contributing">Contributing</Nav.Link>
                <Nav.Link href="/documentation">Documentation</Nav.Link>
                <Nav.Link href="/contact-us">Contact us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}
  
export default Header