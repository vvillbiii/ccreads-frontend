import { Container, Row, Col, Spinner, Card, Button } from "react-bootstrap";
import ProfileInfo from "../components/ProfileInfo";
import ProfileNav from "../components/Profilenav";
import InterestingRead from "../components/InterestingRead";
import { useState, useEffect } from "react";
import UpdateNoteModal from "../components/UpdateNoteModal";

const Note = (props) => {
  const reads = props.reads;
  const URL = "https://capstone-mern-backend.herokuapp.com/";
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState(null);
  const [modalShow, setModalShow] = useState(false);

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

  const loaded = () => {
    if (notes.length === 0) {
      return (
        <div>
          <h1
            style={{ color: "white", fontSize: "2.8em" }}
            className="text-center mb-3"
          >
            No Notes Added Yet.
          </h1>
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
                    setModalShow(true);
                  }}
                >
                  Edit Note
                </Button>
              </Card.Body>
            </Card>
          </Container>
          <UpdateNoteModal
            note={note}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
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
