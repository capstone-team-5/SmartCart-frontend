import LandingBanner from "../MVPComponents/LandingPageComponent/LandingBanner";
import LandingCards from "../MVPComponents/LandingPageComponent/LandingCards";
import LandingTable from "../MVPComponents/LandingPageComponent/LandingTable";
import CustomerTestimonialsComponent from "../NonMVPComponents/CustomerTestimonialsComponent";
import LandingPartner from "../MVPComponents/LandingPageComponent/LandingPartner";

const LandingPage = () => {
  return (
    <div>
      <LandingBanner />
      <LandingCards />
      <LandingTable />
      <LandingPartner />
      <CustomerTestimonialsComponent />
    </div>
  );
};

export default LandingPage;
