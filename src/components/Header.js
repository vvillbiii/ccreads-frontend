import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Modal, Button, Form } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="******" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="secondary" type="submit">
              Login
            </Button>
          </div>
        </Form>
        <p className="mt-2 text-sm-center" style={{ fontSize: "12px" }}>
          Don't have an account yet? Sign up here
        </p>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Navbar variant="light">
        <Nav className="container-fluid">
          <Navbar.Brand href="/" className="mx-4">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <strong>Conscious Culture Reads</strong>
            </Link>
          </Navbar.Brand>
          <Nav.Item className="ml-auto">
            <Nav.Link>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => setModalShow(true)}
              >
                <strong>Login/Sign up</strong>
              </Link>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
