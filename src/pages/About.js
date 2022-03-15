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
                The world is full of information and it’s hard to keep up with
                the news.
              </p>
              <p>
                Content is everywhere, and it’s hard to find quality content
                that is relevant to you. There are so many blogs, podcasts, and
                newsletters out there. You have no idea what to read. How do you
                keep up?
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
