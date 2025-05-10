import React, { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1);

    function incrementarContador () {
        setContador(contador+1)
    }

    function decrementarContador () {
        setContador(contador-1)
    }

  return (
    <div>
        <p>Você clicou {contador} vezes</p>
        <button onClick={incrementarContador}>
            Incrementar Contador!
        </button>
        <button onClick={decrementarContador}>
            Decrementar Contador!
        </button>
    </div>
  )
}

export default HookContador