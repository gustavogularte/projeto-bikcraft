export default class Perguntas {
  constructor(perguntas) {
    this.perguntas = document.querySelectorAll(perguntas);
  }

  mostrarResposta({ target }) {
    const resposta = target.nextElementSibling;
    resposta.classList.toggle('ativo');
  }

  addEvent() {
    this.perguntas.forEach((pergunta) => {
      pergunta.addEventListener('click', this.mostrarResposta);
    });
  }

  init() {
    this.addEvent();
  }
}
