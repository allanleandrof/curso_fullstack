const pessoa = {
    nome: "Allan",
    cpf: "123.123.123-12",
    Cidade: "Cabedelo"
}

const notas = [10.00, 9.00, 9.00, 2.00] 

console.log(`O nome é ${pessoa.nome}. O cpf é ${pessoa.cpf}. A cidade é ${pessoa.Cidade}`);

var media = 0;
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);

    media += notas[i];
}

console.log(`Media: ${media/notas.length}.`);

var notaConvert = notas[Math.floor(Math.random() * notas.length)]*10;

console.log(`nota convertida: ${notaConvert}.`);