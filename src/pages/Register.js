import { Container } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";

const Register = (props) => {
  return (
    <div>
      <Container className="mt-5">
        <h1 style={{ color: "white" }} className="text-center mb-3">
          Create Account
        </h1>
        <Container>
          <RegisterForm />
        </Container>
      </Container>
    </div>
  );
};

export default Register;
