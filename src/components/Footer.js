import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Nav fixed="bottom">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link px-2 text-muted"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link px-2 text-muted"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  className="nav-link px-2 text-muted"
                  style={{ textDecoration: "none" }}
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link px-2 text-muted"
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/advertise"
                  className="nav-link px-2 text-muted"
                  style={{ textDecoration: "none" }}
                >
                  Advertise
                </Link>
              </li>
            </ul>
            <p className="text-center text-muted">
              &copy; 2022 Conscious Culture
            </p>
          </footer>
        </Nav>
      </Container>
    </div>
  );
};

export default Footer;
