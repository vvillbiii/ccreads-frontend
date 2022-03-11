import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Settings = (props) => {
  //   console.log(props);
  const navigate = useNavigate();

  const URL = "https://capstone-mern-backend.herokuapp.com/";
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await fetch(`${URL}users`, {
      headers: {
        "auth-token": localStorage.token,
      },
    });
    const data = await response.json();
    setUser(data);
  };

  const updateUser = async () => {
    const response = await fetch(`${URL}users`, {
      method: "put",
      headers: {
        "content-Type": "application/json",
        "auth-token": localStorage.token,
      },
      body: JSON.stringify(editForm),
    });
    const data = await response.json();
    // console.log(data);
    setEditForm({ user });
    getUser();
  };

  const deleteUser = async () => {
    await fetch(`${URL}users`, {
      method: "delete",
      headers: {
        "content-Type": "application/json",
        "auth-token": localStorage.token,
      },
    });
    getUser();
  };

  useEffect(() => {
    getUser();
  }, []);

  //   console.log(user);

  const [editForm, setEditForm] = useState({ user });

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
    return navigate("/dashboard");
  };

  const handleDelete = () => {
    deleteUser();
    localStorage.removeItem("token");
    return navigate("/");
  };

  const loaded = () => {
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
                    value={editForm.username}
                    name="username"
                    id="username"
                    placeholder={user.username}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Email</Form.Label>
                  <Form.Control
                    type="text"
                    value={editForm.email}
                    placeholder={user.email}
                    name="email"
                    id="email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Image</Form.Label>
                  <Form.Control
                    type="text"
                    value={editForm.image}
                    placeholder={user.image}
                    name="image"
                    id="image"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={editForm.password}
                    onChange={handleChange}
                    name="password"
                    id="password"
                    placeholder="******"
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="outline-primary" type="submit">
                    Make Changes
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  const loading = () => {
    return (
      <div className="d-flex justify-content-center mt-5 mb-5">
        <Spinner animation="border" variant="light" />
      </div>
    );
  };
  return (
    <div>
      <h1 style={{ color: "white" }} className="text-center my-3">
        Account Settings
      </h1>
      {user ? loaded() : loading()}
      <Container>
        <Row>
          <Col sm={{ span: 6, offset: 3 }}>
            <div className="mt-5">
              <Button
                onClick={() => {
                  navigate(-1);
                }}
              >
                Go Back
              </Button>
            </div>
            <div className="mt-5">
              <Card>
                <Card.Body>
                  <Card.Title>Danger</Card.Title>
                  <Card.Text>
                    Deleting your account will delete all of your data,
                    including your bookmarks, notes, and more.
                  </Card.Text>
                  <Button variant="danger" onClick={handleDelete}>
                    Delete Profile
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
