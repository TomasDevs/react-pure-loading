import "../styles/wave.css";

const Wave = ({ size = "medium", color = "#474bff" }) => (
  <div className={`wave ${size}`}>
    <div style={{ backgroundColor: color }}></div>
    <div style={{ backgroundColor: color }}></div>
    <div style={{ backgroundColor: color }}></div>
    <div style={{ backgroundColor: color }}></div>
    <div style={{ backgroundColor: color }}></div>
  </div>
);

export default Wave;
