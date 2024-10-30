import "../styles/ring.css";

const Ring = ({ size = "medium", color = "#007bff" }) => (
  <div className={`ring ${size}`} style={{ borderTopColor: color }}></div>
);
export default Ring;
