import { Chart } from "react-google-charts";

const data = [
  ["", "Value", { role: "style" }],
  ["Average", 294.15, "orange"],
  ["Salt & Pepper Gourmet", 271.67, "green"],
];

const options = {
  title: "You Save Using $mrtCART",
  is3D: true,
  vAxis: { ticks: [0, 50, 100, 150, 200, 250, 300] },
  legend: "none",
  chartArea: { width: "70%", height: "70%" },
  bar: { groupWidth: "40%" },
};

const SavingsChartComponent = () => {
  return (
    <div>
      <Chart
        chartType="ColumnChart"
        data={data}
        options={options}
        width={"100%"}
        height={"300px"}
        className="text-2xl text-center leading-tight tracking-tight text-gray-900 dark:text-white mb-40 font-extrabold"
      />
    </div>
  );
};

export default SavingsChartComponent;
