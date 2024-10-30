import "../styles/bars.css";

const Bars = ({ size = "medium", color = "#474bff" }) => (
  <div className={`bars ${size}`} style={{ color }}></div>
);

export default Bars;
