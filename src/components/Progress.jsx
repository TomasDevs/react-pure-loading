import "../styles/progress.css";

const Progress = ({ size = "medium", color = "#474bff" }) => (
  <div className={`progress ${size}`} style={{ color }}></div>
);

export default Progress;
