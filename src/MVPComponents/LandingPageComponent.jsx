//This will be for the landing page

import { Link } from "react-router-dom";

const LandingPageComponent = () => {
  return (
    <div>
      <h3>This is the landing page before the user logs in</h3>
      <h3>Compare prices across hundreds of stores caursel</h3>
      <br /> <br />
      <h3>View Your Favorite Items</h3>
      <br /> <br />
      <h3>Show Cart Comparing Prices</h3>
      <br /> <br />
      <h3>See Your Savings</h3>
      <br /> <br />
      <Link to="/login">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPageComponent;
