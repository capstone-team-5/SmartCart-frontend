import { Chart } from "react-google-charts";


const data = [
    ["Month", "Savings", { role: "style" }],
    ["January", 92.87, "#FF5733"],      
    ["February", 80.13, "#0000FF"],     
    ["March", 100.54, "#008000"],       
    ["April", 75.82, "#FFFF00"],       
    ["May", 98.76, "#FFA500"],          
    ["June", 150.75, "#FFC0CB"],       
    ["July", 44.44, "#800080"],         
    ["August", 49.87, "#FF5733"],       
    ["September", 120.44, "#0000FF"],   
    ["October", 84.14, "#008000"],      
    ["November", 32.62, "#FFFF00"],    
    ["December", 98.76, "#FFA500"]      
];



const options = {
    title: "Americans Believe Groceries are too Expensive",
    pieHole: 0.4,
    is3D: false
};

const MockSavingsChart = () => {
    return (
        <div>
            <p>This is a mock savings chart</p>
            <Chart chartType="Bar" data={data} options={options} />
        </div>
    )
};

export default MockSavingsChart;