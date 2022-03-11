import { Card, Spinner, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const InterestingRead = (props) => {
  const loaded = () => {
    return props.reads.map((read) => (
      <div key={read._id}>
        <Container>
          <li>
            <Link
              to={read.url}
              style={{ color: "white", textDecoration: "none" }}
            >
              <p style={{ fontSize: "16px" }}> {read.title}</p>
            </Link>
          </li>
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
      <Container>
        <Card>
          <Card.Title className="text-center mt-2">
            Interesting Reads
          </Card.Title>
          <ul>{props.reads ? loaded() : loading()}</ul>
        </Card>
      </Container>
    </div>
  );
};

export default InterestingRead;
