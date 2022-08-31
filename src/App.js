import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherApp from "./components/WeatherApp";
import { Container } from "@mui/material";


function App() {
  return (
    <Container
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        margin: "auto auto",
        boxShadow: "0px 0px 10px silver",
        height: "60vh",
        width: "65vw",
        borderRadius: "30px",
      }}
    >
      <WeatherApp />
    </Container>
  );
}

export default App;
