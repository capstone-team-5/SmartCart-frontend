import DiandreComponent from "./Developers/DiandreComponent";
import VandhanaComponent from "./Developers/VandhanaComponent";
import RyanComponent from "./Developers/RyanComponent";
import TouhamiComponent from "./Developers/TouhamiComponent";
import TafariComponent from "./Developers/TafariComponent";

const MeetTheDevelopersComponent = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              $mrtCART Developers
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-6 xl:gap-10">
            <div className="p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <VandhanaComponent />
            </div>

            <div className="p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <DiandreComponent />
            </div>

            <div className="p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <RyanComponent />
            </div>

            <div className="p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <TouhamiComponent />
            </div>

            <div className="p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <TafariComponent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetTheDevelopersComponent;
