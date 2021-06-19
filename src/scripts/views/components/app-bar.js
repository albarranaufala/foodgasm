class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="container">
        <a href="#/" class="logo" aria-label="Foodgasm Logo">
          <img src="images/logo/foodgasm-logo.png" alt="Foodgasm Logo">
        </a>
        <button id="burgerButton" class="burger" type="button" aria-label="Open navigation">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ff6600">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav id="navigationDrawer">
          <ul class="nav">
            <li>
              <a href="#/restaurants" class="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="#/favorites" class="nav-item">
                Favorite
              </a>
            </li>
            <li>
              <a href="https://albarranaufala.github.io/albarra-portfolio" target="_blank" rel="noopener noreferrer" class="nav-item">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
