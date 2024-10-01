import UltimoPulsado from "./ultimo_pulsado";

export default function Trozo2({onClick, pulsado }) {

  let mostrarPulsado = <div>Ninguno</div>;

  if(pulsado == 2) {
    mostrarPulsado = <UltimoPulsado pulsado={pulsado}></UltimoPulsado>;
  } else {
    mostrarPulsado = <div>Ninguno</div>;
  }

  console.log("Trozo2: ", pulsado);

  return (
   <div className="trozo2 mitad pulsa" onClick={onClick}>
      <h1>Trozo 2</h1>
      {mostrarPulsado}
   </div>
  );
}
