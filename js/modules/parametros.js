export default class Parametros {
  constructor() {
    this.parametros = new URLSearchParams(document.location.search);
  }

  ativarParametro(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
      elemento.checked = true;
    }
  }

  init() {
    this.parametros.forEach(this.ativarParametro);
  }
}
