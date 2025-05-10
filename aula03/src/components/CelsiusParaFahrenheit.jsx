import React from 'react'

const CelsiusParaFahrenheit = (props) => {
    const fahrenheit = (props.celsius * 9) / 5 + 32;
  return (
    <div>
        <h1>{props.celsius}° F é o mesmo que {fahrenheit}° C </h1>
    </div>
  )
}

export default CelsiusParaFahrenheit