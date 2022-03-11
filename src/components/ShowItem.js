import { Container, Spinner, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowItem = (props) => {
  //   console.log(props);
  const loaded = () => {
    return props.bookmarks.map((read) => (
      <div key={read._id}>
        <Container>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{read.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Bookmark
              </Card.Subtitle>
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
  return <div>{props.bookmarks ? loaded() : loading()}</div>;
};

export default ShowItem;
