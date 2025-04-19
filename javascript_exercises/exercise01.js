var nome = "Allan";
const cpf = "123.123.123-12";

const retornaSobreNome = () => {
    let sobreNome = "Fernandes";
    return sobreNome;
}

console.log(nome);
console.log(retornaSobreNome());
console.log(cpf);
console.log(`O nome é ${nome}. O sobre nome é ${retornaSobreNome()}. O cpf é ${cpf}`);