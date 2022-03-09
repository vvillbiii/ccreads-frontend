import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileInfo = (props) => {
  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Card.Img
              src="https://static.vecteezy.com/system/resources/previews/002/608/327/non_2x/mobile-application-avatar-web-button-menu-digital-silhouette-style-icon-free-vector.jpg"
              style={{ width: "30%" }}
              className="rounded-circle"
            />
            <Card.Title className="mt-2 text-center">Username</Card.Title>
            <Card.Text className="text-center">
              <Link
                to="/"
                style={{ textDecorationLine: "none" }}
                className="text-muted"
              >
                Edit profile
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ProfileInfo;
