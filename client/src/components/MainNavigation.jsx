import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./MainNavigation.css";

function MainNavigation({ onAuthenticate }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">RS Clues</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/mylog">My Log</Nav.Link>
            <NavDropdown title="Leaderboards" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/leaderboard/treasuretrailpoints">
                Treasure Trail Points
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/leaderboard/overall">
                Broadcasts (Overall)
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/leaderboard/detailed">
                Broadcasts (Detailed)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Titles" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="titles/golden">
                Golden Titles
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/titles/progress">
                Golden Title Progress
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/titles/base">
                Base Titles
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Guides" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/requirements">
                Requirements
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/setups">Setups</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/gathering">Gathering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solving">Solving</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/authenticate" className="auth">Login/Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
