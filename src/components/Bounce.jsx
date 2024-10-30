import "../styles/bounce.css";

const Bounce = ({ size = "medium", color = "#474bff" }) => (
  <div className={`bounce ${size}`}>
    <div style={{ backgroundColor: color }}></div>
    <div style={{ backgroundColor: color }}></div>
    <div style={{ backgroundColor: color }}></div>
  </div>
);

export default Bounce;
