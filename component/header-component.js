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
              <a href="#" class="icon facebook">
                <span><i class="fab fa-facebook-f"></i></span>
              </a>
              <a href="#" class="icon instagram">
                <span><i class="fab fa-instagram"></i></span>
              </a>

              <a href="#" class="icon youtube">
                <span><i class="fab fa-youtube"></i></span>
              </a>
            </div>
          </div>

          <div class="header-item-2">
            <a href="main.html">
              <img src="/images/removedBg-logo.png" alt="">
            </a>
          </div>


          <div class="header-item-3">
            <div class="icon_cart_globe">
            <a href="cart.html" class="icon cart" id="cart-icon">
              <span id="cartCount">0</span><i class="fa fa-shopping-cart"></i>
            </a>
            <a href="#" class="icon globe">
              <span><i class="fas fa-globe"></i></span>
            </a>
          </div>
        </div>
        </div>
      </header>
        <nav>
          <ul>
            <li><a href="aboutUs.html">Танилцуулга</a></li>
            <li><a href="cake.html">Бүтээгдэхүүн</a></li>
            <li><a href="train.html">Сургалт</a></li>
            <li><a href="special.html">Онцгой</a></li>
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