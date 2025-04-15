const notas = [10.00,9.00,9.00];

console.log(`A primeira nota é: ${notas[0]}`);
console.log(`A segunda nota é: ${notas[1]}`);
console.log(`A terceira nota é: ${notas[2]}`);

var somaNotas = 0;
for(let i = 0; i < notas.length; i++){
    somaNotas += notas[i];
}
 
console.log(`Media das notas é: ${(somaNotas/notas.length).toFixed(1)}`);