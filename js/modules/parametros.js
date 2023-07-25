export default function Parametros() {
  const parametros = new URLSearchParams(document.location.search);

  function ativarParametro(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
      elemento.checked = true;
    }
  }

  parametros.forEach(ativarParametro);
}
