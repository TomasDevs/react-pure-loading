import Bounce from "./components/Bounce";
import Dots from "./components/Dots";
import Pulse from "./components/Pulse";
import Ring from "./components/Ring";
import Square from "./components/Square";
import Wave from "./components/Wave";
import Spinner from "./components/Spinner";
import Progress from "./components/Progress";
import Bars from "./components/Bars";

function App() {
  return (
    <>
      <Dots size="medium" color="#474bff" />
      <Bounce size="large" color="#00ff00" />
      <Wave size="medium" color="#474bff" />
      <Ring size="large" color="black" />
      <Square size="small" color="#ff6347" />
      <Pulse size="large" color="#bada55" />
      <Spinner size="medium" color="black" />
      <Progress size="large" color="#00ff00" />
      <Bars size="medium" color="#474bff" />
    </>
  );
}

export default App;
