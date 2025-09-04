const listaClientes = [{
  nome: 'Renan',
  endereco: 'Miracatu',
  cpf : 1234567890
},
{
  nome: 'Carlos',
  endereco: 'Registro',
  cpf : 7821354687
},
{
  nome: 'Heloisa',
  endereco: 'Sete Barras',
  cpf : 5468546542
},]

listaClientes.forEach(cliente => {
  document.write(`
    Nome: ${cliente.nome},<br>
    Endereço: ${cliente.endereco},<br>
    CPF: ${cliente.cpf},<br>
    `)
});

document.write("-------------------------------------------------<br>");

listaClientes.push({
  nome: "Raissa",
  endereco: "Juquia",
  cpf: 45213546876
})

listaClientes.forEach(cliente => {
  document.write(`
    Nome: ${cliente.nome},<br>
    Endereço: ${cliente.endereco},<br>
    CPF: ${cliente.cpf},<br>
    `)
});

document.write("-------------------------------------------------<br>");


listaClientes.unshift({
  nome: "Diego Max",
  endereco: "Brasil",
  cpf: 45546246876
})

listaClientes.forEach(cliente => {
  document.write(`
    Nome: ${cliente.nome},<br>
    Endereço: ${cliente.endereco},<br>
    CPF: ${cliente.cpf},<br>
    `)
});