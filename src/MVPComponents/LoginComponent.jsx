//This component will be for the login page
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <div>
      <h3>This is the login component</h3>
      <Link to="/sign-up">
        <button>Sign In</button>
      </Link>
      <p>or</p>
      <Link to="/home">
        <button>Continue As Guest</button>
      </Link>
    </div>
  );
};

export default LoginComponent;
