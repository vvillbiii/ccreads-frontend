import { useState } from "react";
import { Spinner, Card, Button, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faBookmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NoteModal from "../components/NoteModal";

const Article = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const URL = "https://capstone-mern-backend.herokuapp.com/";

  const loaded = () => {
    return props.article.map((article) => (
      <div key={article._id} className="my-4 shadow shadow-intensity-sm">
        <Container>
          <Row>
            <Card className="rounded">
              <Card.Body>
                <Card.Title style={{ color: "white" }}>
                  <div className="d-flex justify-content-end">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="mx-2"
                      onClick={() => {
                        setModalShow(true);
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faBookmark}
                      className="mx-2"
                      onClick={async () => {
                        await fetch(`${URL}bookmarks/${article._id}`, {
                          headers: {
                            "auth-token": localStorage.token,
                            "Content-Type": "application/json",
                          },
                        });
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="mx-2"
                      onClick={async () => {
                        await fetch(`${URL}favorites/${article._id}`, {
                          headers: {
                            "auth-token": localStorage.token,
                            "Content-Type": "application/json",
                          },
                        });
                      }}
                    />
                  </div>
                  {article.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  By: {article.author}
                </Card.Subtitle>
                <Card.Text>{article.description}</Card.Text>
                <div className="d-flex justify-content-end mt3">
                  <Link to={article.url}>
                    <Button variant="outline-primary">Read</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>

            <NoteModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              article={article}
            />
          </Row>
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
        <h1
          style={{ color: "white", fontSize: "2.8em" }}
          className="text-center mb-3"
        >
          Conscious Culture Reads
        </h1>
        {props.article ? loaded() : loading()}
        <div className="d-flex justify-content-center mt-3 pb-5">
          <Button onClick={props.onClick} variant="outline-primary">
            Get New Reads
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Article;
