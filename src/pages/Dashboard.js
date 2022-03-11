import { Container, Row, Col } from "react-bootstrap";
import ProfileInfo from "../components/ProfileInfo";
import ProfileNav from "../components/Profilenav";
import InterestingRead from "../components/InterestingRead";
import { useState, useEffect } from "react";
import ShowContainer from "../components/ShowContainer";

const Dashboard = (props) => {
  // const params = useParams();
  const URL = "https://capstone-mern-backend.herokuapp.com/";
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await fetch(`${URL}users`, {
      headers: {
        "auth-token": localStorage.token,
      },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  //   const getCurrentUser = () => {
  //     return JSON.parse(localStorage.getItem("token"));
  //   };
  //   console.log(getCurrentUser);

  //   useEffect(() => getCurrentUser(), []);
  // console.log(user);
  const reads = props.reads;
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col lg>
            <ProfileInfo user={user} />
            <ProfileNav />
          </Col>
          <Col lg={6}>
            <ShowContainer
            // bookmarks={user.bookmarks}
            // favorites={user.favoriteArticles}
            />
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
