import LandingPageComponent from "../MVPComponents/LandingPageComponent";

import LandingBanner from "../MVPComponents/LandingPageComponent/LandingBanner";
import LandingCards from "../MVPComponents/LandingPageComponent/LandingCards";

const LandingPage = () => {
  return (
    <div>
      <h3>
        {/* <LandingPageComponent /> */}
        <LandingBanner />
        <LandingCards />
      </h3>
    </div>
  );
};

export default LandingPage;
