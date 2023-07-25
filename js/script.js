import HeaderMenu from './modules/headerMenu.js';
import Perguntas from './modules/perguntas.js';
import Parametros from './modules/parametros.js';

const headerMenu = new HeaderMenu(
  '[data-menu="menu"]',
  '[data-menu="menuBotao"]',
  '[data-menu="menu"] a',
);
headerMenu.init();

const perguntas = new Perguntas('[data-seguros="perguntas"] dt');
perguntas.init();

Parametros();
