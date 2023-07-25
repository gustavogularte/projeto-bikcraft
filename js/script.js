import HeaderMenu from './modules/headerMenu.js';
import Perguntas from './modules/perguntas.js';
import Parametros from './modules/parametros.js';
import Galeria from './modules/galeria.js';

const headerMenu = new HeaderMenu(
  '[data-menu="menu"]',
  '[data-menu="menuBotao"]',
  '[data-menu="menu"] a',
);
headerMenu.init();

const perguntas = new Perguntas('[data-seguros="perguntas"] button');
perguntas.init();

const parametros = new Parametros();
parametros.init();

const galeria = new Galeria('.bicicleta-imagens', '.bicicleta-imagens li');
galeria.init();
