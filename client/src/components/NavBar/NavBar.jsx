import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">RS Clues</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">My Log</Nav.Link>
            <NavDropdown title="Leaderboards" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Treasure Trail Points</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Broadcasts (Overall)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Broadcasts (Detailed)</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Titles" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Golden Titles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Golden Title Progress
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Base Titles</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Guides" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Requirements</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Setups
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Gathering</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Solving</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;