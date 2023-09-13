import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GeneralNews from "./general_news/general-news";


function App() {
  // Función para mostrar una notificación emergente
  const notify = () => {
    toast.success("¡Nuevas noticias disponibles!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="App">

      <GeneralNews />

      {/* Toastify Container para mostrar notificaciones */}
      <ToastContainer />

      {/* Botón para simular una notificación emergente */}
      <button onClick={notify}>Mostrar Notificación</button>
    </div>
  );
}

export default App;

