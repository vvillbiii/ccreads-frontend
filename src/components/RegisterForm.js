import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";

const RegisterForm = (props) => {
  const URL = "https://capstone-mern-backend.herokuapp.com/";
  const navigate = useNavigate();
  // state to hold formData
  const [newForm, setNewForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(`${URL}register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    });
    setNewForm({
      username: "",
      email: "",
      password: "",
    });
    return navigate("/login");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col sm={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "white" }}>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={newForm.username}
                  name="username"
                  id="username"
                  placeholder="enter username"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "white" }}>Email</Form.Label>
                <Form.Control
                  type="text"
                  value={newForm.email}
                  name="email"
                  id="email"
                  placeholder="email@email.com"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "white" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={newForm.password}
                  name="password"
                  id="password"
                  placeholder="******"
                  onChange={handleChange}
                  required
                  pattern=".{8,}"
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="outline-primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
            <div className="mt-5">
              <p
                className="text-center"
                style={{
                  color: "White",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Already have an account?
                <span>
                  <Link to="/login"> Login</Link>
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default RegisterForm;
