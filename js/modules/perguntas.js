export default class Perguntas {
  constructor(perguntas) {
    this.perguntas = document.querySelectorAll(perguntas);
  }

  mostrarResposta({ target }) {
    const controls = target.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    resposta.classList.toggle('ativo');
    const expanded = resposta.classList.contains('ativo');
    target.setAttribute('aria-expanded', expanded);
  }

  addEvent() {
    this.perguntas.forEach((pergunta) => {
      pergunta.addEventListener('click', this.mostrarResposta);
    });
  }

  init() {
    if (this.perguntas) {
      this.addEvent();
    }
  }
}
