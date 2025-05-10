import React from 'react'

const Livro = (props) => {
  return (
    <div>
        <h5>{props.titulo}</h5>
        <p>Auto: {props.autor}</p>
    </div>
  )
}

export default Livro