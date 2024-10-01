import UltimoPulsado from "./ultimo_pulsado";

export default function Trozo1({onClick, pulsado }) {

  let mostrarPulsado = <div>Ninguno</div>;

  if(pulsado == 1) {
    mostrarPulsado = <UltimoPulsado pulsado={pulsado}></UltimoPulsado>;
  } else {
    mostrarPulsado = <div>Ninguno</div>;
  }

  console.log("Trozo1: ", pulsado);

  return (
   <div className="trozo1 mitad pulsa" onClick={onClick}>
      <h1>Trozo 1</h1>
      {mostrarPulsado}
   </div>
  );
}
