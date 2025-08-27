// FUNÇÃO ANÔNIMA
// function (num1, num2) {
//   return num1 + num1;
// }

const soma = function (n1,n2) {
  return n1 + n2;
};

document.write(`<p>O resultado da soma é ${soma(8,7)} </p>`)

const tipo = typeof(soma)
document.write(`${tipo}`)

// ARROW FUNCTION (função anônima)
const dobro = function (x) {
  return x * 2;
};
document.write(`<p>O dobro do número é ${dobro(900)}</p>`);

// ARROW FUNCTION com mais de um parâmetro
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`)
};

document.write(`<p>O resultado da operação é ${calc(1100, "-", 1)}.</p>`);

// SIMPLIFICANDO ARROW FUNCTION COM UM UNICO RETORNO
const calculadora = (num1, operador, num2) => 
  eval(`${num1} ${operador} ${num2}`);

document.write(`<p>O resultado da operação é ${calc(1100, "-", 1)}.</p>`);


// IIFE - Função Imediata (Imediately Invoked Function Expression)

const iife = (function () {
  document.write(`<p>Estou sendo invocada imediatamente!</p>`)
})();

// IIFE COM PARAMETRO
const loadUser = (function(user){
  document.write(`<p>Carregando as informações do usuário: <strong>${user}</strong></p>`)
})("Diego")

