import React from "react";
import { render } from "react-dom";

function SaludarEnIdiomas({ idioma }) {
  if (idioma === "en") {
    return <span>Hello</span>;
  } else {
    return <span>Hola</span>;
  }
}
const Saludo = () => {
  const nombre = "Uriel";
  return (
    <p>
      <SaludarEnIdiomas idioma="es" /> {`${nombre}`}
    </p>
  );
};


const Saludo2 = () => {
  const nombre = "Uriel";
  const idioma = "es";
  return <div>{idioma === "en" ? <p>Hello</p> : <p>Hola</p>}</div>;
};

const nombres = ["Uriel", "Edu", "Joel", "Tai"];

function getNombres() {
  const elementosLista = [];
  for (var i = 0; i <= nombres.length; i++) {
    elementosLista.push(<li>{nombres[i]}</li>);
  }
  return elementosLista;
}

/*cuando queremos imprimir una lista, es necesario incluir una key
para que no tengamos que estar renderizando todo el documento
si no solo ese elemento que en caso hayamos cambiado*/

const Nombres = () => {
  /*return (
    <ul> {getNombres()}</ul>
  )*/
  return (
    <ul>
      {" "}
      {nombres.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <h1>
      <Nombres />
    </h1>
  );
};

render(<App />, document.getElementById("react-app"));
