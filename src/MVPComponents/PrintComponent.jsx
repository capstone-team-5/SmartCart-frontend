import React, { useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";

const SimpleBox = ({ children }) => {
  return <div className="bg-white p-4 rounded shadow">{children}</div>;
};

const PrintComponent = () => {
  useEffect(() => {}, []);
  //component reference
  let componentRef = useRef(null);

  return (
    <>
      <div>
        <ReactToPrint
          trigger={() => (
            <div>
              <h1>Printing Component</h1>
              <button> Print this!</button>
            </div>
          )}
          content={() => componentRef}
        />
        <SimpleBox ref={(el) => (componentRef = el)}>
          <h2>Printing Now!</h2>
        </SimpleBox>
      </div>
    </>
  );
};

export default PrintComponent;
