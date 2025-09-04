class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }

  correr() {
    return "O herói está correndo";
  }

  andar() {
    return "O herói está andando";
  }

  atacar() {
    return "O herói está atacando";
  }

  defender() {
    return "O herói está se defendendo";
  }
}

const homemAranha = new Heroi("Homem-Aranha", 100, 120, 200);
homemAranha.teia = false;
homemAranha.sentidoAranha = function() {
  return homemAranha.nome + " detectou perigo";
}

const superMan = new Heroi("Superman", 500, 200, 500);
superMan.podeVoar = true;
superMan.visaoCalor = function() {
  return "Está usando a visão de calor";
}

const batman = new Heroi("Batman", 100, 100, 150);
batman.esconder = true;
batman.investigar = function() {
  return "Está investigando um crime";
}

document.write(`<p>${batman.investigar()}</p>`);
document.write(`<p>${superMan.visaoCalor()}</p>`);
document.write(`<p>${homemAranha.sentidoAranha()}</p>`);