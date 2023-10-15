import "Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  return (
    <div className="chart">
      {/* output list of content dynamically */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // label is the year; is unique
          value={dataPoint.value} // value is the amount
          maxValue={null} // maxValue is the maximum amount
          label={dataPoint.label} // label is the year
        />
      ))}
    </div>
  );
};

export default Chart;
