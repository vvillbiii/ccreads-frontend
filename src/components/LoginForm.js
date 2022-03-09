import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Container, Col, Row } from "react-bootstrap";

const LoginForm = (props) => {
  const URL = "https://capstone-mern-backend.herokuapp.com/";

  const navigate = useNavigate();
  // state to hold formData
  const [newForm, setNewForm] = useState({
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

    await fetch(`${URL}login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    });
    setNewForm({
      email: "",
      password: "",
    });

    return navigate("/");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col sm={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "white" }}>Email</Form.Label>
                <Form.Control
                  type="text"
                  value={newForm.email}
                  name="email"
                  id="email"
                  placeholder="email@email.com"
                  onChange={handleChange}
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
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Login
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
                Don't have an account yet?
                <Link to="/register"> Sign up here</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
