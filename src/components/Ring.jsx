import "../styles/ring.css";

const Ring = ({ size = "medium", color = "#474bff" }) => (
  <div className={`ring ${size}`} style={{ borderTopColor: color }}></div>
);
export default Ring;
