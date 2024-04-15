import "./MainNavigation.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getSession, logout } from "../util/auth";
import {queryClient} from "../util/http";

function MainNavigation() {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });

  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['session']});
      navigate('/');
    }
  })

  function handleLogout() {
    mutate();
  }

  let content;

  if (isLoading) {
    content = (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (data) {
    content = (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src="/Challenge_scroll.png" />
        <Navbar.Brand as={Link} to="/">
          Clue Chasers
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {data.isAuthenticated && (
              <Nav.Link as={Link} to="/mylog">
                My Log
              </Nav.Link>
            )}
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
              <NavDropdown.Item as={Link} to="/setups">
                Setups
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/gathering">
                Gathering
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solving">
                Solving
              </NavDropdown.Item>
            </NavDropdown>
            {!data.isAuthenticated && (
              <Nav.Link as={Link} to="/auth?mode=login" className="auth">
                Login
              </Nav.Link>
            )}
            {data.isAuthenticated && (
              <Button onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }

  return (
    <>
    {content}
    </>
  );
}

export default MainNavigation;
