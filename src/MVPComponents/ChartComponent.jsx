import { Chart } from "react-google-charts";

const data = [
  ["Opinion", "Percentage"],
  ["Groceries are too expensive", 92.87],
  ["Grocery costs are fine", 7.13],
];

const options = {
  title: "Americans Believe Groceries are too Expensive",
  is3D: true,
};

const ChartComponent = () => {
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      {/* <p>Pollfish survey</p>
            <p>Sample Size 1500 Americans</p> */}
    </div>
  );
};

export default ChartComponent;
