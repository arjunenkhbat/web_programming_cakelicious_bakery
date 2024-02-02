import { fetchData } from "../component/cake-item-component";

const jsondata = await fetchData();
const cakeList = jsondata.record.cake;
console.log(cakeList);
class CakeComponent extends HTMLElement {
    constructor() {
        super();
        this.renderCartItems();
    }
    

    renderCartItems() {
        const cartContainer = document.getElementById("cart-item-container");
        console.log("hi");
        let html = '';
        cakeList.forEach(cake => {
            html += this.renderOnCart(cake);
        });

        cartContainer.innerHTML = html;

    }

    renderOnCart(cake) {
        this.id = cake.id;
        this.name = cake.name;
        this.img = cake.img;
        this.calories = cake.calories;
        this.rt = cake.rt;
        this.price = cake.price;
        let starsHTML = '';
        for (let i = 0; i < this.rt; i++) {
            starsHTML += '<span class="fa fa-star checked"></span>';
        }
        for (let i = this.rt; i < 5; i++) {
            starsHTML += '<span class="fa fa-star"></span>';
        }
        return `<div class="cart-item" id=${this.id}>
                <img class="cart-item-img" src="${this.img}" alt="byluunii zurag1" >
            
                <div>
                    <p class="cart-item-name">${this.name}</p>
                    ${starsHTML}
                    <p>Calories: ${this.calories}</p>
                </div>
                <p class="cart-item-perprice">${this.price}</p>
                <div class="cart-item-button-container">
                
                    <button class="cart-btn-k">-</button>
                    <button class="cart-btn-kk">0</button>
                    <button class="cart-btn-kkk">+</button>
                </div>
                <p class="cart-item-totalprice">${this.price}</p>
                <i class="material-icons" style="font-size:36px; color: var(--green);">delete</i>
            </div>`;
    }

    connectedCallback() {
        //implementation
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

window.customElements.define('cake-component', CakeComponent);