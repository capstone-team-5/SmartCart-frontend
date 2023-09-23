// import LandingPageComponent from "../MVPComponents/LandingPageComponent";

import LandingBanner from "../MVPComponents/LandingPageComponent/LandingBanner";
import LandingCards from "../MVPComponents/LandingPageComponent/LandingCards";
import LandingTable from "../MVPComponents/LandingPageComponent/LandingTable";

const LandingPage = () => {
  return (
    <div>
        {/* <LandingPageComponent /> */}
        <LandingBanner />
        <LandingCards />
        <LandingTable />
    </div>
  );
};

export default LandingPage;
