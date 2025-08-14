//VARIÁVEIS PODEM SER DECLARADAS DE 3 FORMAS:
//VAR, LET, E CONST
//VAR: No geral evite o seu uso, pode não ser muito seguro;
//LET: Ultilize quando for necessário reatribuir o valor da variável;
//CONST: Utilize quando não precisar reatribuir o valor da variável;

// Revisão variáveis
// var nome = "Renan"
// var nome = "Carlos"
// let cidade = "Registro"
// let cidade = "Pariquera" //não pode
// let endereço
// endereço = "rua tal"
// const idade //não pode
// const idade = 18
// idade = 20 //não pode

//Tipos de Funções

// Função simples
const message = "<h2>Olá, Bem-vindo! Essa não é sua primeira função!</h2>";
function showMessage() {
  document.write(message);
}

// Invocando a função
showMessage();




// Função com parâmetros

const user = "Renan Zanetti";

function userMessage(parameter) {
    document.write(`<h3>O que deseja fazer hoje, ${parameter} </h3>`)
}

userMessage(user);  // ARGUMENTO

// FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1 = 10;
const n2 = 12;

function mult(n1, n2) {
  //Essa função recebe dois parâmetros e retorna o produto deles
  let result = n1 * n2;
  document.write(`<h3>O produto é ${result}</h3>`)
}

mult(n1, n2);

// FUNÇÃO COM RETORNO
const num1 = 1000;
const num2 = 5;

function div(num1, num2) {
  return num1 / num2
}

document.write(`<p>A divisão de ${num1} por ${num2} é ${div(num1, num2)}</p>`)

// FUNÇÃO COM DIFERENTES RETORNOS
const number = 4;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

document.write(`<p>O numero ${number} é <strong>${parImpar(number)}</strong></p>`)
