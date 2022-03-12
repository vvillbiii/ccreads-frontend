import { Container, Row, Col, Spinner, Card } from "react-bootstrap";
import ProfileInfo from "../components/ProfileInfo";
import ProfileNav from "../components/Profilenav";
import InterestingRead from "../components/InterestingRead";
import { useState, useEffect } from "react";

const Dashboard = (props) => {
  const reads = props.reads;
  const URL = "https://capstone-mern-backend.herokuapp.com/";
  const [user, setUser] = useState(null);
  const [bookmarks, setBookmarks] = useState(null);

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

  const getBookmarks = async () => {
    const response = await fetch(`${URL}bookmarks`, {
      headers: {
        "auth-token": localStorage.token,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setBookmarks(data);
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  const loaded = () => {
    if (bookmarks.bookmarks.length === 0) {
      return (
        <div>
          <h1
            style={{ color: "white", fontSize: "2.8em" }}
            className="text-center mb-3"
          >
            No Favorites Added Yet.
          </h1>
        </div>
      );
    } else {
      return bookmarks.bookmarks.map((read) => (
        <div key={read._id}>
          <Container>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{read.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Bookmark
                </Card.Subtitle>
                <Card.Text>{read.description}</Card.Text>
                <Card.Link
                  href={read.url}
                  style={{ textDecorationLine: "none" }}
                >
                  Read
                </Card.Link>
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
          <Col lg>
            <ProfileInfo user={user} />
            <ProfileNav />
          </Col>
          <Col lg={6}>{bookmarks ? loaded() : loading()}</Col>
          <Col lg>
            <InterestingRead reads={reads} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
