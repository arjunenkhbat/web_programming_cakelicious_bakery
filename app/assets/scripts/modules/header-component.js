class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    //implementation
  }

  connectedCallback() {
    this.innerHTML = `
       <header class="cake-header">
        <div class="cake-container">

          <div class="header-item-1">

            <div class="logo1">
              <a href="https://www.facebook.com/" class="icon facebook">
                <span><i class="fab fa-facebook-f"></i></span>
              </a>
              <a href="https://www.instagram.com/" class="icon instagram">
                <span><i class="fab fa-instagram"></i></span>
              </a>

              <a href="https://www.youtube.com/" class="icon youtube">
                <span><i class="fab fa-youtube"></i></span>
              </a>
            </div>
          </div>

          <div class="header-item-2">
            <a href="/">
              <img src="app/assets/images/removedBg-logo.png" alt="">
            </a>
          </div>


          <div class="header-item-3">
            <div class="icon_cart_globe">
            <a href="/cart" class="icon cart" id="cart-icon">
              <cart-component></cart-component></a>
            <a href="/login" class="icon globe">
            <span><i class="fas fa-user-circle" ></i></span>
            </a>
            
          </div>
        </div>
        </div>
      </header>
        
      
      <nav>
          <ul>
            <li><a href="/about">Танилцуулга</a></li>
            <li><a href="/cake">Бүтээгдэхүүн</a></li>
            <li><a href="/train">Сургалт</a></li>
            <li><a href="/special">Онцгой</a></li>
          </ul>
        </nav>
        `
  }

  disconnectedCallback() {
    //implementation
  }

  attributeChangedCallback(name, oldVal, newVal) {
    //implementation
  }

  adoptedCallback() {
    //implementation
  }

}

window.customElements.define('header-component', HeaderComponent);