import { useState } from "react";
import { Spinner, Card, Button, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faBookmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import NoteModal from "../components/NoteModal";

const Article = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const URL = "https://capstone-mern-backend.herokuapp.com/";
  const [selectElement, setSelectElement] = useState(0);

  const handleClick = (id) => {
    setSelectElement(id);
    if (selectElement === id) {
      setModalShow(true);
    }
  };

  const loaded = () => {
    return props.article.map((article) => (
      <div key={article._id} className="my-4 shadow shadow-intensity-sm">
        <Container>
          <Row>
            <Card className="rounded">
              <Card.Body>
                <Card.Title style={{ color: "white" }}>
                  <div className="d-flex justify-content-end mb-2">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => {
                        handleClick(article);
                      }}
                      className="edit mx-2"
                    />
                    <FontAwesomeIcon
                      icon={faBookmark}
                      className="mx-2 bookmark"
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
                      className="mx-2 heart"
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
                  <Card.Link href={article.url} target="_blank">
                    <Button variant="outline-primary">Read</Button>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>

            <NoteModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              article={selectElement}
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
          style={{ color: "white", fontSize: "3em", fontWeight: "bold" }}
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
