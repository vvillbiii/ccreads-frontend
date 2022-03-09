import { Container, Row, Col } from "react-bootstrap";
import ProfileInfo from "../components/ProfileInfo";
import ProfileNav from "../components/Profilenav";
import InterestingRead from "../components/InterestingRead";

const Dashboard = (props) => {
  const reads = props.reads;
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col lg>
            <ProfileInfo />
            <ProfileNav />
          </Col>
          <Col lg={6}>
            <h1 style={{ color: "white" }}>Show Container</h1>
          </Col>
          <Col lg>
            <InterestingRead reads={reads} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
