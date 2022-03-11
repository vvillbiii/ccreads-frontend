import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Status404 = () => {
  const navigate = useNavigate;

  const goHome = () => {
    return navigate(-1);
  };
  return (
    <div>
      <Container className="mt-5" style={{ color: "white" }}>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <h1 style={{ fontSize: "2.8em" }}>Sorry Nothing Exist Here</h1>
            <div className="mt-3">
              <Button
                onClick={() => {
                  navigate("/");
                }}
                variant="outline-primary"
              >
                Go Home
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Status404;
