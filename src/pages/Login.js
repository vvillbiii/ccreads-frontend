import LoginForm from "../components/LoginForm";
import { Container } from "react-bootstrap";

const Login = (props) => {
  return (
    <div>
      <Container className="mt-5">
        <h1 style={{ color: "white" }} className="text-center mb-3">
          Login
        </h1>
        <Container>
          <LoginForm />
        </Container>
      </Container>
    </div>
  );
};

export default Login;
