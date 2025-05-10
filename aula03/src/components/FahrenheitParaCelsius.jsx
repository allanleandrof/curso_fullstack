import React from 'react'

const FahrenheitParaCelsius = (props) => {
    const celsius = ((props.fahrenheit - 32) * 5) / 9  
  return (
    <div>
        <h1>{props.fahrenheit}° C é o mesmo que {celsius}° F </h1>
    </div>
  )
}

export default FahrenheitParaCelsius