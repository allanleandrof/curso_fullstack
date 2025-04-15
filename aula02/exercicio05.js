const notas = [10.00, 8.00, 2.00]
const mediaAprovacao = 7.00;

console.log(`A primeira nota é: ${notas[0]}`);
console.log(`A segunda nota é: ${notas[1]}`);
console.log(`A terceira nota é: ${notas[2]}`);

var somaNotas = 0;
for(let i = 0; i < notas.length; i++){
    somaNotas += notas[i];
}

var media = somaNotas/notas.length;
console.log(`A media nota é: ${media.toFixed(2)}`);

if(media >= mediaAprovacao){
    console.log(`Aluno aprovado`);
} else {
    console.log(`Aluno reprovado`);
}
