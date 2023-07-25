export default class HeaderMenu {
  constructor(menu, menuBotao, menuLinks) {
    this.menu = document.querySelector(menu);
    this.menuBotao = document.querySelector(menuBotao);
    this.menuLinks = document.querySelectorAll(menuLinks);

    this.handleClick = this.handleClick.bind(this);
    this.ariaExpandedToggle = this.ariaExpandedToggle.bind(this);
  }

  handleClick() {
    this.menu.classList.toggle('ativo');
  }

  linkAtivo() {
    const url = document.location.href;
    this.menuLinks.forEach((a) => {
      if (a.href === url) {
        a.classList.add('ativo');
      }
    });
  }

  ariaExpandedToggle() {
    if (window.innerWidth < 950) {
      this.menuBotao.setAttribute('aria-expanded', true);
    } else {
      this.menuBotao.setAttribute('aria-expanded', false);
    }
  }

  addEvent() {
    this.menuBotao.addEventListener('click', this.handleClick);
    window.addEventListener('resize', this.ariaExpandedToggle);
  }

  init() {
    if (this.menuBotao && this.linkAtivo) {
      this.linkAtivo();
      this.addEvent();
      this.ariaExpandedToggle();
    }
  }
}
