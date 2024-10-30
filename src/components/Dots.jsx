import "../styles/dots.css";

const Dots = ({ size = "medium", color = "#474bff" }) => (
  <div className={`dots ${size}`} style={{ color }}></div>
);
export default Dots;
