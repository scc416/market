import "./App.css";
import NavBar from "features/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const socket = io.connect("http://localhost:8080");
    socket.emit("hello");
    socket.on("hello", () => {
      console.log("Server says hi");
    });
  }, []);
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
