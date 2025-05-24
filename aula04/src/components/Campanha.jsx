import React from 'react'
import styles from './Campanha.module.css'

const Campanha = ({ mes }) => {

    function defineMensagem(mesDaCampanha) {
        if (mesDaCampanha === "setembro"){
            return "Prevenção ao suícidio"
        } else if (mesDaCampanha === "outubro") {
            return "Cosncientização sobre o câncer de mama"
        } else if (mesDaCampanha === "novembro") {
            return "Prevenção e combate ao câncer de prostata"
        }
    }

    function defineCorDeFundo(mesDaCampanha) {
        if (mesDaCampanha === "setembro"){
            return styles.setembro
        } else if (mesDaCampanha === "outubro") {
            return styles.outubro
        } else if (mesDaCampanha === "novembro") {
            return styles.novembro
        }
    }

  return (
    <div class={defineCorDeFundo(mes)}>
        {defineMensagem(mes)}
    </div>
  )
}

export default Campanha