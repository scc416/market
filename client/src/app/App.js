import "./App.css";
import NavBar from "features/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<>Hello</>} />
      </Routes>
    </>
  );
}

export default App;
