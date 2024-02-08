class FooterComponent extends HTMLElement {
    constructor() {
        super();
        //implementation
    }

    connectedCallback() {
        this.innerHTML = `<footer class="footer">
    <div class="footer-item-1">
      <img src="app/assets/images/removedBg-logo.png" alt="">
    </div>
    <div class="footer-item-2">
      <ul class="footer-menu">
        <li><a href="Бидний тухай.html">Бидний тухай</a></li>
        <li> <a href="Нийгмийн хариуцлага.html">Нийгмийн хариуцлага</a></li>
        <li><a href="Үйлчилгээний нөхцөл.html">Үйлчилгээний нөхцөл</a></li>
        <li><a href="Нууцлалын бодлого.hmtl">Нууцлалын бодлого</a></li>
      </ul>
    </div>
    <div class="footer-item-3">
      <ul class="footer-contact">
        <li><a href="">холбоо барих</a></li>
        <li><a href="">99110247</a></li>
      </ul>
  
  
      <div class="footer-wrapper">
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
  </footer>`;
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

window.customElements.define('footer-component', FooterComponent);