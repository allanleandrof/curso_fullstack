const temperaturas = [25, 30, 15, 20];

console.log(`A primeira temperatura é: ${temperaturas[0]}`);
console.log(`A segunda temperatura é: ${temperaturas[1]}`);
console.log(`A terceira temperatura é: ${temperaturas[2]}`);
console.log(`A quarta temperatura é: ${temperaturas[3]}`);

var tempSelecionada = temperaturas[Math.floor(Math.random()*temperaturas.length)];


const converteTempCelsiusForFahrenheit = (temperatura) => {
    return ((temperatura*9)/5) + 32;
}

console.log(`Temperatura em celsius é: ${tempSelecionada}°C`);
console.log(`Temperatura em Fahrenheit é: ${converteTempCelsiusForFahrenheit(tempSelecionada)}°F`);