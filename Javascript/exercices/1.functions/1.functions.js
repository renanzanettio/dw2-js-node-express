//1
function saudacaoPersonalizada(nome) {
    document.write(`<p>Olá, ${nome}! Bem-vindo(a) à Calculadora Universal!</p>`);
};
saudacaoPersonalizada("Renan");

//2
function operacaoMatematica(num1, operador, num2) {
    resultado = eval(` ${num1} ${operador} ${num2} `)
    document.write(`<p>O resultado de ${num1} ${operador} ${num2} é ${resultado}</p>`);
}
operacaoMatematica(2, "+", 4);

//3
let ex3Number = 6;
const calcularDobro = function (numero) {
    return numero * 2;
}
document.write(`<p>O dobro de ${ex3Number} é ${calcularDobro(ex3Number)}</p>`);

//4
let ex4Number = 9;
const calcularMetade = numero => {
    return numero / 2
}
document.write(`O dobro de ${ex4Number} é ${calcularMetade(ex4Number)}`);

//5
const iife = (function() {
    document.write(`<p>Calculadora Universal pronta para uso!</p>`);
})()