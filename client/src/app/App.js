import "./App.css";
import NavBar from "features/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import useSocket from "common/hooks/useSocket";
import Home from "features/Home/Home";

const App = () => {
  useSocket();
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
