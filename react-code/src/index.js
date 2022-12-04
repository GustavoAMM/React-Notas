import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Contador() {
  const [mjs, setMsj] = useState();
  const [contador, setContador] = useState(0);
  useEffect(() => {
    console.log("render");
  }, [contador]);

  return (
    <div>
      <input
        onChange={(e) => {
          setMsj(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          alert("el mensaje es: " + mjs);
        }}
      >
        Save
      </button>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      <button onClick={() => setContador(contador - 1)}>Sumar</button>
      <button onClick={() => setContador(0)}>Sumar</button>
    </div>
  );
}

root.render(
  <>
    <Contador></Contador>
  </>
);
