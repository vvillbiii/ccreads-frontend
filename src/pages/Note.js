import { Container, Row, Col, Spinner, Card } from "react-bootstrap";
import ProfileInfo from "../components/ProfileInfo";
import ProfileNav from "../components/Profilenav";
import InterestingRead from "../components/InterestingRead";
import { useState, useEffect } from "react";

const Note = (props) => {
  const reads = props.reads;
  const URL = "https://capstone-mern-backend.herokuapp.com/";
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState(null);

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
    console.log(data);
    setNotes(data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const loaded = () => {
    return notes.map((read) => (
      <div key={read._id}>
        <Container>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{read.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Note</Card.Subtitle>
              <Card.Text>{read.description}</Card.Text>
              <Card.Link href={read.url}>Read</Card.Link>
            </Card.Body>
          </Card>
        </Container>
      </div>
    ));
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
