class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  buzinar() {
    return 'Beep! Bepp!';
  }
}

// criando INSTANCIAS (objetos) derivadas da Classe Carro
const carroPopular = new Carro('Fiat', 'Uno', 2012);
document.write(
  `<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano de ${carroPopular.ano}, Quando buzina faz ${carroPopular.buzinar()}</p>`
);

// Objeto - Carro Esportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = 'Chevrolet';
carroEsportivo.modelo = 'Camaro';
carroEsportivo.ano = 2024;
document.write(
  `<p>O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano de ${carroEsportivo.ano}, Quando buzina faz ${carroEsportivo.buzinar()}</p>`
);

// Adicionando um novo atributo
carroEsportivo.corNeon = "Azul";

// ADicionando métodos
carroEsportivo.turbo = () => {
  return "Vrummmmm! o carro está acelerando muito!!!";
}

document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possui o neon da cor ${carroEsportivo.corNeon}. E quando usa turbo ${carroEsportivo.turbo()}</p>`)