export default class HeaderMenu {
  constructor(menu, menuBotao, menuLinks) {
    this.menu = document.querySelector(menu);
    this.menuBotao = document.querySelector(menuBotao);
    this.menuLinks = document.querySelectorAll(menuLinks);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.menu.classList.toggle('ativo');
    if (this.menu.classList.contains('ativo')) {
      this.menuBotao.setAttribute('aria-expanded', true);
    } else {
      this.menuBotao.setAttribute('aria-expanded', false);
    }
  }

  linkAtivo() {
    const url = document.location.href;
    this.menuLinks.forEach((a) => {
      if (a.href === url) {
        a.classList.add('ativo');
      }
    });
  }

  addEvent() {
    this.menuBotao.addEventListener('click', this.handleClick);
  }

  init() {
    if (this.menuBotao && this.linkAtivo) {
      this.linkAtivo();
      this.addEvent();
    }
  }
}
