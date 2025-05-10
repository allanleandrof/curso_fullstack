import React from 'react'

const QuilometrosParaMilhas = (props) => {
    const milha = props.km * 0.621371;
  return (
    <div>
        <h1>{props.km} KM é o mesmo que {milha} MILHA</h1>
    </div>
  )
}

export default QuilometrosParaMilhas