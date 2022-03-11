import { Container, Row, Col } from "react-bootstrap";

const Advertise = () => {
  return (
    <div>
      <Container className="mt-5" style={{ color: "white" }}>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <h1 style={{ fontSize: "2.8em" }}>
              Advertise on Conscious Culture Reads
            </h1>
            <div>
              <p>
                If you want to reach smart people who are looking to get
                smarter, you've come to the right place.
              </p>
              <p>Advertising space here is limited.</p>
              <p>
                Advertising on Conscious Culture Reads is ideal for people who
                are looking to promote their courses, newsletters, podcasts,
                books, info products, or knowledge management tools.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Advertise;
