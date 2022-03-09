import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar variant="light">
        <Nav className="container-fluid">
          <Navbar.Brand href="/" className="mx-4">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#C5C6C7",
              }}
            >
              <strong>Conscious Culture Reads</strong>
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "#C5C6C7" }}
                >
                  <strong>Sign Up</strong>
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#C5C6C7" }}
                >
                  <strong>Login</strong>
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
