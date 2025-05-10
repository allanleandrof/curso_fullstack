import React from 'react'
import ImagemDeAsset from '../assets/img-da-assets.jpg'

const TrabalhandoComImagensCondicionais = (props) => {

    const exibeImagem = (tipo) => {
        if (tipo === "PUBLIC") {
           return <img src="img-da-public.jpg" alt='' />
        } else if (tipo === "ASSET") {
            return <img src={ImagemDeAsset} alt='' />
        } else {
            return <h3>Imagem não encontrada.</h3>
        }
    }

  return (
    <div>
        {exibeImagem(props.tipo)}
    </div>
  )
}

export default TrabalhandoComImagensCondicionais