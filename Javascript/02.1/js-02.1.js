// ARRAYS: Servem para armazenar uma lista, ou seja, diferentes elementes em única variável.

const products = ["Computador", "Notebook", "Celular", "Tablet"];
document.write(`<p>${products}</p>`);
document.write(typeof(products));
document.write(`<p>Exibindo um elemento do array através do índice:</p>`)
document.write(`<p>${products[3]}</p>`)

document.write(`<p>Exibindo todos elementos de um array através do forEach.</p>`)
products.forEach(produto => {
  document.write(`<p>${produto}</p>`);
})

document.write(`<p>Mostrando os índices e valores com o forEach:</p>`)
products.forEach((produto, idx) => {
  document.write(`<p>${idx+1} - ${produto}</p>`);
})