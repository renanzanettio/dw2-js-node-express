//MANIPULAÇÃO DE DATAS

document.write("<h3>Manipulando Datas: </h3>");

// Criar uma instância da classe Date() no Javascript
const dataAtual = new Date();
document.write(`<p>${dataAtual}</p>`);

// Mostrar o dia
const dia = dataAtual.getDate();
document.write(`<p>${dia}</p>`);

// Mostrar o dia atual
const mes = dataAtual.getMonth();
document.write(`<p>Estamos no mês: ${mes+1} </p>`);

// Mostrar o ano atual:
const ano = dataAtual.getFullYear();
document.write(`<p>${ano}</p>`);

// Mostrar o dia da semana;
const diaSemana = dataAtual.getDay();
document.write(`<p>${diaSemana}</p>`);

// Adicionando Dias, Meses e Anos a data atual
// Adicionando 4 anos ao ano atual
dataAtual.setFullYear(dataAtual.getFullYear() + 4);
document.write(`<p>Daqui a 4 anos será ${dataAtual.getFullYear()}</p>`);



// FORMATAÇÃO DE MOEDAS
// REAL 
const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
document.write(`<p>O valor da salário mínimo atual é ${salarioReal}.</p>`);

// DOLAR 
const salarioDolar = salario.toLocaleString("en", {
  style : "currency",
  currency : "USD"
})
document.write(`<p>Salário em dolar: ${salarioDolar}.</p>`);

const salarioConvertido = salario * 0.176;
document.write(`<p>Salário em valor de dolar: ${salarioConvertido.toLocaleString("en", {
  style: "currency",
  currency: "USD"
})}</p>`)



// FORMATAÇÃO DE STRING
document.write(`<h3>Formatação de Strings:</h3>`);
const nome = "Renan Zanetti";

// ALTERNANDO PARA LETRAS MAIUSCULAS 
document.write(`<p>Nome em maiúsculas: ${nome.toUpperCase()}</p>`);

// ALTERNANDO PARA LETRAS MINUSCULAS 
document.write(`<p>Nome em minúsculas: ${nome.toLowerCase()}</p>`);


// REMOVENDO OS ESPAÇOS DA STRING
const novoNome = nome.replace(/\s/g, "");

// NUMERO DE CARACTERES 
document.write(`<p>Numero de caracteres: ${novoNome.length}</p>`);
