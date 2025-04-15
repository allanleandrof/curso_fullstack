const cpf = "123.456.789-10";
var nome = "Allan"

function retornaSobreNome(){
    let sobreNome = "Fernandes";

    return sobreNome;
} 

console.log(cpf);
console.log(nome);
console.log(retornaSobreNome());

console.log(cpf + " " + " " + nome + " " + retornaSobreNome());
console.log(`o nome é: ${nome}. O sobrenome é: ${retornaSobreNome()}.Cpf: ${cpf}.`);