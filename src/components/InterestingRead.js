import { Card, Spinner, Container, Button } from "react-bootstrap";

const InterestingRead = (props) => {
  const loaded = () => {
    return props.reads.map((read) => (
      <div key={read._id}>
        <Container>
          <Card.Link href={read.url} target="_blank">
            <Button
              variant="Link"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              {read.title}
            </Button>
          </Card.Link>
        </Container>
      </div>
    ));
  };
  const loading = () => {
    return (
      <div className="d-flex justify-content-center my-5">
        <Spinner animation="border" variant="light" />
      </div>
    );
  };

  return (
    <div>
      <Container>
        <Card className="pb-2">
          <Card.Title className="text-center mt-2">
            Interesting Reads
          </Card.Title>
          {props.reads ? loaded() : loading()}
        </Card>
      </Container>
    </div>
  );
};

export default InterestingRead;
