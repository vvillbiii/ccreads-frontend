import { Card, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileInfo = ({ user }) => {
  console.log(user);

  const loaded = () => {
    return (
      <div>
        <Container>
          <Card>
            <Card.Body>
              <Card.Img
                src={user.image}
                style={{ width: "30%" }}
                className="rounded-circle"
              />
              <Card.Title className="mt-2 text-center">
                {user.username}
              </Card.Title>
              <Card.Text className="text-center">
                <Link
                  to="/settings"
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

  const loading = () => {
    return (
      <div className="d-flex justify-content-center mt-5 mb-5">
        <Spinner animation="border" variant="light" />
      </div>
    );
  };
  return user ? loaded() : loading();
};

export default ProfileInfo;
