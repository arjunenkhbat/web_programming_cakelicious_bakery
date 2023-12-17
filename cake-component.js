import { fetchData } from "./dataFetch.js";

const jsondata = await fetchData();
const cakeList = jsondata.record.cake;
console.log(cakeList);
class CakeComponent extends HTMLElement {
    constructor() {
        super();
        //this.#renderCakeList();
        this.#renderCartItems();
    }

    #renderCakeList(){
        const container = document.getElementById("app");
        let html = '';
        cakeList.forEach(cake => {
            html += this.#render(cake);
        });
        container.innerHTML = html;
    }
    #renderCartItems(){
        const cartContainer = document.getElementById("cart-item-container");
        console.log("hi");
        let html = '';
        cakeList.forEach(cake => {
            html += this.#renderOnCart(cake);
        });
       
        cartContainer.innerHTML = html;
        
    }

    #render(cake){
        this.id = cake.id;
        this.name = cake.name;
        this.img = cake.img;
        this.calories = cake.calories;
        this.rt = cake.rt;
        return `<article id=${this.id}>
                    <ul>
                        <li><h>${this.name}</h></li>
                        <li>Үнэлгээ:${this.rt}</li>
                        <li>Калори:${this.calories}</li>
                        <hr>
                        <li><img src="${this.img}" alt="cake_image"></li>
                        <li><button id="button" onclick="CartCounter(this.id)"> Идье +</button></li>
                    </ul>
                </article>`;
    }
    #renderOnCart(cake){
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