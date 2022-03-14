import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    return navigate("/");
  };

  return (
    <div>
      <Navbar variant="light" expand="lg">
        <Nav className="container-fluid">
          <Navbar.Brand href="/" className="mx-4">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#C5C6C7",
                fontFamily: "Roboto",
              }}
            >
              Conscious Culture Reads
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {!token ? (
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      to="/register"
                      style={{
                        textDecoration: "none",
                        color: "#C5C6C7",
                      }}
                      className="mx-auto"
                    >
                      Sign Up
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              ) : (
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      to="/dashboard"
                      style={{ textDecoration: "none", color: "#C5C6C7" }}
                    >
                      Dashboard
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              )}
              {!token ? (
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none",
                        color: "#C5C6C7",
                      }}
                    >
                      Login
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              ) : (
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "#C5C6C7" }}
                      onClick={handleLogout}
                    >
                      Log out
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
