import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

const Header = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    return navigate("/");
  };

  return (
    <div>
      <Navbar variant="light" sticky="top">
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
            {!token ? (
              <div>
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none",
                        color: "#C5C6C7",
                      }}
                    >
                      <strong>Login</strong>
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      to="/register"
                      style={{
                        textDecoration: "none",
                        color: "#C5C6C7",
                      }}
                    >
                      <strong>Sign Up</strong>
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </div>
            ) : (
              <Nav.Item>
                <Nav.Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#C5C6C7" }}
                    onClick={handleLogout}
                  >
                    <strong>Log out</strong>
                  </Link>
                </Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
