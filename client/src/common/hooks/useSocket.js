import { io } from "socket.io-client";
import { useEffect } from "react";

const useSocket = () => {
  useEffect(() => {
    const socket = io.connect("http://localhost:8080");
    socket.emit("hello");
    socket.on("hello", () => {
      console.log("Server says hi");
    });
  }, []);
};

export default useSocket;
