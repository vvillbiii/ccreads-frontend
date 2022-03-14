import {
  Container,
  Row,
  Col,
  Spinner,
  Card,
  Button,
  Form,
  Collapse,
} from "react-bootstrap";
import ProfileInfo from "../components/ProfileInfo";
import ProfileNav from "../components/Profilenav";
import InterestingRead from "../components/InterestingRead";
import { useState, useEffect } from "react";

const Note = (props) => {
  const reads = props.reads;
  const URL = "https://capstone-mern-backend.herokuapp.com/";
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectElement, setSelectElement] = useState(0);

  const getUser = async () => {
    const response = await fetch(`${URL}users`, {
      headers: {
        "auth-token": localStorage.token,
      },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const getNotes = async () => {
    const response = await fetch(`${URL}notes`, {
      headers: {
        "auth-token": localStorage.token,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setNotes(data);
  };

  useEffect(() => {
    getNotes();
  });

  const [editNote, setEditNote] = useState({
    body: "",
  });

  const handleChange = (event) => {
    setEditNote({ ...editNote, [event.target.name]: event.target.value });
  };

  const handleClick = (id) => {
    setSelectElement(id);
    if (selectElement === id) {
      setOpen(!open);
    }
  };

  const loaded = () => {
    if (notes.length === 0) {
      return (
        <div className="mb-3">
          <Container>
            <Card>
              <h1
                style={{ color: "white", fontSize: "2.8em" }}
                className="text-center mt-3"
              >
                No Notes Added Yet.
              </h1>
              <Card.Link
                href="/"
                style={{ textDecorationLine: "none" }}
                className="d-flex justify-content-center mb-5"
              >
                Start Adding Notes
              </Card.Link>
            </Card>
          </Container>
        </div>
      );
    } else {
      return notes.map((note) => (
        <div key={note._id}>
          <Container>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Note on: {note.article.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Note</Card.Subtitle>
                <Card.Text>{note.body}</Card.Text>
                <Button
                  size="sm"
                  variant="link"
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    handleClick(note._id);
                  }}
                >
                  Edit Note
                </Button>
                <Collapse in={selectElement === note._id ? open : null}>
                  <div>
                    <Form
                      onSubmit={async (event) => {
                        event.preventDefault();
                        await fetch(`${URL}notes/${note._id}`, {
                          method: "put",
                          headers: {
                            "auth-token": localStorage.token,
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(editNote),
                        });
                        setEditNote({
                          body: "",
                        });
                      }}
                    >
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <textarea
                          className="form-control"
                          id="body"
                          name="body"
                          rows="3"
                          value={editNote.body}
                          onChange={handleChange}
                          placeholder={note.body}
                        ></textarea>
                      </Form.Group>
                      <div className="d-grid gap-2">
                        <Button variant="secondary" type="submit">
                          Save
                        </Button>
                      </div>
                    </Form>
                    <Button
                      className="mt-2"
                      size="sm"
                      variant="danger"
                      onClick={async () => {
                        await fetch(`${URL}notes/${note._id}`, {
                          method: "delete",
                          headers: {
                            "content-Type": "application/json",
                            "auth-token": localStorage.token,
                          },
                        });
                      }}
                    >
                      Delete Note
                    </Button>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Container>
        </div>
      ));
    }
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
      <Container className="mt-5">
        <Row>
          <Col sm>
            <ProfileInfo user={user} />
            <ProfileNav />
          </Col>
          <Col lg={6}>{notes ? loaded() : loading()}</Col>
          <Col sm>
            <InterestingRead reads={reads} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Note;
