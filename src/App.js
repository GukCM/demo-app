import React from "react";
import { Header } from "./components/Header";
import { ProductosLista } from "./components/Productos";
import 'boxicons';
function App() {
  return (
    <div className="App">
      <Header />
      <ProductosLista />
    </div>
  );
}

export default App;
