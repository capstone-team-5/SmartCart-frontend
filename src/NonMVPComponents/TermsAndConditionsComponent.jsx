//This is the terms and conditions page
import { Link, useNavigate } from "react-router-dom";
const TermsAndConditionsComponent = () => {
  const navigate = useNavigate();
  return (
    <section className="text-center mt-20 px-4 dark:text-white">
      <h1 className="text-4xl mb-8 tracking-tight font-extrabold text-gray-900 dark:text-white">
        Terms and Conditions
      </h1>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        <div className="rounded border-gray-300 dark:border-gray-700 border-2 p-4">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">
            1. Definitions
          </h2>
          <ul className="list-disc pl-4">
            <li>
              "Application" refers to $mrtCART, the service provided by us to
              compare prices of grocery items and find the best deals in your
              area.
            </li>
            <li>
              "User" refers to individuals who use our application to compare
              prices and make informed purchasing decisions.
            </li>
            <li>
              "Vendor" refers to businesses or individuals who provide pricing
              information and products on our application.
            </li>
          </ul>
        </div>

        <div className="rounded border-gray-300 dark:border-gray-700 border-2 p-4">
          <h2 className="text-xl font-semibold mb-2">
            2. Use of the Application
          </h2>
          <p>
            <strong>General Use</strong>: Users can utilize the application to
            compare grocery prices, create shopping lists, and find the most
            cost-effective options available from different vendors.
          </p>
          <p>
            <strong>Vendor Sign-In</strong>: Vendors can sign in, add their
            business details, and list their products along with prices. Vendors
            can also update or delete product information and view their weekly
            progress chart.
          </p>
          <p>
            <strong>Buyer Sign-In</strong>: Buyers can create accounts, search
            for products, add items to their cart, and compare prices from
            various vendors in their location.
          </p>
        </div>

        <div className="rounded border-gray-300 dark:border-gray-700 border-2 p-4">
          <h2 className="text-xl font-semibold mb-2">3. Privacy</h2>
          <p>
            We value your privacy and have a separate Privacy Policy that
            governs how we collect, use, and disclose information. By using our
            application, you agree to our Privacy Policy.
          </p>
        </div>

        <div className="rounded border-gray-300 dark:border-gray-700 border-2 p-4">
          <h2 className="text-xl font-semibold mb-2">
            4. Misuse and Reporting
          </h2>
          <p>
            <strong>Vendor Misuse</strong>: Users are encouraged to report
            inaccurate information or products provided by vendors. Consistent
            violations may result in vendor suspension.
          </p>
          <p>
            <strong>Discrepancies</strong>: If a user identifies a discrepancy
            between the listed price on the application and the actual price at
            a vendor's store, the vendor is obliged to honor the price displayed
            on the application.
          </p>
        </div>

        <div className="rounded border-gray-300 dark:border-gray-700 border-2 p-4">
          <h2 className="text-xl font-semibold mb-2">
            5. Limitations of Liability
          </h2>
          <p>
            We strive to provide accurate and up-to-date information. However,
            we do not guarantee the accuracy, reliability, or completeness of
            vendor information or pricing. Users are responsible for verifying
            prices and product availability with the vendor.
          </p>
        </div>

        <div className="rounded border-gray-300 dark:border-gray-700 border-2 p-4">
          <h2 className="text-xl font-semibold mb-2">
            6. Intellectual Property
          </h2>
          <p>
            All content, including text, graphics, logos, and software used in
            the application, is the intellectual property of $mrtCART. Users and
            vendors may not reproduce, modify, or distribute this content
            without explicit permission.
          </p>
        </div>

        <div className="rounded border-gray-300 dark:border-gray-700 border-2 p-4">
          <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
          <p>
            We reserve the right to terminate or suspend user or vendor accounts
            at our discretion, especially in cases of misuse, fraudulent
            activity, or violations of these Terms.
          </p>
        </div>

        <div className="rounded border-gray-300 dark:border-gray-700 border-2 p-4">
          <h2 className="text-xl font-semibold mb-2">
            8. Changes to Terms and Application
          </h2>
          <p>
            We may update these Terms or the features of our application from
            time to time. Users and vendors will be notified of significant
            changes, and continued use of the application implies acceptance of
            these changes.
          </p>
        </div>

        <div className="rounded border-gray-300 dark:border-gray-700 border-2 p-4">
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms, please
            contact us at officialsmrtcart@gmail.com.
          </p>
        </div>
      </div>

      <p className="mt-8">
        Thank you for using $mrtCART. We hope our service helps you save time
        and money while shopping for groceries!
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <Link
          to="/"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900  focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900 my-4"
          onClick={() => navigate(-1)}
        >
          Back
        </Link>
      </div>
    </section>
  );
};

export default TermsAndConditionsComponent;
