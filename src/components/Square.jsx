import "../styles/square.css";

const Square = ({ size = "medium", color = "#474bff" }) => (
  <div className={`square ${size}`} style={{ backgroundColor: color }}></div>
);

export default Square;
