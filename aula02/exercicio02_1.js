const objetivoCarreira = "Engenheiro de Software Sênior"

function retornaObjetivoCarreira (tecnologia){
    return `Meu objetivo de carreia é me tornar um ${tecnologia}`
}
//arrow function
const retornaObjetivoCarreira2 = (tecnologia) => {
    return `Meu objetivo de carreia é me tornar um ${tecnologia}`
}

console.log(retornaObjetivoCarreira(objetivoCarreira));
console.log(retornaObjetivoCarreira2(objetivoCarreira));