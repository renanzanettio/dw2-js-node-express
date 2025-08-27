let vetor = ['Laranja', 'Maçâ', 'Banana'];
document.write(`<p>Nosso vetor é ${vetor}</p>`);

vetor[3] = 'Morango'
document.write(`<p>Agora nosso vetor é ${vetor}</p>`);


// PUSH = Insere um novo elemento no FINAL do vetor:
vetor.push('Abacaxi');
document.write(`<p>Agora nosso vetor é ${vetor}</p>`);

vetor[0] = 'Pera' //se eu colocar uma atribuição em um indice que já existe, eu substituo o anterior
document.write(`<p>Agora nosso vetor é ${vetor}</p>`);

// UNSHIFT - Inseere um novo elemente no INICIO do vetor
vetor.unshift('Laranja');
document.write(`<p>Agora nosso vetor é ${vetor}</p>`);

// LENGTH - Retorna o numero de elementos no vetor
let numbers = [6, 8, 2, 9, 3, 800, 200]
document.write(`<p>Agora nosso vetor é ${numbers}</p>`);
document.write(`<p>o numero de elementos no nosso vetor é ${numbers.length}</p>`);

// SORT = Ordena o vetor
let numbersOrdenados = numbers.sort() // Vai guardar o vetor ordenado
document.write(`<p>Nosso vetor ordenado fica ${numbersOrdenados}</p>`);

document.write(`<p>Nossa lista de fruda ordenada é ${vetor}</p>`);

// Ordenando um vetor númerico em ordem crescente
document.write(`<p>${numbers.sort((a, b) => a - b)}</p>`)

// Ordenando um vetor númerico em ordem decrescente
document.write(`<p>${numbers.sort((a, b) => b - a)}</p>`)