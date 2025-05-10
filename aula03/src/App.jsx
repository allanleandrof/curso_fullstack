import React from 'react'
import Aluno from './components/Aluno'
import AlunoComFragment from './components/AlunoComFragment'

const App = () => {
  const alunos = [
        {nome: "Allan", email: "a@a.com", curso: "CdaC", media: 7.00},
        {nome: "Allan 2", email: "a@a.com", curso: "CdaC", media: 5.00},
        {nome: "Allan 3", email: "a@a.com", curso: "CdaC", media: 10.00}
    ]
  return (
    <>
    {
      alunos.map((aluno, index) => (
        <span key={index}><AlunoComFragment nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}></AlunoComFragment></span>
      ))
    }
    </>
  )
}

export default App