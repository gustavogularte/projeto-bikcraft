export default class Galeria {
  constructor(galeria, imagens) {
    this.galeria = document.querySelector(galeria);
    this.imagens = document.querySelectorAll(imagens);

    this.mudarImagem = this.mudarImagem.bind(this);
  }

  mudarImagem({ currentTarget }) {
    this.galeria.prepend(currentTarget);
  }

  addEvent() {
    this.imagens.forEach((imagem) => {
      imagem.addEventListener('click', this.mudarImagem);
    });
  }

  init() {
    this.addEvent();
  }
}
