"use client";

import Trozo2 from "./trozo2";
import Trozo1 from "./trozo1";
import { useState } from "react";

export default function Home() {
  const [pulsado, setPulsado] = useState(0);

  function pulsar(trozo) {
    setPulsado(trozo);
    console.log(trozo);
  }

  return (
    <div className="partido">
      <Trozo1 pulsado={pulsado} onClick={() => pulsar(1)}/>
      <Trozo2 pulsado={pulsado}  onClick={() => pulsar(2)}/>
    </div>
  );
}