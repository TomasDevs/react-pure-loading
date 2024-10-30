import "../styles/pulse.css";

const Pulse = ({ size = "medium", color = "#474bff" }) => (
  <div className={`pulse ${size}`} style={{ color }}></div>
);

export default Pulse;
