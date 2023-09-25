// import LandingPageComponent from "../MVPComponents/LandingPageComponent";

import LandingBanner from "../MVPComponents/LandingPageComponent/LandingBanner";
import LandingCards from "../MVPComponents/LandingPageComponent/LandingCards";
import LandingTable from "../MVPComponents/LandingPageComponent/LandingTable";
import CustomerTestimonialsComponent from "../NonMVPComponents/CustomerTestimonialsComponent";

const LandingPage = () => {
  return (
    <div>
      {/* <LandingPageComponent /> */}
      <LandingBanner />
      <LandingCards />
      <LandingTable />
      <CustomerTestimonialsComponent />
    </div>
  );
};

export default LandingPage;
