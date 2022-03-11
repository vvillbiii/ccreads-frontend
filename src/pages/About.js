import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className="mt-5" style={{ color: "white" }}>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <h1 style={{ fontSize: "2.8em" }}>Conscious Culture</h1>
            <div>
              <p>Read Interesting Reads from a Wide Range of Disciplines</p>
            </div>
            <div>
              <p>
                Conscious Culture is a weekly newsletter that delivers
                interesting reads about marketing, culture, tech, psychology,
                and more.
              </p>
            </div>
            <div>
              <h3>Why We Made Conscious Culture Reads</h3>
            </div>
            <div>
              <p>
                We want to help you find your next read. As well as help you
                become smarter and more productive.
              </p>
              <p>
                Conscious Culture Reads allows you explore article that has been
                shared on the Conscious Culture newsletter and save them to your
                profile, so you can always revisit your favorite reads anytime
                you want. Conscious Culture Reads also let's you create notes on
                what you read so you have a place to put your takeaways.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
