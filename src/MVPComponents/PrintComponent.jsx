import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const SimpleBox = React.forwardRef(({ children }, ref) => {
  return (
    <div className="bg-white p-4 rounded shadow" ref={ref}>
      {children}
    </div>
  );
});

const PrintComponent = () => {
  const componentRef = useRef(null);

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <div>
            <h1>Printing Component</h1>
            <button>Print this!</button>
          </div>
        )}
        content={() => componentRef.current}
      />
      <SimpleBox ref={componentRef}>
        <h2>Printing Now!</h2>
      </SimpleBox>
    </div>
  );
};

export default PrintComponent;
