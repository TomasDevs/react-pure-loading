import "../styles/spinner.css";

const Spinner = ({ size = "medium", color = "#474bff" }) => (
  <div className={`spinner ${size}`} style={{ color }}></div>
);

export default Spinner;
