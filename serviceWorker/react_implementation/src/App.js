import Navbar from "./components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container className="my-2">
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
