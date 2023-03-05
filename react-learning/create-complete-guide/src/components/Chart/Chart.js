import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
    const dataPointValue=props.dataPoints.map(datapoint=> datapoint.value)
    const totalMax=Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar key={datapoint.key} value={datapoint.value} maxValue={totalMax} label={datapoint.label}/>
      ))}
    </div>
  );
}
export default Chart;
