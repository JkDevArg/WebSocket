"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

export default function Home() {
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    socket.on("newWhookNotification", (data) => {
      setNotification(data.message);
    });

    return () => {
      socket.off("newWhookNotification");
    };
  }, []);

  const createWhook = () => {
    socket.emit("createWhook", { name: "Nuevo Whook" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold mb-6">
          WebSocket con NestJS y NextJS
        </h1>
        <div className="space-x-4">
          <button
            onClick={createWhook}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Enviar Webhook
          </button>
          <button
            onClick={() => alert("Botón 2")}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            Alerta 1
          </button>
          <button
            onClick={() => alert("Botón 3")}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            Alerta 2
          </button>
        </div>
      </div>
      <div className="relative min-h-screen bg-gray-900">
          <a href="https://github.com/jkdevarg" target="_blank" className="fixed bottom-4 right-4 px-5 py-3 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
              GitHub
          </a>
      </div>

      {notification && (
        <div className="fixed top-10 right-10 bg-gray-800 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out">
          <p>{notification}</p>
        </div>
      )}
    </div>
  );
}
