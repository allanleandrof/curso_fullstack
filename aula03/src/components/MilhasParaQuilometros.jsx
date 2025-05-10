import React from 'react'

const MilhasParaQuilometros = (props) => {
    const km = props.milha * 1.60934;
  return (
    <div>
        <h1>{props.milha} MILHA é o mesmo que {km} KM</h1>
    </div>
  )
}

export default MilhasParaQuilometros