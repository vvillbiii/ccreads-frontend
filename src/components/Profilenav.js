import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileNav = (props) => {
  return (
    <div className="mt-4">
      <Container>
        <Card>
          <Card.Body>
            <Card.Text>
              <div>
                <Link to="/bookmarks" style={{ textDecorationLine: "none" }}>
                  Bookmarks
                </Link>
              </div>
              <div>
                <Link to="/favorites" style={{ textDecorationLine: "none" }}>
                  Favorites
                </Link>
              </div>
              <div>
                <Link to="/notes" style={{ textDecorationLine: "none" }}>
                  Notes
                </Link>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ProfileNav;
