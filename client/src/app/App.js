import "./App.css";
import NavBar from "features/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import useSocket from "common/hooks/useSocket";

const App = () => {
  useSocket();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<>Hello</>} />
      </Routes>
    </>
  );
};

export default App;
