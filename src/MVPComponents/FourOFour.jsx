// This function is the error page, will take user back to the home page
import { useNavigate, Link } from "react-router-dom";

const FourOFourComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        {" "}
        Sorry, This page does not exist. Please visit our{" "}
        <Link to="/">Home Page</Link>
      </h1>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default FourOFourComponent;
